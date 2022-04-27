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
          <p>React feedback app</p>
          <p>Version : 1.0.0</p>
          <Link to="/">Back Home</Link>
        </div>
      </Card>
    </>
  );
};

export default AboutPage;
