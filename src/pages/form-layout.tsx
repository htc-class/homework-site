import React from "react";
import Seo from "../components/Seo";
import { css } from "../lib/css";

export default function() {
  return (
    <>
      <style>{css`
        label {
          padding-right: 0.5rem;
        }
        textarea {
          display: block;
          width: 100%;
          height: 5rem;
        }
        @media (min-width: 768) {
          body {
            display: block;
          }
        }
      `}</style>
      <Seo title="Form Layout Example" />
      <form className="m-4 p-8 bg-green-200 md:bg-blue-200">
        <h1 className="text-3xl">Employment Application:</h1>
        <div className="flex flex-col md:flex-row">
          <label className="md:w-1/5">Name:</label>
          <input className="md:flex-grow" type="text" />
        </div>
        <div className="mt-4 flex flex-col md:flex-row">
          <label className="md:w-1/5">Age:</label>
          <input className="md:flex-grow" type="number" />
        </div>
        <div className="flex flex-col md:flex-row md:mt-4">
          <div className="mt-4 md:w-1/3">
            <label>Job:</label>
            <select>
              <option>CEO</option>
              <option>Programmer</option>
              <option>Baker</option>
              <option>Janitor</option>
            </select>
          </div>
          <div className="mt-4 md:w-1/3">
            <label>
              <input type="checkbox" className="mr-2" />I know Javascript
            </label>
          </div>
          <div className="flex flex-col mt-4 md:w-1/3">
            <label>
              <input name="animal" className="mr-2" checked type="radio" />
              nightshift
            </label>
            <label>
              <input name="animal" className="mr-2" type="radio" />
              dayshift
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label className="pb-1 block">Why should we hire you?</label>
          <textarea className=""></textarea>
        </div>
        <input type="submit" value="Submit" className="px-6 py-2 mt-4" />
      </form>
    </>
  );
}
