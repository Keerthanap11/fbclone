import Navigation from "../components/Navigation/Navigation";
import React from "react";import Container from 'react-bootstrap/Container';

import {FiSettings,FiSearch,FiHome} from 'react-icons/fi';
import{MdFeed}from 'react-icons/md'
import{FaCompass}from 'react-icons/fa'
import{HiOutlineUserGroup }from 'react-icons/hi'
import './groups.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact';


const cardData = [
  {
    title: 'Frontend',
    image: '/images/h.jfif', 
  },
  {
    title: 'Backend',
    image: '/images/d.png', 
  },
  {
    title: 'Mobile',
    image: '/images/m.png', 
  },
  {
    title: 'Loptop',
    image:' /images/l.jfif', 
  },
  {
    title: 'Uchiha',
    image: '/images/itachi.jpeg', 
  },
  {
    title: 'Jujustu kaisen-2',
    image: '/images/sugn.jpeg', 
  },
  
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

  


const Groups = () => {

    return(
        <Container><Row>
            <Col className="friend" md={4}>
            <h5 className="head">Groups<FiSettings  style={{marginLeft:"100px", size:"30px"}}/></h5 >
<div className="search-bar mb-4" >< FiSearch className="input me-4"/>Search in Groups
      </div>

      <h5 className="h5 mb-4"> <MdFeed color="blue" className="fi" size="30px"/>Your Feed</h5>
      
<h5 className="h5 mb-4"><FaCompass className="fi" size="30px"/>Discover</h5>
<h5 className="h5 mb-4"><HiOutlineUserGroup className="fi" size="30px"/>Your groups</h5>
<button className="groupbtn text-primary" style={{backgroundColor:"lightcyan",border:"none" ,width:"250px"}}>+Create new group</button>
            </Col>
            <Col className="Grouplist" md={8}>

             
 <Container>
      <Carousel
        responsive={responsive}
        arrows={true}
        swipeable={true}
        draggable={false}
        containerClass="carousel-container"
      >
        {cardData.map((movie, index) => (
          <div key={index}>
            <MDBCard  className="groupcard">
              <MDBCardImage className="groupimg" src={movie.image} alt={movie.title} />
              <MDBCardBody>
                <MDBCardTitle>{movie.title}</MDBCardTitle>
                <MDBBtn color="primary" className="groupbtn">Join group</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </Carousel>
    </Container>


            </Col>
            </Row>
            <Navigation/>
        </Container>
    );
}
export default Groups;