import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "../feedback-item/FeedBackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedbackData, handleDeleteClick }) => {
  if (!feedbackData || feedbackData.length === 0) {
    return <h1>No feedback yet</h1>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackData.map(({ id, rating, text }) => {
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
                handleDeleteClick={handleDeleteClick}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propTypes = {
  feedbackData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
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
