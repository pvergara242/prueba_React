import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


 class Registro_clientes extends React.Component{
     constructor(){
        super();
     }
     
     render(){
        return (
        <center><Form>
            <h1>REGISTRO DE TERCERO</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Primer Nombre </Form.Label>
          <Form.Control type="text" placeholder="Primer Nombre" />
          <Form.Label>Segundo Nombre </Form.Label>
          <Form.Control type="text" placeholder="Segundo Nombre" />
          <Form.Label>Documento Identidad </Form.Label>
          <Form.Control type="text" placeholder="Documento identidad" />
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" color="orange">
          REGISTRAR
        </Button>
      </Form></center>
        )
     
     }
            
         }
         
     
            
 
 
 export default Registro_clientes;
