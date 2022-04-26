import "./FeedBackItem.css";
import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const FeedBackItem = ({ id, rating, text, handleDeleteClick }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        onClick={() => {
          handleDeleteClick(id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedBackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedBackItem;
