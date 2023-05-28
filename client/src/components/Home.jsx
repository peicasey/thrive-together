import React, { useEffect, useState } from "react";

export default function ToggleTheme() {
  
  return (
    <label className="relative block w-11 h-6">
      <input
        onChange={toggleMode}
        type="checkbox"
        checked={isDark ? true : false}
        className="peer opacity-0"
      />
      <div
        className="absolute cursor-pointer left-0 
      top-0 bottom-0 right-0 bg-gray-200 rounded-3xl 
      before:absolute before:w-6 before:h-6 before:rounded-full 
      before:bg-yellow-200 peer-checked:before:translate-x-6 peer-checked:before:bg-black 
      before:transition-all duration-300"
      ></div>
    </label>
  );
}