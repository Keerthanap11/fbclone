import React from "react";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { IoStorefrontOutline, IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { PiVideoFill } from "react-icons/pi";
import { MdGroups2, MdOutlineGroup } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
// import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Navigation = () => {
  return (
  
    <div bg="light" expand="lg" className="nav">
    <Container >
      <Row>
        <Col md={3}  xs={12} className="col1">
            <BsFacebook className="icon flex  text-primary lg:px-5" size="40px" style={{ left: "-70px", position: "relative" ,top:"10px"}} />
            <div  className="searching col-12 col-md-3 flex-shrink-0">
  <AiOutlineSearch size="25px" /> Search Facebook
</div>

        </Col>
        <Col md={7} xs={12}>
          <Navbar  style={{position:"fixed"}}>
          <Nav className="mx-5 align-items-center d-md-inline d-sm-inline">
       <Nav.Link href="/home" className="homies d-inline"><AiFillHome className="text-primary mx-4" size="30px" /></Nav.Link>
         <Nav.Link href="/video" className="homies d-inline"><PiVideoFill className="mx-4" size="30px" /></Nav.Link>
        <Nav.Link href="/marketplace" className="homies d-inline"><IoStorefrontOutline size="30px" className="text-dark mx-4" /></Nav.Link>
           <Nav.Link href="/friends" className="homies d-inline"><MdOutlineGroup size="30px" className="mx-4" /></Nav.Link>
          <Nav.Link href ="/groups" className="homies d-inline"><MdGroups2 size="30px" className="mx-4" /></Nav.Link>
      </Nav>
          </Navbar>
        </Col>
        <Col md={2} xs={12} >
          <Navbar><Nav><NavbarCollapse>
        <div className=" icon gap-4">
           <div className="icon_wrapper text-[28px] hide-on-mobile ">
           <CgMenuGridO size="30px" />
           </div>
           <div className="icon_wrapper text-[20px] hide-on-mobile">
             <BsMessenger size="30px" />
           </div>
           
           <div className="icon_wrapper text-[20px] ">
             <IoNotifications size="30px" />
           </div>
           <img src="/images/f.jfif" style={{ height: "30px", width: "40px", borderRadius: "60%" }} />
         </div> </NavbarCollapse></Nav>
         </Navbar>
          </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Navigation;
