import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jpg from "../../../../public/images/645commitment-mini.jpg";
import Png from "../../../../public/images/645commitment.png";
import "./portfolioItems.css";


export default function PortfolioItem2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="lightBoxButton">
                <img src={Jpg} className="lightBoxButtonImg img-fluid" /><br/>645 Commitment
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName="modal90w">
                <Modal.Header closeButton>
                    <Modal.Title className="lightBoxTitle">645 Commitment</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={Png} className="lightBoxImage img-fluid" />
                    <p className="lightBoxCopy">I was asked to build a standalone page to outline the 645 Commitment reward program when the 645 program launched. This page was custom designed and built from provided proof. I built the page using Endeca, WCS and Atom with HTML and CSS.</p>
                    <p className="lightBoxLinks"><a href="https://github.com/optimissist/TBB-Portfolio/tree/main/645%20Commitment" target="_blank" rel="noreferrer">View on GitHub</a></p>
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