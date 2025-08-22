// create-component.js
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// --- Helper Functions ---

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 */
const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Creates a readline interface to ask a question in the terminal.
 * @param {string} query The question to ask the user.
 * @returns {Promise<string>} A promise that resolves with the user's answer.
 */
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
};

// --- Main Logic ---

// 1. Get arguments from the command-line.
const componentNameInput = process.argv[2];
const customPath = process.argv[3];
let scaffoldType = process.argv[4]; // Optional: 'page' or 'component'

// 2. Validate the component name.
if (!componentNameInput) {
  console.error("❌ Error: Please provide a name for your component/page.");
  console.log("💡 Usage: node create-component.js <Name> [path] [type]");
  process.exit(1); // Exit with an error code.
}

// 3. Format names.
const componentName = capitalize(componentNameInput); // e.g., "MyComponent"
const componentNameLower = componentName.toLowerCase(); // e.g., "mycomponent"

// --- Templates ---

const getComponentTemplate = (name) => `import React from 'react';

// Define the props interface for the component.
interface I${name}Props {
  // TODO: Add your component's props here
}

/**
 * A basic React component.
 * @param {I${name}Props} props - The props for the component.
 */
const ${name} = ({}: I${name}Props) => {
  return (
    <div className="${name.toLowerCase()}">
      {/* TODO: Add your component's JSX here */}
      <h1>${name} Component</h1>
    </div>
  );
};

export default ${name};
`;

const getPageTemplate = (name) => `import type { Route } from "../${
  customPath ? path.basename(customPath) : path.basename(process.cwd())
}/+types/${name.toLowerCase()}";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function ${name}({ loaderData }: Route.ComponentProps) {

  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>${name} Page</h1>
    </div>
  );
}
`;

/**
 * Determines which template to use and writes the file.
 * @param {string} type - The type of scaffold ('page' or 'component').
 */
const createFile = (type) => {
  let template;
  if (type === "p") {
    template = getPageTemplate(componentName);
  } else {
    // Default to component
    template = getComponentTemplate(componentName);
  }

  // Determine the target directory.
  const targetDirectory = customPath
    ? path.join(process.cwd(), customPath)
    : process.cwd();

  // Ensure the target directory exists.
  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
    console.log(`📁 Created directory: ${targetDirectory}`);
  }

  // Define the full file path.
  const filePath = path.join(targetDirectory, `${componentNameLower}.tsx`);

  // Write the template content to the new file.
  fs.writeFile(filePath, template, (err) => {
    if (err) {
      console.error(`❌ Error creating ${type} file:`, err);
      return;
    }
    console.log(`✅ Successfully created ${type}: ${filePath}`);
  });
};

/**
 * Main function to run the script.
 */
const run = async () => {
  if (scaffoldType) {
    createFile(scaffoldType.toLowerCase());
  } else {
    const answer = await askQuestion(
      "Would you like to create a page(p) or a component? (c)"
    );
    const type = answer.trim().toLowerCase() || "c"; // Default to component
    if (type !== "p" && type !== "c") {
      console.error("❌ Invalid type. Please enter 'p' or 'c'.");
      return;
    }

    createFile(type);
  }
};

run();
