import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Offcampus.scss";

interface btnText {
  btnTitle: string;
  buttonDescription: string;
  contributionURL: string;
}

function CardButton({ btnTitle, buttonDescription, contributionURL }: btnText) {
  const [show, setShow] = useState(false);
  console.log("IN OFFCAMPUS: " + { contributionURL });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="card__button">
        {btnTitle}
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "70%" }}
      >
        <Offcanvas.Header closeButton>
          <div className="btn__title">
            <Offcanvas.Title style={{ fontFamily: "Roboto" }}>
              {btnTitle}
            </Offcanvas.Title>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="btn__description">{buttonDescription}</div>
          <div className="image-wrapper">
            <div className="card__inside__picture">
              <img src={contributionURL} alt="NOT FOUND" />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CardButton;
