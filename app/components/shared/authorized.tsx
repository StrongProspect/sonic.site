import React from "react";

// Define the props interface for the component.
interface IAuthorizedProps {
  // TODO: Add your component's props here
}

/**
 * A basic React component.
 * @param {IAuthorizedProps} props - The props for the component.
 */
const Authorized = ({}: IAuthorizedProps) => {
  return (
    <div className="authorized">
      {/* TODO: Add your component's JSX here */}
      <h1>Authorized Component</h1>
    </div>
  );
};

export default Authorized;
