import React from "react";
import Seo from "../../components/Seo";

const Nested: React.FC = () => (
  <>
    <Seo title="Nested #2 - Flexbox" />
    <div className="Wrap min-h-screen flex">
      <div className="bg-red-300 flex-grow flex flex-col">
        <div className="flex-grow bg-blue-500" style={{ flexBasis: 200 }}></div>
        <div
          className="flex-grow bg-purple-500"
          style={{ flexBasis: 200 }}
        ></div>
        <div
          className="flex-grow bg-green-500"
          style={{ flexBasis: 200 }}
        ></div>
        <div className="flex-grow bg-red-500" style={{ flexBasis: 200 }}></div>
      </div>
      <div className="bg-black" style={{ flexBasis: 200 }}></div>
    </div>
  </>
);

export default Nested;
