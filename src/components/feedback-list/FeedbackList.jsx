import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";
import FeedBackItem from "../feedback-item/FeedBackItem";

const FeedbackList = () => {
  const { feedback, deleteFeedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <h1>No feedback yet</h1>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(({ id, rating, text }) => {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              exit={{ opacity: 0, transitionEnd: { display: "none" } }}
              layout
            >
              <FeedBackItem
                text={text}
                rating={rating}
                key={id}
                id={id}
                handleDeleteClick={deleteFeedback}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;

/* return feedbackData.map(({ id, rating, text }) => {
  return (
    <FeedBackItem
      text={text}
      rating={rating}
      key={id}
      id={id}
      handleDeleteClick={handleDeleteClick}
    />
  );
}); */
