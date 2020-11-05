import React from "react";
import { Link } from "gatsby";

interface Props {
  path: string;
  year: number;
  week: number;
  includes: string[];
}

const Week: React.FC<Props> = ({ year, week, path, includes }) => {
  return (
    <Link to={path} className="Week">
      <h2>
        Year {year}, Week {week}
      </h2>
      <ul className="text-gray-700">
        {includes.map((item) => (
          <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </Link>
  );
};

export default Week;
