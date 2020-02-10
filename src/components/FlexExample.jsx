import React from "react";
import stripIndent from "strip-indent";
import "./FlexExample.css";

export default function FlexExample({
  title,
  num,
  styles,
  numChildren = 4,
  subtitle,
  children,
}) {
  return (
    <div className="FlexExample box-border p-12">
      <h2 className="">{title}</h2>
      {subtitle && (
        <h3 className="italic text-xl text-gray-800 pl-4">
          &raquo; {subtitle}
        </h3>
      )}
      {children && <div className="inner">{children}</div>}
      <style className="antialiased" contentEditable>
        {stripIndent(styles).trim()}
      </style>
      <FlexSquare idNum={num} numItems={numChildren} bg="blue-200" />
    </div>
  );
}

export function FlexSquare({ idNum, numItems, bg, styles = "" }) {
  const items = [];
  for (let i = 1; i <= numItems; i++) {
    items.push(i);
  }
  return (
    <>
      {!!styles && <style>{styles}</style>}
      <div id={`ex-${idNum}`} className={`Flex w-screen h-64 bg-${bg}`}>
        {items.map(itemNum => (
          <Child key={itemNum} num={itemNum} />
        ))}
      </div>
    </>
  );
}

export function EditableFlexSquare({ idNum, numItems, styles }) {
  return (
    <>
      <style contentEditable>{stripIndent(styles).trim()}</style>
      <FlexSquare idNum={idNum} numItems={numItems} bg="blue-200" />
    </>
  );
}

function Child({ num }) {
  return (
    <div
      className={`child child-${num} text-center flex flex-col uppercase text-xs justify-center text-white bg-${
        [
          "",
          "red-600",
          "blue-800",
          "green-500",
          "yellow-600",
          "purple-700",
          "orange-600",
          "red-300",
          "black",
          "blue-400",
          "green-800",
          "purple-400",
          "gray-600",
        ][num]
      }`}
    >
      <span>Child {num}</span>
    </div>
  );
}
