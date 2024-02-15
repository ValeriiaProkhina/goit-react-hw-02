import css from "./Options.module.css";

export default function Options({ onFeedbackOptions, total }) {
  return (
    <div className={css.container}>
      <button onClick={() => onFeedbackOptions("good")}>Good</button>
      <button onClick={() => onFeedbackOptions("neutral")}>Neutral</button>
      <button onClick={() => onFeedbackOptions("bad")}>Bad</button>
      {total > 0 && (
        <button onClick={() => onFeedbackOptions("reset")}>Reset</button>
      )}
    </div>
  );
}
