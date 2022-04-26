import "./FeedbackStats.css";

const FeedbackStats = ({ feedbackData }) => {
  let average =
    feedbackData.reduce((acc, currentItem) => {
      return acc + currentItem.rating;
    }, 0) / feedbackData.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>{average}</h4>
    </div>
  );
};

export default FeedbackStats;
