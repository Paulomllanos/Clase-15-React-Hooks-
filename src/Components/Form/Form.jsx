import axios from "axios";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../../Assets/ContactDog.svg";
import Swal from "sweetalert2";

export const Form = (props) => {
    const formInitialDetails = {
        username: '',
        password: '',
        email: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (e) => {

        const {name, value}= e.target

        setFormDetails({
            ...formDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      try {
       // throw new Error()
       
        setButtonText("Sending...");
        const response = await axios.post(
          "https://users-serv-production.up.railway.app/auth/register",
          formDetails
        );
        setButtonText("Send");
        let id = response.data._id

        props.setId(id)
        localStorage.setItem('userId', id)
        if (response.status === 200) {
          setStatus({ success: true, message: "Message sent successfully" });
        } else {
          setStatus({
            success: false,
            message: "Something went wrong!, please try again later.",
          });
        }

        setFormDetails(formInitialDetails);
      } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'OH! hubo un error, intentelo mas tarde...'
        })
        setButtonText("Send");
      }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name='username' value={formDetails.username} placeholder="Username" onChange={(e) => onFormUpdate(e)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name='email' value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate(e)} />
                           
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="password" name='password' value={formDetails.password} placeholder="Password here!" onChange={(e) => onFormUpdate(e)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}