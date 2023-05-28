import React, { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  function setDark() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
    setIsDark(true);
  }

  function setLight() {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
    setIsDark(false);
  }

  function toggleMode() {
    if (isDark) {
      setLight();
    } else {
      setDark();
    }
  }

  // When the page is loaded or refreshed, check for theme preference
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  return (
    <label className="relative block w-11 h-6 mr-2">
      <input
        onChange={toggleMode}
        type="checkbox"
        checked={isDark ? true : false}
        className="peer opacity-0"
      />
      <div
        className="absolute cursor-pointer left-0 
      top-0 bottom-0 right-0 bg-slate-600 rounded-3xl 
      before:absolute before:w-6 before:h-6 before:rounded-full 
      before:bg-slate-400 peer-checked:before:translate-x-6 peer-checked:before:bg-teal-200 peer-checked:bg-teal-500 
      before:transition-all duration-300"
      ></div>
    </label>
  );
}