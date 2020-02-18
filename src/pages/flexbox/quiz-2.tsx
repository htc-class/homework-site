import React from "react";
import QuizQuestion from "../../components/flexbox/QuizQuestion";
import { css } from "../../lib/css";
import Seo from "../../components/Seo";

const Quiz2: React.FC = () => (
  <div className="box-border">
    <Seo title="Quiz 2: Flexbox" />
    <h1 className="px-12 mt-6 mb-8 underline">Flexbox Quiz #2</h1>
    <p className="px-12 max-w-48">
      The below quiz questions are constructed with the flex children having{" "}
      <em>no explicit width or height set</em>, making them more realistic. You
      can add <code>width</code> and <code>height</code> or{" "}
      <code>flex-basis</code> when needed. All values for them will be in
      multiple of <code>50px</code> like
      <code>50px</code>, <code>100px</code> and <code>150px</code> etc.
    </p>

    <QuizQuestion
      num={1}
      styles={css`
        #ex-101 {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }
      `}
    />

    <QuizQuestion
      num={2}
      styles={css`
        #ex-102 {
          display: flex;
          justify-content: space-between;
        }
        #ex-102 .child {
          width: 150px;
        }
      `}
    />

    <QuizQuestion
      num={3}
      styles={css`
        #ex-103 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        #ex-103 .child {
          flex-basis: 50px;
          width: 200px;
        }
      `}
    />

    <QuizQuestion
      num={4}
      styles={css`
        #ex-104 {
          display: flex;
          justify-content: center;
        }
        #ex-104 .child {
          flex-basis: 150px;
        }
        #ex-104 .child-4 {
          align-self: flex-start;
        }
      `}
    />

    <QuizQuestion
      num={5}
      numItems={3}
      styles={css`
        #ex-105 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        #ex-105 .child {
          flex-basis: 50px;
        }
        #ex-105 .child-1 {
          order: 1;
          flex-grow: 1;
        }
      `}
    />

    <QuizQuestion
      num={6}
      numItems={5}
      styles={css`
        #ex-106 {
          display: flex;
          justify-content: center;
        }
        #ex-106 .child {
          flex-basis: 50px;
        }
        #ex-106 .child-2 {
          flex-grow: 1;
        }
        #ex-106 .child-3 {
          align-self: center;
        }
        #ex-106 .child-4 {
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
          align-items: flex-end;
        }
        #ex-107 .child {
          flex-basis: 50px;
        }
        #ex-107 .child-2 {
          align-self: center;
        }
        #ex-107 .child-4 {
          align-self: flex-start;
        }
        #ex-107 .child-5 {
          align-self: stretch;
        }
      `}
    />

    <QuizQuestion
      num={8}
      numItems={5}
      styles={css`
        #ex-108 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
        #ex-108 .child {
          flex-basis: 50px;
        }
        #ex-108 .child-2 {
          align-self: center;
        }
        #ex-108 .child-4 {
          align-self: flex-start;
          order: -1;
        }
        #ex-108 .child-5 {
          align-self: stretch;
          flex-grow: 1;
        }
      `}
    />

    <QuizQuestion
      num={9}
      xc
      styles={css`
        #ex-109 {
          display: flex;
          justify-content: space-evenly;
          align-items: flex-end;
        }
        #ex-109 .child {
          flex-basis: 100px;
          height: 100px;
        }
        #ex-109 .child-2 {
          align-self: center;
          order: -1;
          flex-basis: 200px;
        }
        #ex-109 .child-4 {
          align-self: flex-start;
          height: 150px;
        }
      `}
    />

    <QuizQuestion
      num={10}
      numItems={8}
      xc
      styles={css`
        #ex-110 {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
        }
        #ex-110 .child {
          flex-basis: 100px;
          width: 100px;
        }
        #ex-110 .child-2 {
          order: -1;
          align-self: flex-start;
        }
        #ex-110 .child-8 {
          flex-grow: 1;
        }
      `}
    />

    <QuizQuestion
      num={11}
      numItems={9}
      xc
      kc
      styles={css`
        #ex-111 {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
        }
        #ex-111 .child {
          flex-basis: 100px;
          width: 100px;
        }
        #ex-111 .child-6 {
          order: 3;
          align-self: flex-end;
        }
        #ex-111 .child-3 {
          flex-grow: 1;
        }
        #ex-111 .child-2 {
          align-self: flex-start;
        }
        #ex-111 .child-8 {
          order: -1;
          align-self: stretch;
          width: auto;
          height: auto;
        }
      `}
    />
  </div>
);

export default Quiz2;
