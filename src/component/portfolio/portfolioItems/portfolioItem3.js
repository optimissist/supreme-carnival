import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jpg from "../../../../public/images/Shkflavorsdesktop-mini.jpg";
import Png from "../../../../public/images/Shkflavorsdesktop.png";
import "./portfolioItems.css";


export default function PortfolioItem3() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="lightBoxButton">
                <img src={Jpg} className="lightBoxButtonImg" /><br/>Shakeology Recipe Tiles
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName="modal90w">
                <Modal.Header closeButton>
                    <Modal.Title className="lightBoxTitle">Shakeology Recipe Tiles</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={Png} className="lightBoxImage" />
                    <p className="lightBoxCopy">With the launch of Shakeology in France, I was asked to build a new locale of the Shakeology microsite and refresh the recipe tiles for the UK and France. Because the requested layout was not from a standard template, I created custom designs from scratch for desktop and mobile views. This was built with WCS and Atom using HTMl and CSS.</p>
                    <p className="lightBoxLinks"><a href="https://github.com/optimissist/TBB-Portfolio/tree/main/UK:France%20Shakeology%20Microsite" target="_blank" rel="noreferrer">View on GitHub</a></p>
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