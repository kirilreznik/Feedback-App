import { useState } from "react";
import Card from "../shared/Card";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your experiense?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your review"
            value={text}
            onChange={handleTextChange}
          ></input>
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
