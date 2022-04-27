import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="flex justify-center my-8 ">
        <div className="font">
          <div className="max-w-full mx-auto px-2 sm:px-6">
            <Link className="  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
              JETYEE
            </Link>
            {/* 
                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>

                  <Link
                    to="/project"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Project
                  </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
