import "./FeedbackStats.css";
import PropTypes from "prop-types";

const FeedbackStats = ({ feedbackData }) => {
  let average =
    feedbackData.reduce((acc, currentItem) => {
      return acc + currentItem.rating;
    }, 0) / feedbackData.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4> Average rating {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

FeedbackStats.prpTypes = {
  feedbackData: PropTypes.array.isRequired,
};

export default FeedbackStats;
