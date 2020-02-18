import React from "react";
import Seo from "../../components/Seo";

const Nested: React.FC = () => (
  <>
    <Seo title="Nested #1 - Flexbox" />
    <div className="Wrap min-h-screen flex flex-col">
      <div
        className="flex-grow bg-blue-700 flex items-center"
        style={{ flexBasis: 200, justifyContent: "space-evenly" }}
      >
        <div className="bg-red-700" style={{ width: 100, height: 100 }}></div>
        <div className="bg-red-700" style={{ width: 100, height: 100 }}></div>
      </div>
      <div
        className="flex-grow bg-red-700 items-center justify-center flex"
        style={{ flexBasis: 200 }}
      >
        <div className="bg-blue-700" style={{ width: 200, height: 200 }}></div>
      </div>
    </div>
  </>
);

export default Nested;
