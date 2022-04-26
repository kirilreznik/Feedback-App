import { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/header/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/feedback-list/FeedbackList.jsx";
import FeedbackStats from "./components/feedback-stats/FeedbackStats";
import FeedbackForm from "./components/feedback-form/FeedbackForm";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  return (
    <div>
      <Header />
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackStats feedbackData={feedback} />
      <FeedbackList
        feedbackData={feedback}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;
