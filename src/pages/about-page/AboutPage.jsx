import Card from "../../components/shared/Card";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>I have built this app as a part of React course</p>
          <p>Topics covered in the course:</p>
          <p>
            -React Components <br />
            -JSX Props (proptypes, defaultprops, etc)
            <br />
            -State (Component & App Level)
            <br /> -Styling
            <br />
            -Handling Events
            <br /> -Lists & Keys <br />
            -Forms <br />
            -Context API <br />
            -HTTP Requests
          </p>
          <p>Version : 1.0.0</p>
          <Link to="/">Back Home</Link>
        </div>
      </Card>
    </>
  );
};

export default AboutPage;
