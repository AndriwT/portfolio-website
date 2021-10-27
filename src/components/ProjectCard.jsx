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
        sx={{ maxWidth: 345, background: "#EFE7DA" }}
        onClick={() => {
          handleShow({ name });
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
            <Typography variant="body2" color="text.secondary">
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
            style={{ backgroundColor: "#EFE7DA" }}
            closeButton
            onClick={() => {
              setShow(false);
            }}
          >
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <img src={imageSrc} />
          <Modal.Body style={{ backgroundColor: "#EFE7DA" }}>
            {description}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#EFE7DA" }}>
            <Button
              variant="primary"
              onClick={() => window.open(url, "_blank")}
            >
              Visit
            </Button>
            <Button
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
