import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jpg from "../../../../public/images/jamming-mini.jpg";
import Png from "../../../../public/images/jamming.png";
import "./portfolioItems.css";


export default function PortfolioItem6() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="lightBoxButton">
                <img src={Jpg} className="lightBoxButtonImg lightBoxMargin img-fluid" /><br/>Jamming - Spotify Client
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName="modal90w">
                <Modal.Header closeButton>
                    <Modal.Title className="lightBoxTitle">Jamming - Spotify Client</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={Png} className="lightBoxImage img-fluid" />
                    <p className="lightBoxCopy">I worked on this project during the React, Part II section of the Codecademy Front-End Engineering course. This project was built with JSX, CSS, JavaScript and React and uses the Spotify API.</p>
                    <p className="lightBoxLinks"> <a href="https://github.com/optimissist/jamming" target="_blank" rel="noreferrer">View on GitHub</a> | <a href="https://jammingmss.surge.sh/" target="_blank" rel="noreferrer">View Project</a></p>
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