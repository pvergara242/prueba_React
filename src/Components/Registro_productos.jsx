import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


 class Registro_productos extends React.Component{
     constructor(){
        super();
     }
     
     render(){
        return (
        <center><Form>
            <h1>REGISTRO DE PRODUCTOS</h1>
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
      
        
        <Button variant="primary" type="submit" >
          REGISTRAR
        </Button>
      </Form></center>
        )
     
     }
            
         }
         
     
            
 
 
 export default Registro_productos;
