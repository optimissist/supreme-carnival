import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jpg from "../../../../public/images/PCPopout-mini.jpg";
import Png from "../../../../public/images/PCPopout.png";
import "./portfolioItems.css";


export default function PortfolioItem6() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="lightBoxButton">
                <img src={Jpg} className="lightBoxButtonImg img-fluid" /><br/>Preferred Customer Popout
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName="modal90w">
                <Modal.Header closeButton>
                    <Modal.Title className="lightBoxTitle">Beachbody Shop Page</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={Png} className="lightBoxImage img-fluid" />
                    <p className="lightBoxCopy">The launch of the Preferred Customer program brought about the need for a new template. I created this pop out so it could be easily parsed and reused by developers with minimal coding knowledge. I made this popout using BCC, WCS and Atom.</p>
                    <p className="lightBoxLinks"> <a href="https://github.com/optimissist/TBB-Portfolio/tree/main/Preferred%20Customer%20Pop%20Out" target="_blank" rel="noreferrer">View on GitHub</a></p>
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