import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ProjectCard = ({ props: { name, description, imageSrc, url } }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          background: "#CAEBF2",
          color: "#457B9D",
        }}
        onClick={() => {
          handleShow({ name });
        }}
        style={{
          height: "325px",
          padding: "16px",
          webkitBorderRadius: "20px",
          mozBorderRadius: "20px",
          borderRadius: "10px",
          webkitBoxShadow: "rgba(0,0,0,0.8) 0px 0 10px",
          mozBoxShadow: "rgba(0,0,0,0.8) 0 0 5px",
          boxShadow: "rgba(0,0,0,0.3) 0 5px 10px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageSrc}
            alt="Project preview image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxHeight: 80 }}
              style={{
                lineClamp: 3,
                overflow: "scroll",
                wordWrap: "break-word",
                hyphens: "auto",
                whiteSpace: "normal",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal
          show={show}
          onHide={() => {
            setShow(false);
          }}
        >
          <Modal.Header
            style={{ backgroundColor: "#CAEBF2" }}
            closeButton
            onClick={() => {
              setShow(false);
            }}
          >
            <Modal.Title style={{ marginLeft: 15, color: "#457B9D" }}>
              {name}
            </Modal.Title>
          </Modal.Header>
          <img
            src={imageSrc}
            style={{
              backgroundColor: "#CAEBF2",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          />
          <Modal.Body
            style={{
              backgroundColor: "#CAEBF2",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            {description}
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: "#CAEBF2",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              className="visit-btn"
              variant="primary"
              onClick={() => window.open(url, "_blank")}
            >
              Visit
            </Button>
            <Button
              className="close-btn"
              variant="secondary"
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default ProjectCard;
