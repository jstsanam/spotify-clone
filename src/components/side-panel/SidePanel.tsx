import React from "react";
import SidePanelCards from "./SidePanelCards";
import SidePanelFooter from "./SidePanelFooter";

export default function SidePanel() {
  return (
    <div
      className="rounded-md ml-2"
      style={{ backgroundColor: "#121212", width: "23%" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-4 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="m460-380 280-180-280-180v360ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
          </svg>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-100 bg-transparent font-bold text-sm py-2.5 text-center inline-flex items-center"
          >
            Your Library
          </button>
        </div>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-100 bg-transparent font-bold text-sm px-5 py-2.5 text-center text-xl inline-flex items-center"
        >
          +
        </button>
      </div>
      <SidePanelCards />
      <SidePanelFooter />
    </div>
  );
}
