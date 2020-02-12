import React from "react";
import { css } from "../lib/css";

export default function() {
  return (
    <>
      <div className="Wrap">
        <nav className="bg-blue-200">Nav</nav>
        <div id="content">
          <main className="bg-green-200">
            Main content section (the HTML for this section MUST go before the
            HTML for the Sidebar and the Ads area
          </main>
          <aside id="sidebar" className="bg-yellow-200">
            Sidebar
          </aside>
          <aside id="ads" className="bg-purple-200">
            Ads
          </aside>
        </div>
        <footer className="bg-red-200">Footer</footer>
      </div>
      <style>{css`
        main,
        aside,
        nav,
        footer {
          padding: 2rem;
        }
        .Wrap {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        #content {
          flex-grow: 1;
          display: flex;
        }
        main {
          flex-grow: 1;
        }
        aside {
          flex-basis: 150px;
        }
        #sidebar {
          order: -1;
        }
      `}</style>
    </>
  );
}
