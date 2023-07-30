import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I am currently searching for opportunities for a front-end developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I will try to get back to you!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://instagram.com/monalisaa.jpg?igshid=MzNlNGNkZWQ4Mg==");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>monalisa</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;