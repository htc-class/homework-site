import React from "react";
import Seo from "../../components/Seo";

const Nested: React.FC = () => (
  <>
    <Seo title="Nested #1 - Flexbox" />
    <div className="Wrap min-h-screen flex flex-col">
      <div className="bg-yellow-200 flex-grow flex">
        <div className="bg-gray-800" style={{ flexBasis: 200 }}></div>
      </div>
      <div
        className="bg-red-200 flex justify-around"
        style={{ flexBasis: 100 }}
      >
        <div className="bg-orange-200" style={{ flexBasis: 100 }}></div>
        <div className="bg-purple-200" style={{ flexBasis: 100 }}></div>
        <div className="bg-gray-600" style={{ flexBasis: 100 }}></div>
      </div>
      <div className="bg-blue-200" style={{ flexBasis: 100 }}></div>
    </div>
  </>
);

export default Nested;
