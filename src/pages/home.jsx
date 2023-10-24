import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import './home.css';

import { FaAngleDown, FaUserFriends, FaSearch, FaGrin} from 'react-icons/fa'
import {MdVideoCall, MdMoreHoriz,MdGroups2,MdOndemandVideo,MdEventAvailable} from 'react-icons/md'
import {AiFillFileImage,AiOutlineShop} from 'react-icons/ai'
import{FcClock}from'react-icons/fc'
import{BsFillBookmarkFill,BsFlag,BsFillBarChartLineFill} from'react-icons/bs'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from "react-bootstrap/NavbarToggle";
// import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavLink from "react-bootstrap/esm/NavLink";


const Home = () => {
  
     
   
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);

  };
  return(<Container fluid>
        <Row className="homepage">
    
        <Col xs={12} md={3}>
      <div className="Leftside">
        <Navbar
          expand="md"
          className="my-3"
          style={{ flexDirection: "column" }}
       bg="light" >
          <Container>
            <NavbarToggle
              aria-controls="basic-navbar-nav"
              onClick={toggleNav}
            />
          </Container>
          <NavbarCollapse id="basic-navbar-nav" className={showNav ? "show" : ""}>
            <Nav className=" pro flex-column">
              <div className="myProfile">
                <img
                  src="/images/f.jfif"
                  style={{
                    height: "30px",
                    width: "40px",
                    borderRadius: "60%",
                  }}
                />
                Keerthana P
              </div>
              <div className="mainlogo mb-3">
                <Nav.Link href="#">
                  <FaUserFriends color="skyblue" className="log" fontSize="2rem" />
                  Friends
                </Nav.Link>
              </div>
              <div className="mainlogo  mb-3">
                <MdGroups2 color="skyblue" fontSize="2rem" />
                Groups
              </div>
              <div className="mainlogo  mb-3">
                <AiOutlineShop color="skyblue" fontSize="2rem" />
                Market Place
              </div>
              <div className="mainlogo  mb-3">
                <MdOndemandVideo color="skyblue" fontSize="2rem" />
                Video
              </div>
              <div className="mainlogo  mb-3">
                <FcClock fontSize="2rem" />
                Memories
              </div>
              <div className="mainlogo  mb-3">
                <BsFillBookmarkFill
                  color="purple"
                  fontSize="2rem"
                />
                Saved
              </div>
              <div className="mainlogo  mb-3">
                <BsFlag fontSize="2rem" color="skyblue" className="log" />
                Pages
              </div>
              <div className="mainlogo  mb-3">
                <MdEventAvailable
                  fontSize="2rem"
                  color="skyblue"
                  className="log"
                />
                Events
              </div>
              <div className="mainlogo  mb-3">
                <BsFillBarChartLineFill
                  fontSize="2rem"
                  color="skyblue"
                  className="log"
                />
                Ads Manager
              </div>
              <div className="Pro">
                <FaAngleDown fontSize="1rem" />
                See More
              </div>
              <br></br>
              <div className="help">
                <FaAngleDown fontSize="1rem" />
                Help & Community
              </div>
              <br></br>
              <div className="help">
                <FaAngleDown fontSize="1rem" />
                Settings & Privacy
              </div>
              
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    </Col>
<Col xs={12} md={7}>
            <div className="MainArea">
                <div className="center">
                <div className="addStory">
                    
                    <div className="Story"><div className="img2">
                        <img src="/images/f.jfif" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                       </div>
                    </div>
                    <div className="Story"><div className="img1">
                        <img src="/images/girl6.jfif" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                        
                </div>
                    </div><div className="Story"><div className="img3">
                        <img src="/images/boy4.jfif" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                        
                </div>
                    </div>
                    <div className="Story"><div className="img4">
                        <img src="/images/boy1.PNG" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%",border:"3px solid blue"}}/>
                       </div>
                    </div>
            
                    </div>
                    <div className="message">
                        <div className="text">
                            <div className="Post">
                                <img src="/images/f.jfif" alt="PIC"/>
                                <input type="text" placeholder="What's on your mind, Keerthana?"/>
                            </div>
                            <div className="Call">
                                <div className="ico">
                                    <div className="icone">
                                        <MdVideoCall fontSize="2rem" color="red"/>
                                        <div>LiveVideo</div>
                                    </div>
                                    <div className="icone">
                                        <AiFillFileImage fontSize="2rem" color="green"/>
                                        <div>Photo/Video</div>
                                    </div>
                                    <div className="icone">
                                        <FaGrin fontSize="2rem"  color="orange"/>
                                        <div>Feeling/activity</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div>
   <iframe className="mt-5 ms-5"
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FnS3tPEo_VX%2F%3Fmibextid%3DNnVzG8&width=500&show_text=true&height=977&appId"
    width="450"
    height="600"
    style={{ border: "none", overflow: "hidden" }} 
    scrolling="no"
    frameBorder="0"
    allowFullScreen={true} 
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>
<iframe className=" mt-5 ms-3"  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FnRZVU-4rN8%2F%3Fmibextid%3DNnVzG8&width=500&show_text=true&height=436&appId" width="500" height="590" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                </div>
            </div>
            </div></Col>
<Col xs={12} md={2}>
            <div className ="Rightside">
             <div className="Contact">  
                 <div className="Contact-heading mb-3">
                     Contacts
                 </div>
             
             <div className="contact-icons">
                 <div className="contact-svg">
                     <MdVideoCall fontSize="1.8rem"/>
                 </div>
                 <div className="contact-svg">
                        <FaSearch fontSize="1.6rem"/>
                     </div>
                     <div className="contact-svg">
                        <MdMoreHoriz fontSize="1.6rem"/>
                     </div>
                </div>
                </div>
            <div className="list mb-3">
                <div className="contact-list mb-3">
                    <img src="/images/girl1.png"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Thenmozhi
                </div>
                <div className="contact-list mb-3">
                    <img src="/images/girl6.jfif"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Kawya
                </div>
                <div className="contact-list mb-3">
                    <img src="/images/girl3.jfif"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Keerthi
                </div>
                <div className="contact-list mb-3">
                    <img src="images/boy1.png"  style={{height:"30px",width:"30px" ,borderRadius:"50%"}}/>
                    Deepak
                </div>
                <div className="contact-list mb-3">
                    <img src="images/boy2.png"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Raj
                </div><div className="contact-list mb-3">
                    <img src="/images/girl4.jfif"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Ramya
                </div><div className="contact-list mb-3">
                    <img src="images/boy3.png"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Sabari
                </div><div className="contact-list mb-3">
                    <img src="/images/boy4.jfif"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                   Palanivel
                </div><div className="contact-list mb-3">
                    <img src="images/girl5.jfif"  style={{height:"30px", width:"30px" ,borderRadius:"50%"}}/>
                    Deksha
                </div>
            </div>
            </div>

 </Col>
</Row>
<Navigation/>
        </Container>
  );

  }
  export default Home;

