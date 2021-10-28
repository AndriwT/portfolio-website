import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Row className="home-container">
        <h1>A bit about me...</h1>
        <Row className="pitch-container">
          <Col className="pitch">
            <img src="professional-portrait.png" />
            <p>
              Hi There! My name is Andriw and I am a Digital Creator! <br />{" "}
              Ever since I was a little kid I've thrived sharing with people
              around me my work in the traditional arts, and now, shifting into
              the technology field, my creations in the shape of beautiful,
              functional and fun web applications!
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="home-container">
        <h1>My Journey</h1>
        <Row className="pitch-container">
          <Col className="pitch">
            <p>
              I started my career journey in the field of Media Arts. Eventually
              I shifted my focus to Project Management, during this time I
              became passionate with web development and enrolled in the
              full-stack web development IronHack bootcamp course, where I
              gained well-rounded fundamental knowledge. I'm excited for the
              next chapter in my career path!
            </p>
            <img src="professional-portrait.png" />
          </Col>
        </Row>
      </Row>
      <div className="home-container" style={{ marginBottom: "50px" }}>
        <h1>Skills</h1>
        <div className="skill">
          <DesktopWindowsIcon
            style={{ height: "100px", width: "100px", color: "#95C623" }}
          />
          <h4>Fullstack Development</h4>
        </div>
        <div className="skill">
          <ImportantDevicesIcon
            style={{ height: "100px", width: "100px", color: "#95C623" }}
          />
          <h4>UX/UI</h4>
        </div>
        <div className="skill">
          <DesignServicesIcon
            className="icon"
            style={{ height: "100px", width: "100px", color: "#95C623" }}
          />
          <h4>Design</h4>
        </div>
        <div className="skill">
          <FactCheckIcon
            style={{ height: "100px", width: "100px", color: "#95C623" }}
          />
          <h4>Project Management</h4>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
