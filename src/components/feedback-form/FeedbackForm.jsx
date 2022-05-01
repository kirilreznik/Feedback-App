import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../../context/FeedbackContext";
import Card from "../shared/Card";
import "./FeedbackForm.css";
import Button from "../shared/Button";
import RatingSelect from "../rating-select/RatingSelect";

const FeedbackForm = () => {
  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    if (text.trim().length >= 10 && rating !== null) {
      if (!feedbackEdit.edit) {
        setText("");
        setBtnDisabled(true);
        setRating(null);
        addFeedback(newFeedback);
      } else {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        setText("");
        setBtnDisabled(true);
        setRating(null);
      }
    }
  };

  const handleTextChange = ({ target: { value } }) => {
    if (value === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (value !== "" && value.trim().length < 10) {
      setMessage("Please enter at leat 10 charachters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(value);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, transitionEnd: { display: "none" } }}
        layout
      >
        <Card>
          <form onSubmit={handleFormSubmit}>
            <h2>How would you rate your experiense?</h2>
            <RatingSelect rating={rating} setRating={setRating} />
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your review"
                value={text}
                onChange={handleTextChange}
              ></input>
              <Button type="submit" isDisabled={btnDisabled}>
                Send
              </Button>
            </div>
          </form>
          {message && (
            <div className="message">Please enter at least 10 characters</div>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeedbackForm;
