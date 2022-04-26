import { useState } from "react";
import Header from "./components/header/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/feedback-list/FeedbackList.jsx";
import FeedbackStats from "./components/feedback-stats/FeedbackStats";
import FeedbackForm from "./components/feedback-form/FeedbackForm";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

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
      <FeedbackForm />
      <FeedbackStats feedbackData={feedback} />
      <FeedbackList
        feedbackData={feedback}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;
