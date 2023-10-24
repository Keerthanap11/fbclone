import React from "react"
import Navigation from "../components/Navigation/Navigation";
import {FiSettings,FiSearch,FiHome}from 'react-icons/fi';
import{RiLiveLine}from 'react-icons/ri';
import{TfiVideoClapper} from 'react-icons/tfi';
import{BsRocketTakeoff} from 'react-icons/bs';
import{MdMoreHoriz} from 'react-icons/md';
import {FaRegThumbsUp,FaCommentAlt,FaRegShareSquare}from 'react-icons/fa';
import './video.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import './Navigation.css'
// import Navbar from 'react-bootstrap/Navbar';
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


const Video = () => {
    return(
        <Container>
        <Row>
            <Col xs={12} md={4}>
        <div className="lside">
          
<h5 className="head">Video<FiSettings  style={{marginLeft:"100px", size:"30px"}}/></h5 >
<div className="search-bar mb-4" >< FiSearch className="input me-4"/>Search videos
      </div>

      <h5 className="h5 mb-4"><FiHome className="fi" size="30px"/>Home</h5>
      <h5 className="h5 mb-4"><RiLiveLine className="fi" size="30px"/>Live</h5>
      <h5 className="h5 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="fi" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z"></path>
</svg>Reels</h5>
<h5 className="h5 mb-4"><TfiVideoClapper className="fi" size="30px"/>Shows</h5>

 </div></Col>
        <Col xs={12} md={8}>
        <div className="Rside">
        <div className="Posted">
                        <div className="poster">
                            <div className="Simp">
                                <img src="/images/boy2.png" alt="Img" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                                React Basics
                                <div className="update"></div>
                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                        </div>
                        <div className="caption">
                            Please Like, Comment and Subscribe to our YouTube Channel.
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                     
                        <iframe width="600" height="210px" src="https://www.youtube.com/embed/JPT3bFIwJYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="blue"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey"/>Share
                            </div>
                        
                        </div>
                    </div><br></br>
                    <br></br>
                    <div className="Posted">
                        <div className="poster">
            
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                        </div>
                    
                        <br></br>
                        <div className="FacebookImg">
                        <iframe className="mt-5"
  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FnRZVU-4rN8%2F%3Fmibextid%3DNnVzG8&width=500&show_text=true&height=436&appId"
  width={600}
  height={371}
  style={{ border: 'none', overflow: 'hidden' }}
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
></iframe>


                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="blue"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey"/>Share
                            </div>
                        
                        </div>
                    </div>
                    <iframe className="mt-5 ms-5" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=true&height=371&appId" width="500" height="700" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </div></Col>
        </Row>
             <Navigation/>
             </Container>
    );
}
export default Video;