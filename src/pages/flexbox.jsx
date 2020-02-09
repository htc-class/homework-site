import React from "react";
import FlexExample from "../components/FlexExample";
import { css } from "../lib/css";

export default function() {
  return (
    <div className="box-border">
      <h1 className="px-12 mt-6 mb-8 underline">Flexbox</h1>
      <FlexExample
        title="Example 1"
        num={1}
        styles={css`
          #ex-1 {
            display: block;
          }

          #ex-1 .child {
            display: none;
            width: auto;
          }
        `}
      />
      <FlexExample
        title="Example 2"
        num={2}
        numChildren={12}
        styles={css`
          #ex-2 {
            display: flex;
          }
        `}
      />
    </div>
  );
}
