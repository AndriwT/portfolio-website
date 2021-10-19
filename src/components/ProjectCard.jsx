import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ProjectCard = ({ props: { name, description, imageSrc } }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 345 }}
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
            closeButton
            onClick={() => {
              setShow(false);
            }}
          >
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
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
