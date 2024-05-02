import React, { useEffect, useRef, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./form.css";

const SERVICE_ID = "service_p920ico";
const TEMPLATE_ID = "template_i5pi6qu";
const PUBLIC_KEY = "rq898-0ALb3WReHI3";

export const FormFields = (props) => {
    const recaptchaRef = useRef();
    const [recaptchaResponse, setRecaptchaResponse] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message:''});
    const [formErrors, setFormErrors] = useState({ name: null, email: null, message: null });

    // useEffect(() => {
    //     if (window.grecaptcha) {
    //         window.grecaptcha.render(recaptchaRef.current, {
    //             sitekey: "6Ld8gXwkAAAAAJxfcv1ZTb1JVp2NQTigfbvqlakH",
    //             callback: (response) => {
    //                 setRecaptchaResponse(response);
    //             }
    //         });
    //     }
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.grecaptcha) {
                window.grecaptcha.render(recaptchaRef.current, {
                    sitekey: "6Ld8gXwkAAAAAJxfcv1ZTb1JVp2NQTigfbvqlakH",
                    callback: (response) => {
                        setRecaptchaResponse(response);
                    }
                });
                clearInterval(interval);
            }
        }, 100);
    
        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    const validateForm = () => {
        let isValid = true;
        let errors = { name: null, email: null, message: null };

        // Add your validation logic here
        if (!formData.name) {
            isValid = false;
            errors.name = 'Please enter your first and last name.';
        }
        
        if (!formData.email) {
            isValid = false;
            errors.email = 'How can I get in touch?';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            errors.email = 'Email address is invalid';
        }

        if (!formData.message) {
            isValid = false;
            errors.message = 'Looking forward to talking with you!';
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!recaptchaResponse) {
            alert("Please complete the reCAPTCHA");
            return;
        }
            
        if (!validateForm()) {
            alert("Please correct the errors in the form");
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Message Sent Successfully");
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong!");
            });
        e.target.reset();
    };

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Form
            className="formContainer"
            onSubmit={handleOnSubmit}
            id="formContainer">
            <Form.Group as={Col} controlId="formGridName"
                className="formRow">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    label='Name'
                    name='name'
                    type='text'
                    placeholder="Name"
                    onChange={handleOnChange}
                    isInvalid={!!formErrors.name}
                    />
                    <Form.Control.Feedback type='invalid'>
                    {formErrors.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail"
                className="formRow">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                    isInvalid={!!formErrors.email}
                />
                 <Form.Control.Feedback type='invalid'>
                    {formErrors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} id="formGridQuery"
                className="formRow">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    label="Message"
                    name="message"
                    as="textarea"
                    placeholder="Message"
                    rows={3} 
                    onChange={handleOnChange}
                    isInvalid={!!formErrors.message}
                    />
                    <Form.Control.Feedback type='invalid'>
                    {formErrors.message}
                </Form.Control.Feedback>
            </Form.Group>

            <div ref={recaptchaRef}></div>

            <div className="formButtonContainer">
                <Button className="formButton" type="submit">
                    Submit
                </Button>
            </div>
        </Form >
    );
};