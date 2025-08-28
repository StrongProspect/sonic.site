interface ITextInput {
  name: string;
  id: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  required?: boolean;
}

export const Input = ({
  name,
  id,
  type = "text",
  required = false,
  onChange = () => {},
}: ITextInput) => (
  <div className="max-w-72 mx-auto">
    <label
      htmlFor="username"
      className="block text-sm font-medium text-gray-700"
    >
      {name.slice(0, 1).toUpperCase() + name.slice(1)}
    </label>
    <input
      onChange={(e) => onChange(e)}
      type={type}
      id={id}
      name={name}
      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      required={required}
    />
  </div>
);
