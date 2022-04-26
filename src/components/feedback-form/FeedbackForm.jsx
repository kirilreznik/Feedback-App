import { useState } from "react";
import Card from "../shared/Card";
import "./FeedbackForm.css";
import Button from "../shared/Button";
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && (
        <div className="message">Please enter at least 10 characters</div>
      )}
    </Card>
  );
};

export default FeedbackForm;
