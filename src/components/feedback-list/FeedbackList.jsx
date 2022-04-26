import FeedBackItem from "../feedback-item/FeedBackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedbackData, handleDeleteClick }) => {
  if (!feedbackData || feedbackData.length === 0) {
    return <h1>No feedback yet</h1>;
  }

  return feedbackData.map(({ id, rating, text }) => {
    return (
      <FeedBackItem
        text={text}
        rating={rating}
        key={id}
        id={id}
        handleDeleteClick={handleDeleteClick}
      />
    );
  });
};

FeedbackList.propTypes = {
  feedbackData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
