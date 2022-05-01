import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import PropTypes from "prop-types";
import "./FeedBackItem.css";

const FeedBackItem = ({ id, rating, text }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        onClick={() => {
          deleteFeedback(id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button
        className="edit"
        onClick={() => {
          editFeedback({ id, rating, text });
        }}
      >
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedBackItem.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedBackItem;
