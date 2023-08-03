import React, { useState } from 'react';
import axios from "axios";
import Footer from './footer';
import "./projects.css";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import plus from "./images/plus.png";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Carousel from "react-elastic-carousel";
import django from "../components/certimages/django.jpg"
import css from "../components/certimages/css.jpg"
import python_entry from "../components/certimages/python_entry.jpg"
import python from "../components/certimages/python.jpg"
import docker from "../components/certimages/docker.jpg"
import Nav_bar from "../components/navbar";

function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  const [addShow, setAddShow] = React.useState(false);
  const [addShow1, setAddShow1] = React.useState(false);
  const [projects, setProjects] = React.useState([
    {
        "id": 6,
        "name": "Self Help Application for Viasat",
        "role": "Full Stack Developer",
        "technologies": "Python, Django, DRF, React, JS, HTML, CSS, Postgresql, Docker, Git, Jira",
        "responsibilities": "Design APIs for configuration management and Device management.\r\nUI for creating workflows with tasks.\r\nO-Auth, Slack integration for notifications.\r\nUI enhancements for better user experience, Pagination and bug fixes.\r\nDeployment in test and dev environments.\r\nDashboard integration for celery backend jobs.\r\nDatabase schema design and enhancements.\r\nIntegration with Viasat specific systems like vCMDB, Genecis etc.\r\nAssisting QA team to debug failures."
    },
    {
        "id": 5,
        "name": "HRMS Resume Parser",
        "role": "Full Stack Developer",
        "technologies": "Python, Django, DRF, React, JS, HTML, CSS, Postgresql, Bootstrap, Docker, Git",
        "responsibilities": "Design APIs for CRUD operations of resume data.\r\nDesign a UI for updating existing information or creating new profiles.\r\nIntegration with Metabase for data analytics of stored profiles.\r\nDatabase schema design.\r\nDeployment in test, dev and prod environments using docker compose.\r\nAssisting QA team to debug failures.\r\nUI and backend bug fixes."
    },
    {
        "id": 4,
        "name": "HRMS QA",
        "role": "Software Engineer Developer for Test",
        "technologies": "Selenium,  Cypress, React, Robot framework",
        "responsibilities": "Create test plan for validation of various features in HRMS tool and test plan review.\r\nCreating test scripts using cypress and selenium.\r\nFinding defects in the system and debugging failures.\r\nMaintaining test reports.\r\nUI bug fixes."
    }
])
  const [certificates, setCertificates] = React.useState([
    {
        "id": 1,
        "name": "Python entry",
        "image": python_entry
    },
    {
        "id": 2,
        "name": "python",
        "image": python
    },
    {
        "id": 3,
        "name": "docker",
        "image": docker
    },
    {
        "id": 4,
        "name": "css",
        "image": css
    },
    {
      "id": 5,
      "name": "django",
      "image": django
  }
])
  const [projectName, setProjectName] = React.useState("")
  const [responsibilities, setResponsibilities] = React.useState([])


  const breakPoints = [
    { width: 1, itemsToShow: 1 }, // Mobile devices
    { width: 550, itemsToShow: 2 }, // Tablets
    { width: 768, itemsToShow: 3 }, // Small laptops
    { width: 1200, itemsToShow: 4 }, // Desktops
  ];

  // React.useEffect(() => {
  //   axios.get('projects').then(
  //     response => {
  //       setProjects(response.data)
  //     }

  //   ).catch(error => {
  //     localStorage.removeItem('token');
  //     console.log(error)
  //   })
  // }, [setProjects])

  function onClickMore(responsibility, name) {
    setModalShow(true)
    setProjectName(name)
    const lines = responsibility.split('\n');
    setResponsibilities(lines)
  }

  function ResponsibilitiesModal(props) {
    return (
      <>
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header
      style={{ backgroundColor: "#1d262d", color: "white" }}
      className="custom-close-button"
      closeButton
    >
      <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: "17px" }}>
        Roles and Responsibilities in - <span className="roletext">{projectName}</span> Project:
      </Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
      {responsibilities.map((line, index) => (
        <p key={index}>
          <FontAwesomeIcon icon={faArrowRight} /> {line}
        </p>
      ))}
    </Modal.Body>
    <Modal.Footer>
      <Button type="button" onClick={() => setModalShow(false)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</>
    );
  }
  
  // React.useEffect(() => {
  //   fetchCertificates();
  // }, [setCertificates]); 
  //   const fetchCertificates = async () => {
  //     try {
  //       const response = await axios.get('certificates');
  //       setCertificates(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       localStorage.removeItem('token');
  //       console.log(error);
  //     }
  //   };

  function AddProjectModal(props) {
    const [formData, setFormData] = React.useState({
      name: "",
      role: "",
      technologies: "",
      responsibilities: ""
    })
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    //   setAddShow(false)
    //   axios.post('projects/addproject/', formData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     }
    //   }).then(
    //     response => {
    //       console.log(response)
    //     }
    //   ).catch(error => {
    //     localStorage.removeItem('token');
    //     console.log(error)
    //   })
    //   window.location.reload()
    // }
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ backgroundColor: "#1d262d", color: "white" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Roles and Responsibilities:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Project Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="role"
                  autoComplete="role"
                  onChange={handleInputChange}
                  placeholder="Role"
                  value={formData.role}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Technologies used</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="technologies"
                  autoComplete="technologies"
                  onChange={handleInputChange}
                  placeholder="add technologies here"
                  value={formData.technologies}
                  style={{ height: "100px" }}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Roles & Responsibilities</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="responsibilities"
                  autoComplete="responsibilities"
                  onChange={handleInputChange}
                  placeholder="add Roles & Responsibilities here"
                  value={formData.responsibilities}
                  style={{ height: "400px" }}
                  required
                />
              </Form.Group>
            </Row>
            <Button type="submit" style={{ float: "right",marginLeft:"5px"}}>
              Submit
            </Button>
            <Button type="button" onClick={() => setAddShow(false)} style={{ float: "right" }}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  function AddCertModal(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = React.useState({
      name: "",
    })

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      setFormData({ ...formData }); 
    }

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    //   const data = new FormData();
    //   data.append("name", formData.name);
    //   if (selectedFile) {
    //     data.append("image", selectedFile);
    //   }
    //   setAddShow(false)
    //   axios.post('certificates/addcertificates/', data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     }
    //   }).then(
    //     response => {
    //       console.log(response)
    //       fetchCertificates();
    //     }
    //   ).catch(error => {
    //     localStorage.removeItem('token');
    //     console.log(error)
    //   })
    // }

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ backgroundColor: "#1d262d", color: "white" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Add Certificate:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>


              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  required
                  type="file"
                  name="image"
                  autoComplete="image"
                  onChange={handleFileChange}
                  placeholder="image"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <Button type="submit" style={{ float: "right",marginLeft:"5px"}}>
              Submit
            </Button>
            <Button type="button" onClick={() => setAddShow1(false)} style={{ float: "right" }}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <div>
    <Nav_bar/>
      <div className='container-fluid' style={{position:"relative"}}>
        <h2 style={{ fontWeight: "600" }}>Projects</h2>
        <div style={{position:"absolute",top:"0px",right:"20px"}}>
          {localStorage.getItem('token') ? <img className='plusimage hover-effect' src={plus} alt="plus" style={{cursor: "pointer", width: "10%", height: "10%", float: "right", marginTop: "5%" }} onClick={() => setAddShow(true)} /> : ""}
          </div>
          <div className="row">
          {projects.map((project, id) => (
            <div className="col-md-6 col-sm-12" key={id}>
              <div className="card" style={{ marginTop: "2%" }}>
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "#1d262d",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                <div>
                  <h6
                    className="card-title"
                    style={{ fontWeight: "500"}}
                  >
                    Project - <span className="roletext">{project.name}</span>
                  </h6>
                  <p className="card-title" style={{ fontWeight: "500"}}>
                    Role - <span className="roletext">{project.role}</span>
                  </p>
                  </div>
                  <div
                    className="container-fluid"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "white",
                      color: "#1d262d",
                    }}
                  >
                    <p className="card-title" style={{ fontWeight: "600" }}>
                      Technologies:
                    </p>
                    <p className="card-text" style={{ fontWeight: "400" }}>
                      {project.technologies}
                    </p>
                  </div>
                  <p
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={() => onClickMore(project.responsibilities, project.name)}
                  >
                    <button
                      className="btn btn-outline-primary"
                      style={{
                        fontWeight: "400",
                        borderRadius: "5px",
                        marginTop: "4px",
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowRight} /> click to see Responsibilities...
                    </button>
                  </p>
                  <ResponsibilitiesModal show={modalShow} onHide={() => setModalShow(false)} />
                </div>
              </div>
            </div>
          ))}
          <AddProjectModal show={addShow} onHide={() => setAddShow(false)} />
        </div>
        

      </div>
      <br />
      <div className='container-fluid' style={{backgroundColor:"#1d262d",marginTop:"10px",marginBottom:"10px"}}>
        <h4 style={{color:"white"}}>Certificates</h4>
        {localStorage.getItem('token') ? <img className='plusimage hover-effect' src={plus} alt="plus" style={{ cursor: "pointer", width: "4%", height: "4%", float: "right", marginTop: "-30px",backgroundColor:"white",borderRadius:"10px" }} onClick={() => setAddShow1(true)} /> : ""}
        <AddCertModal
            show={addShow1}
            onHide={() => setAddShow1(false)}
          />
      <Carousel breakPoints={breakPoints}>
      {certificates.map((certificate, id) => (
        <div className='feedbackcarousel' key={id}>
          <img
            className='feedbackcarousel feedbackimages'
            src={certificate.image}
            style={{
              position: 'relative',
              marginRight: '-5px',
              marginLeft: '-5px',
              borderRadius: '10px',
            }}
            alt="certificate"
          />
        </div>
      ))}
    </Carousel>
      </div>
    <br/>
      <div >
        <Footer />
      </div>
    </div>
  )
}

export default Projects;