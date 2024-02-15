import css from "./Feedback.module.css";

export default function Feedback({ type, total }) {
  const positiveFeedback = Math.round(
    ((type.good + type.neutral) / total) * 100
  );

  return (
    <>
      <ul className={css.list}>
        <li>Good: {type.good}</li>
        <li>Neutral: {type.neutral}</li>
        <li>Bad: {type.bad}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}
