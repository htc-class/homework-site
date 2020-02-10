import React from "react";
import { FlexSquare, EditableFlexSquare } from "../components/FlexExample";
import { css } from "../lib/css";

export default function() {
  return (
    <div className="box-border">
      <h1 className="px-12 mt-6 mb-8 underline">Flexbox Quiz</h1>
      <p className="px-12">
        For each section below, make the blue second section match the
        appearance of the purple sample above. And NO PEEKING at the CSS!
      </p>
      <QuizQuestion
        num={1}
        styles={css`
          #ex-101 {
            display: flex;
            justify-content: center;
          }
        `}
      />
      <QuizQuestion
        num={2}
        styles={css`
          #ex-102 {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
        `}
      />
      <QuizQuestion
        num={3}
        styles={css`
          #ex-103 {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;
          }
        `}
      />
      <QuizQuestion
        num={4}
        styles={css`
          #ex-104 {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
          }
        `}
      />
      <QuizQuestion
        num={5}
        styles={css`
          #ex-105 {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          #ex-105 .child-3 {
            align-self: flex-start;
          }
        `}
      />
      <QuizQuestion
        num={6}
        styles={css`
          #ex-106 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #ex-106 .child-3 {
            flex-grow: 1;
          }
        `}
      />
      <QuizQuestion
        num={7}
        numItems={5}
        styles={css`
          #ex-107 {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #ex-107 .child-2 {
            flex-grow: 1;
          }
          #ex-107 .child-4 {
            flex-grow: 3;
          }
        `}
      />
      <QuizQuestion
        num={8}
        styles={css`
          #ex-108 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #ex-108 .child-2 {
            order: -1;
            align-self: flex-end;
            flex-grow: 1;
          }
          #ex-108 .child-4 {
            align-self: flex-start;
          }
        `}
      />
      <QuizQuestion
        num={9}
        styles={css`
          #ex-109 {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
          }
          #ex-109 .child-2 {
            order: -1;
            align-self: flex-end;
          }
          #ex-109 .child-4 {
            align-self: center;
          }
        `}
      />
      <QuizQuestion
        num={10}
        styles={css`
          #ex-110 {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          #ex-110 .child-4 {
            flex-grow: 1;
          }
          #ex-110 .child-1 {
            align-self: flex-end;
          }
          #ex-110 .child-2 {
            order: -1;
            align-self: center;
            flex-grow: 2;
          }
        `}
      />
      <QuizQuestion
        num={11}
        xc
        styles={css`
          #ex-111 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
          }
          #ex-111 .child-2 {
            order: -2;
          }
          #ex-111 .child-3 {
            align-self: center;
          }
          #ex-111 .child-4 {
            order: -1;
            flex-grow: 1;
            align-self: flex-end;
          }
        `}
      />
      <QuizQuestion
        num={12}
        xc
        numItems={6}
        styles={css`
          #ex-112 {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
          }
          #ex-112 .child {
            height: auto;
            flex-grow: 1;
          }
          #ex-112 .child-2 {
            flex-grow: 4;
          }
          #ex-112 .child-3 {
            order: 9;
            flex-grow: 2;
          }
        `}
      />
      <QuizQuestion
        num={13}
        xc
        numItems={8}
        styles={css`
          #ex-113 {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: stretch;
            flex-wrap: wrap;
            align-content: center;
          }
          #ex-113 .child-4 {
            order: 8;
          }
        `}
      />
      <QuizQuestion
        num={14}
        xc
        numItems={9}
        styles={css`
          #ex-114 {
            display: flex;
            justify-content: space-around;
            align-items: stretch;
            flex-wrap: wrap;
            align-content: space-between;
          }
          #ex-114 .child {
            flex-basis: 200px;
          }
          #ex-114 .child-4 {
            order: -1;
          }
          #ex-114 .child-9 {
            flex-grow: 2;
          }
        `}
      />
      <QuizQuestion
        num={15}
        xc
        numItems={8}
        styles={css`
          #ex-115 {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            flex-wrap: wrap;
            align-content: stretch;
          }
          #ex-115 .child {
            height: auto;
            flex-basis: 200px;
          }
          #ex-115 .child-4 {
            order: -2;
          }
          #ex-115 .child-1 {
            order: 2;
            flex-grow: 4;
          }
        `}
      />
    </div>
  );
}

function QuizQuestion({ num, styles, numItems = 4, xc = false }) {
  return (
    <div className="FlexExample box-border p-12">
      <h2>
        Problem #{num}
        {xc ? " (extra credit: ✨)" : ""}
        {num === 15 ? " (Kiah only)" : ""}
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
        bg="purple-200"
        styles={css`
          #ex-${num} {
          }
          #ex-${num} .child {
          }
        `}
      />
    </div>
  );
}
