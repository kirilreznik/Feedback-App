import Header from "../../components/header/Header";
import FeedbackList from "../../components/feedback-list/FeedbackList.jsx";
import FeedbackStats from "../../components/feedback-stats/FeedbackStats";
import FeedbackForm from "../../components/feedback-form/FeedbackForm";
import AboutIconLink from "../../components/shared/AboutIconLink";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <AboutIconLink />
    </div>
  );
};

export default HomePage;
