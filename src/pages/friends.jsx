import Navigation from "../components/Navigation/Navigation";
import React from "react";import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiSettings,FiSearch,FiHome} from 'react-icons/fi';
import{MdGroupAdd} from 'react-icons/md'
import{BsFillGiftFill} from 'react-icons/bs'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol,MDBBtn, MDBCardSubTitle
  } from 'mdb-react-ui-kit';

import './friends.css'

const Friends = () => {

    return(
        <Container><Row>
            <Col className="friend" md={4}>
            <h5 className="head">Friends<FiSettings  style={{marginLeft:"100px", size:"30px"}}/></h5 >
<div className="search-bar mb-4" >< FiSearch className="input me-4"/>Search Friends
      </div>

      <h5 className="h5 mb-4"><FiHome className="fi" size="30px" color="blue"/>Home</h5>
      <h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>Friend Requests</h5>
      <h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>Suggestions</h5>
<h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>All friends</h5>
<h5 className="h5 mb-4"><BsFillGiftFill className="fi" size="30px"/>Birthdays</h5>
<h5 className="h5 mb-4"><MdGroupAdd className="fi" size="30px"/>Custom list</h5>

            </Col>
            <Col className="friendslist" md={8}>
<MDBRow className='row-cols-1 row-cols-md-3 g-4'>

            <MDBCol className="friendscard">
        <MDBCard className='individual mx-5 '>
          <MDBCardImage
            src='/images/suriya.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Suriya<br></br>
 10K followers</MDBCardSubTitle>
 
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/ajith.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Ajith<br></br>
75 followers</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/vijay.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>vijay <br></br>
  10K followers ·<br></br></MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/vs.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Vijay Sethu <br></br>
   10K follows</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/anu.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Anushka <br></br>
     10K followers</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/nayan.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Nayanthara <br></br>10K followers</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/jo.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Jothika<br></br>10K foloowes</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/dhuru.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Dhuruvan <br></br> 10K followers</MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>

      <MDBCol className="friendscard">
        <MDBCard className='individual mx-5'>
          <MDBCardImage
            src='/images/sam.jfif'
            className="img"
            position='top'
          />
          <MDBCardBody>
           
            <MDBCardSubTitle>Sam<br></br> 10K followers </MDBCardSubTitle>
            <MDBBtn className="addfriend" style={{width:"150px"}}  >+ Add friend</MDBBtn> 
          </MDBCardBody>
        </MDBCard> <br/>
      </MDBCol>
      
      
      
      
      
      </MDBRow>
            </Col>
            </Row>
            <Navigation/>
        </Container>
    );
}
export default Friends;