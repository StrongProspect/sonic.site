import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Calc from "~/icons/Calc";
import Uni from "~/icons/Uni";

// Define the props interface for the component.
interface IDashboardProps {
  // TODO: Add your component's props here
}

const ConcertsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3"
    />
  </svg>
);

// const UserSettingsIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5 mr-2"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//     />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//     />
//   </svg>
// );

const Toolbox = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-labelledby="toolbox-title"
  >
    <title id="toolbox-title">Toolbox Icon</title>
    <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <rect x="2" y="8" width="20" height="12" rx="2" />
    <path d="M12 12v4" />
  </svg>
);

/**
 * A basic React component.
 * @param {IDashboardProps} props - The props for the component.
 */
const Dashboard = ({}: IDashboardProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      label: "Shows",
      icon: <ConcertsIcon />,
      path: "/gigs-tours",
    },
    {
      label: "Money",
      icon: <Calc />,
      path: "/money",
    },
    {
      label: "Promos",
      icon: <Uni />,
      path: "/promo",
    },
    {
      label: "Toolbox",
      icon: <Toolbox />,
      path: "/toolbox",
    },
  ];

  useEffect(() => {
    setActiveTab(tabs.findIndex((t) => t.path === location.pathname));
  }, []);

  function handleClick(index: number, path: string) {
    setActiveTab(index);
    navigate(path);
  }

  return (
    <>
      <div className="w-full max-w-8xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              bg-white
              rounded-xl
              shadow-lg
              onClick={() => handleClick(index, tab.path)}
              className={`flex items-center justify-center w-full py-4 px-2 text-base font-medium transition-colors duration-300 focus:outline-none ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
