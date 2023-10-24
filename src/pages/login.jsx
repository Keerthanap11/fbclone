import {useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { emailValidator,passwordValidator } from '../components/rejuxvalidator';
const Login = () => {
  const navigate = useNavigate();


    const [input,setInput]=React.useState({email:"",password:""})
    const [errorMessage,seterrorMessage]=React.useState("")
    const [successMessage,setsuccesMessage]=React.useState("")

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const FormSubmitter = (e) => {
        e.preventDefault();
        setsuccesMessage('')
       if(!emailValidator(input.email))
       return seterrorMessage('please enter valid email')
      
       if (!passwordValidator(input.password))
       return seterrorMessage(
           'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
       );
       setsuccesMessage('Sucessfully validated')
       if (input.email !== 'keerthanapalanivel11@gmail.com' || input.password !== 'React@123')
       return seterrorMessage('Invalid email or password');
     
       localStorage.setItem('auth', true)
       navigate('/home');
      };
  return (
    <Container>
    <Row className='mt-5'> 
    <Col xs={10} md={7} >

        <h1 style={{color:'blue',fontSize:'70px',fontWeight:'800px'}}>facebook</h1>
        <h5>Facebook helps you connect and share<br/>with the people in your life.</h5>
        </Col> 
    <Col xs={8} md={5}>   
              <form onSubmit={FormSubmitter} className='ms-5'><span>
              {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
              {successMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>}
                    	</span>	
                <div className="mb-3">
                  
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email address or phonenumber" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" name="password"id="password" placeholder="Enter your password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-3">Login</button>
            
             
             <p><a href="#">Forgotten Password</a></p>
             <hr></hr>
             <button className="btn  btn-success mb-3" id="b1">Create new Account</button><br/>

              </form>
            
            
              </Col> 
              </Row> 
        
      </Container>
    
        
  );
};

export default Login;