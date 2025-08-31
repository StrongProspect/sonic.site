import { useState } from "react";
import { MenuLinks } from "./menuLinks";

interface IHeader {
  authorized: boolean;
  handleLogout(e: React.FormEvent<HTMLFormElement>): void;
}

const Header = ({ authorized = false, handleLogout }: IHeader) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-primary text-gray-900 font-sans shadow-md">
      <div className="container mx-auto px-1 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 max-w-md">
            <h1 className="text-alt-secondary">SONIC DIY</h1>
          </div>
          <MenuLinks authorized={authorized} logoutClick={handleLogout} />
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-alt-secondary focus:outline-none"
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              <MenuLinks authorized={authorized} logoutClick={handleLogout} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
