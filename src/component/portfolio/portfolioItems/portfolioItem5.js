import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jpg from "../../../../public/images/ravenous-mini.jpg";
import Png from "../../../../public/images/ravenous.png";
import "./portfolioItems.css";


export default function PortfolioItem5() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="lightBoxButton">
                <img src={Jpg} className="lightBoxButtonImg lightBoxMargin" /><br/>Ravenous Yelp App
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName="modal90w">
                <Modal.Header closeButton>
                    <Modal.Title className="lightBoxTitle">Ravenous Yelp App</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={Png} className="lightBoxImage" />
                    <p className="lightBoxCopy">This project was created for the Create a front-end app with React course with Codecademy. It was built with JSX, CSS, JavaScript and React and uses the Yelp API. </p>
                    <p className="lightBoxLinks"> <a href="https://github.com/optimissist/RavenousProject" target="_blank" rel="noreferrer">View on GitHub</a> |  <a href="https://ravenousms.surge.sh/" target="_blank" rel="noreferrer">View Project</a></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className="lightBoxClose">
                        Close
                    </Button>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}