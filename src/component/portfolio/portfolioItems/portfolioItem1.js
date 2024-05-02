import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jpg from "../../../../public/images/Shopredesign-mini.jpg";
import Png from "../../../../public/images/Shopredesign.png";
import "./portfolioItems.css";


export default function PortfolioItem1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="lightBoxButton">
                <img src={Jpg} className="lightBoxButtonImg img-fluid"/><br/>Beachbody Shop Redesign
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName="modal90w">
                <Modal.Header closeButton>
                    <Modal.Title className="lightBoxTitle">Beachbody Shop Page</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={Png} className="lightBoxImage img-fluid" />
                    <p className="lightBoxCopy">I was tasked with developing a new look for the Beachbody Shop Page. This was built using Endeca and WCS with HTML and CSS. As there was no existing template to give the mobile product slider functionality they requested, I had to adapt existing templates using css to achieve the desired outcome for both desktop and mobile view.</p>
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