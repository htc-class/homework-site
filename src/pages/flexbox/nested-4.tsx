import React from "react";
import Seo from "../../components/Seo";

const Nested: React.FC = () => (
  <>
    <Seo title="Nested #1 - Flexbox" />
    <div className="Wrap min-h-screen flex">
      <div className="bg-purple-700" style={{ flexBasis: 200 }}></div>
      <div
        className="bg-red-700 flex flex-grow self-end"
        style={{ height: 300 }}
      >
        <div className="bg-blue-700 flex-grow" style={{}}></div>
        <div className="bg-green-700 flex-grow flex flex-col" style={{}}>
          <div className="bg-red-700 flex-grow" style={{}}></div>
          <div className="bg-green-700 flex-grow" style={{}}></div>
          <div className="bg-orange-700 flex-grow" style={{}}></div>
          <div className="bg-yellow-400 flex-grow" style={{}}></div>
        </div>
        <div
          className="bg-yellow-700 flex-grow flex flex-col items-center justify-center"
          style={{}}
        >
          <div className="bg-red-300" style={{}}>
            hello
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Nested;
