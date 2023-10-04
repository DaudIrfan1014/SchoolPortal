import { Link } from "react-router-dom";
import Modal from "./modal";
import React, { useState } from "react";
const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-gray-900 ">
        <a className="flex items-center w-full px-3 mt-3" href="#">
          <span className="ml-2 text-4xl font-bold">
            <img
              src="https://csqci.edu.ph/assets/images/coronado-school-logo-1317x1317.png"
              alt=""
            />
          </span>
        </a>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            <Link
              to="/dashboard"
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Dasboard</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/Search"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Search</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/addStudent"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Add Student</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/addTeacher"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 20h4V4H6v16zM8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 0v16h4V2h-4zm2 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Add Teacher</span>
            </Link>
          </div>
          <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/feePending"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2L9 22h6L12 2zM12 6h2v4h-2V6zm0 8h2v4h-2v-4z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Pending Fees</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/salary"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Teachers Salary</span>
            </Link>
            <Link
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/message"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Suggestions</span>
              <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
            </Link>
          </div>
        </div>
        <Link
          className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
          onClick={toggleModal}
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-2 text-sm font-medium">
            <Modal />
          </span>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
