"use client";

import Image from "next/image";
import searchIcon from "../../../public/icons/magnifier.svg";
import { useState } from "react";

const SearchBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <form
      className="ms-auto inline-flex size-10 items-center justify-center gap-2 rounded-lg sm:border sm:border-gray-200 hover:bg-gray-50 sm:w-auto sm:px-3"
      id="search-form"
    >
      <button
        type="button"
        className="inline cursor-pointer sm:hidden"
        onClick={() => setIsToggled((toggled) => !toggled)}
        aria-label="باز کردن جست‌وجو"
        aria-expanded={isToggled}
      >
        <Image src={searchIcon} alt="" width={18} height={18} />
      </button>

      <div
        className={`absolute left-1/2 top-[calc(100%-2px)] z-50 inline-flex w-[calc(100%-1rem)] -translate-x-1/2 items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white p-2 shadow-md transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
          isToggled
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0"
        } sm:visible sm:static sm:flex sm:w-auto sm:translate-x-0 sm:translate-y-0 sm:opacity-100`}
      >
        <label htmlFor="search-input" className="sr-only">
          جست‌وجو
        </label>

        <input
          type="text"
          className={`${
            isToggled ? "flex-1 p-2" : "hidden"
          } min-w-0 bg-transparent text-right text-xs placeholder:text-gray-500 focus:outline-none sm:inline`}
          id="search-input"
          placeholder="جست‌وجو"
        />

        <button type="button" className="shrink-0 cursor-pointer">
          <Image src={searchIcon} alt="" width={18} height={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
