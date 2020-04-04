import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Checkable: React.FC<{ id: string }> = ({ children, id }) => {
  const [checked, setChecked] = useState<boolean>(false);
  useEffect(() => {
    setChecked(Cookies.get(cookieKey(id)) === "complete");
  }, [id, setChecked]);

  return (
    <li className="list-none pl-4">
      <input
        id={id}
        type="checkbox"
        className="mr-3"
        checked={checked}
        onChange={() => {
          let newState = !checked;
          setChecked(newState);
          Cookies.set(cookieKey(id), newState ? "complete" : "incomplete", {
            path: "",
          });
        }}
      />
      <label htmlFor={id} className={checked && "line-through text-green-800"}>
        {children}
      </label>
    </li>
  );
};

export default Checkable;

function cookieKey(id: string): string {
  return `Checkable--${id}--${window.location.pathname.replace("/", "")}`;
}
