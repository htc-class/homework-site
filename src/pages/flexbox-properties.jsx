import React from "react";
import FlexExample from "../components/FlexExample";
import { css } from "../lib/css";

export default function() {
  return (
    <div className="box-border">
      <h1 className="px-12 mt-6 mb-8 underline">Flexbox Properties</h1>
      <FlexExample
        title="flex-direction"
        subtitle="Aim Crossbow 🏹"
        num={1}
        styles={css`
          #ex-1 {
            display: flex;
            flex-direction: row;
          }
        `}
      >
        <ol>
          <li>
            Try out all <b>4</b> possibilities: <code>row</code>{" "}
            <code>column</code> <code>row-reverse</code>{" "}
            <code>column-reverse</code>
          </li>
          <li>
            figure out what the <em>default value</em> is.
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="justify-content"
        subtitle="Justify Lasers 🔫"
        num={2}
        styles={css`
          #ex-2 {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
        `}
      >
        <p>
          <code>justify-content</code> aligns items along the <b>main axis</b>.
          It <em>only works if there is extra space</em>.
        </p>
        <ol>
          <li>
            Try out all 6 values: <code>flex-start</code>, <code>flex-end</code>
            , <code>center</code>, <code>space-between</code>,{" "}
            <code>space-around</code>, <code>space-evenly</code>{" "}
          </li>
          <li>
            Try them again with <code>flex-direction: column</code>
          </li>
          <li>
            figure out what the <em>default value</em> is.
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="align-items"
        subtitle="Alignment Lasers 🔫"
        num={3}
        styles={css`
          #ex-3 {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
          }
          #ex-3 .child {
            height: auto;
          }
        `}
      >
        <p>
          <code>align-items</code> aligns items along the <b>cross axis</b>. It{" "}
          <em>only works if there is extra space in the flex-container</em>.
        </p>
        <p>
          <em>
            😲 NOTE: I've set <code>height: auto</code> on the flex items
            because the value <code>stretch</code> only works when a height is
            not set.
          </em>
        </p>
        <ol>
          <li>
            try all four values: <code>flex-start</code>, <code>flex-end</code>,{" "}
            <code>center</code>, <code>stretch</code>
          </li>
          <li>
            try them again with <code>flex-direction: column</code>
          </li>
          <li>
            figure out what the <em>default value</em> is.
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="align-self"
        numChildren={6}
        num={4}
        styles={css`
          #ex-4 {
            display: flex;
            align-items: flex-start;
          }
          #ex-4 .child-2 {
            align-self: flex-end;
          }
          #ex-4 .child-4 {
            align-self: center;
          }
        `}
      >
        <p>
          <code>align-self</code> works exactly the same as{" "}
          <code>align-items</code> except it is applied to{" "}
          <b>flex children directly</b>. In fact, you can think of{" "}
          <code>align-items</code> as just a shortcut for setting all of the{" "}
          <code>align-self</code> of a flex-container's children.
        </p>
        <ol>
          <li>
            Try all three values of <code>align-self</code> for some of the flex
            items: <code>flex-start</code>, <code>flex-end</code>,{" "}
            <code>center</code>
          </li>
          <li>
            Try them again with a different value for the containers{" "}
            <code>align-items</code> property.
          </li>
          <li>
            change the <code>flex-direction</code> to <code>row</code> and try
            all three values again
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="flex-grow"
        num={5}
        styles={css`
          #ex-5 {
            display: flex;
            align-items: flex-start;
          }
          #ex-5 .child-2 {
            flex-grow: 1;
          }
          #ex-5 .child-4 {
            flex-grow: 3;
          }
        `}
      >
        <p>
          <code>flex-grow</code> determines the <em>rate</em> at which extra
          space is given to flex items. In this example, child 4 and child 2 are
          the only items that can grow, but child 4 is snatching up extra space{" "}
          <em>3 times as fast</em> as child 2.
        </p>
        <ol>
          <li>
            Experiment with different values for <code>flex-grow</code> on
            various flex items:
          </li>
          <li>
            switch <code>flex-direction</code> and experiment
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="flex-basis"
        num={6}
        styles={css`
          #ex-6 {
            display: flex;
            align-items: flex-start;
          }
          #ex-6 .child {
            flex-basis: 150px;
          }
        `}
      >
        <p>
          <code>flex-basis</code> is an <em>ideal, or hypothetical</em> width or
          height, before any growing or shrinking is applied. Think of it as
          "what each flex item asks for", but the parent can not always give it
          what it want.
        </p>
        <p>
          <code>flex-basis</code> deals with the <code>width</code> dimension if{" "}
          <code>flex-direction: row</code> and <code>height</code> if{" "}
          <code>flex-direction: column</code>.
        </p>

        <ol>
          <li>
            Experiment with different flex-basis amounts, including big numbers
            and very small numbers, do you understand why things look the way
            they do?
          </li>
          <li>
            experiment with how flex-basis differs based on the{" "}
            <code>flex-direction</code> property
          </li>
          <li>
            If one of the flex items can grow, does the container still try to
            respect the requested <code>flex basis</code>? Or does the growing
            child eat up everything? Figure it out by experimentation
          </li>
          <li>
            what is the default value for <code>flex-grow</code>?
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="order"
        num={7}
        numChildren={8}
        styles={css`
          #ex-7 {
            display: flex;
            align-items: flex-start;
          }
          #ex-7 .child-4 {
            order: 1;
          }
        `}
      >
        <p>
          <code>order</code> controls the <em>order</em> that the flex-children
          are rendered in. You can create any order you want by specifying the
          order property on the flex items
        </p>
        <ol>
          <li>Move "Child 4" to the very front of the line</li>
          <li>make the order: 2, 4, 6, 8, 1, 3, 5, 7</li>
          <li>
            figure out what the <em>default</em> order is
          </li>
          <li>
            flip it to <code>flex-direction: column</code> and move child 5 to
            the very botom of the area
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="flex-wrap"
        num={8}
        numChildren={12}
        styles={css`
          #ex-8 {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
          }
          #ex-8 .child {
            flex-basis: 120px;
          }
        `}
      >
        <p>
          <code>flex-wrap</code> controls whether the{" "}
          <em>
            flex children are allowe to <b>wrap to new lines</b>
          </em>
        </p>
        <ol>
          <li>
            experiment with all of the values: <code>no-wrap</code>,{" "}
            <code>wrap</code>, and <code>wrap-reverse</code>
          </li>
          <li>figure out what the default is</li>
          <li>
            when <code>flex-wrap</code> is set to <code>no-wrap</code> does{" "}
            <code>justify-content</code> have any effect? Why?
          </li>
          <li>
            set it to <code>flex-wrap: wrap</code>, and now experiment with{" "}
            <b>both</b> <code>justify-content</code>, and{" "}
            <code>align-items</code>. See if it makes sense to you why they work
            the way they do. See if it makes sense to you why they work the way
            they do.
          </li>
          <li>
            Set the items to <code>flex-basis: 50px</code> -- can you explain
            why they don't wrap, even if set to wrap?
          </li>
          <li>
            Finally, set the container to <code>flex-direction: column</code>{" "}
            and repeat the steps above
          </li>
        </ol>
      </FlexExample>
      <FlexExample
        title="align-content"
        num={9}
        numChildren={12}
        styles={css`
          #ex-9 {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            align-content: flex-start;
          }
          #ex-9 .child {
            flex-basis: 120px;
          }
        `}
      >
        <p>
          <code>align-content</code> controls the distribution of lines lines of
          flex children along the <em>cross-axis</em>. It only has an effect if
          the children are <em>wrapping onto multiple lines</em>.
        </p>
        <ol>
          <li>
            experiment with all of these values: <code>flex-start</code>,{" "}
            <code>center</code>, <code>flex-end</code>,{" "}
            <code>space-between</code>, <code>space-around</code>,{" "}
            <code>space-evenly</code>, <code>stretch</code>
          </li>
          <li>
            try to explain in your own words the difference between{" "}
            <code>align-content</code> and <code>justify-content</code>
          </li>
        </ol>
      </FlexExample>
    </div>
  );
}
