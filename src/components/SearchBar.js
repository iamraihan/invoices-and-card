import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div class=" flex bg-white rounded-xl items-center justify-center">
        <div class=" rounded-xl overflow-hidden flex">
          <button class="flex items-center justify-center px-4">
            <svg
              class="h-4 w-4 text-primary "
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
          <input type="text" class="px-4 py-2" placeholder="Search order" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
