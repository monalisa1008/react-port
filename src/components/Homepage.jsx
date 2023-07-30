import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hi <span className='wave'>🙂</span></h2>
            <h2 className='nametext'>I'm Monalisa Choudhary</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/monalisa1008");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/monalisa-choudhary-14a123214/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
                       <button onClick={() => {
              window.open("https://instagram.com/monalisaa.jpg?igshid=MzNlNGNkZWQ4Mg==");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home