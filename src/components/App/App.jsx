import { useEffect, useState } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbackOptions, setFeedbackOptions] = useState(() => {
    const feedbackLS = window.localStorage.getItem("savedFeedback");
    if (feedbackLS !== null) {
      return JSON.parse(feedbackLS);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    window.localStorage.setItem(
      "savedFeedback",
      JSON.stringify(feedbackOptions)
    );
  }, [feedbackOptions]);

  const updateFeedback = (feedbackType) => {
    feedbackType === "reset"
      ? setFeedbackOptions({ good: 0, neutral: 0, bad: 0 })
      : setFeedbackOptions({
          ...feedbackOptions,
          [feedbackType]: feedbackOptions[feedbackType] + 1,
        });
  };

  const totalFeedback =
    feedbackOptions.good + feedbackOptions.neutral + feedbackOptions.bad;

  return (
    <div className={css.container}>
      <Description />
      <Options onFeedbackOptions={updateFeedback} total={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          type={{ ...feedbackOptions }}
          total={totalFeedback}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </div>
  );
}
