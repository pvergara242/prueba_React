import { useState } from "react"


function App() {
  const [email,setEmail] = useState(" ");
  const [password,setPassword] = useState();
  
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  }
  
  const handlePasswordchange = (event) =>{
    setPassword(event.target.value);
  }
  
  const handleFormsubmit = (event) =>{
    event.preventDefault();
    alert(`usuario: ${email}, contraseña: ${password}`);
  }
  
  
  
  return (
    <div className="App">
      <form onSubmit={handleFormsubmit}>
        <h2>INICIAR SESION</h2>
        <label>
          correo
          <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          contraseña
          <input type="password" value={password} onChange={handlePasswordchange}/>
        </label>
        <button type="submit">
          ENTER
        </button>
      </form>
   </div>
  );
} 

export default App;
