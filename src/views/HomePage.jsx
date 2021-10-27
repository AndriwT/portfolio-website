import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <h1>A bit about me...</h1>
        <div className="pitch-container">
          <div className="pitch">
            <img src="professional-portrait.png" />
            <p>
              Hi There! My name is Andriw Tapanes and I am a Digital Creator!{" "}
              <br /> Ever since I was a little kid I've thrived sharing with
              people around me my work in the traditional arts, and now,
              shifting into the technology field, my creations in the shape of
              beautiful, functional and fun web applications!
            </p>
          </div>
        </div>
      </div>
      <div className="home-container">
        <h1>My Journey</h1>
        <div className="pitch-container">
          <div className="pitch">
            <p>
              Originally born in Cuba, my family and I moved to Venezuela when I
              was 1 year old! Growing up there until the age of 17 formed me
              into the kind and proper person I strive to be. Moving to the U.S.
              was a big step in my life, full of hardships and bumps on the
              road.
            </p>
            <img src="professional-portrait.png" />
          </div>
        </div>
      </div>
      <div className="home-container">
        <h1>My Journey</h1>
        <div className="pitch-container">
          <div className="pitch">
            <p>
              Originally born in Cuba, my family and I moved to Venezuela when I
              was 1 year old! Growing up there until the age of 17 formed me
              into the kind and proper person I strive to be. Moving to the U.S.
              was a big step in my life, full of hardships and bumps on the
              road, but I wouldn't change my journey one bit! since it got me to
              where i'm proud to be today.
            </p>
            <img src="professional-portrait.png" />
          </div>
        </div>
      </div>
      <div className="home-container">
        <h1>Skills</h1>
        <div className="skill">
          <DesktopWindowsIcon
            style={{ height: "100px", width: "100px", color: "#95C623" }}
          />
          <h4>Fullstack Development</h4>
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
    </>
  );
};

export default HomePage;
