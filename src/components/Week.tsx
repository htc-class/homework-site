import React from "react";
import { Link } from "gatsby";
import Markdown from "markdown-it";
import "./Week.css";

interface Props {
  path: string;
  title: string;
  includes: string[];
}

let md: any = null;

const Week: React.FC<Props> = ({ title, path, includes: items }) => {
  if (!md) {
    md = Markdown();
  }
  return (
    <Link to={path} className="Week">
      <h2>{title}</h2>
      <div className="Week__Items text-gray-700">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item}
              className="Week__Items__Item"
              dangerouslySetInnerHTML={{ __html: md.render(item) }}
            />
          ))
        ) : (
          <p className="mb-0 text-xs">
            <em>description coming soon...</em>
          </p>
        )}
      </div>
    </Link>
  );
};

export default Week;
