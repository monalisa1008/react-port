import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
// import adminpanel from '/src/assets/images/adminpanel.jpg'
// // import olximage from "/src/assets/images/olximage.jpg";
// import netfliximage from "/src/assets/images/netflix.jpg";
// import gridlinesbuilders from "/src/assets/images/Gridlinesbuilders.jpg";
// import charlespizza from "/src/assets/images/pizza.jpg";
import todolist from "/src/assets/images/todolist.jpg";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink=""
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;