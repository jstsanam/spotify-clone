import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center m-2">
      <img src="header-logo.png" alt="logo" className="h-6 w-6" />
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full" style={{ backgroundColor: "#1f1f1f" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
          </svg>
        </button>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e8eaed"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="p-2.5 ps-11 text-sm rounded-full"
            placeholder="What do you want to play?"
            style={{ backgroundColor: "#1f1f1f", width: "25rem" }}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-100 bg-transparent font-bold text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Sign up
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gray-100 hover:bg-gray-200 font-bold rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Log in
        </button>
      </div>
    </header>
  );
}
