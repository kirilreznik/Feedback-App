import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";
import FeedBackItem from "../feedback-item/FeedBackItem";
import Spinner from "../shared/Spinner";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h1>No feedback yet</h1>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
              <FeedBackItem text={text} rating={rating} key={id} id={id} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
