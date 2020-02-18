import React from "react";
import { FlexSquare, EditableFlexSquare } from "../FlexExample";
import { css } from "../../lib/css";

interface Props {
  num: number;
  styles: string;
  numItems?: number;
  xc?: boolean;
  kc?: boolean;
}

const QuizQuestion: React.FC<Props> = ({
  num,
  styles,
  numItems = 4,
  xc = false,
  kc = false,
}) => {
  return (
    <div className="FlexExample box-border p-12">
      <h2>
        Problem #{num}
        {xc ? " (extra credit: ✨)" : ""}
        {kc ? " (Kiah only)" : ""}
      </h2>
      <FlexSquare
        idNum={num + 100}
        numItems={numItems}
        bg="purple-200"
        styles={styles}
      />
      <div className="h-6"></div>
      <EditableFlexSquare
        idNum={num}
        numItems={numItems}
        styles={css`
          #ex-${num} {
          }
          #ex-${num} .child {
          }
        `}
      />
    </div>
  );
};

export default QuizQuestion;
