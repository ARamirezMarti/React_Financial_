import React ,{useState} from 'react';
import './Login.css';





function Login (props) {

  const [alert,setAlert] = useState('');
 

 async function handleLogin(e) {
   e.preventDefault();
 
   const data = {
     ACCOUNT_EMAIL:e.target.email.value,
     ACCOUNT_PASS:e.target.password.value
   }
   
   
   var myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');

  await fetch('http://localhost:3500/login',{
     method:'POST',
     headers:myHeaders,
     body:JSON.stringify(data),
     redirect:"follow"
     
   }).then(response=>response.json())
     .then((data)=>{
       if (data.ok === true) {
        props.history.push('/app');
        document.cookie=`token= ${data.token}`;
       } else {
         setAlert(data.tag);   
       }
     })
     .catch((error)=>console.log(error))    
   
   
 }


  return (
    <div>
        <div className="container col-4">
          <h1> Financial App Login</h1>
          <p className="alert" >{alert}</p>
          <form className="form"  onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email"></label>
                <input type="email" className="form-control" name="email" placeholder="Your email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="password"></label>
                <input type="password" className="form-control" name="password" placeholder=" Your Password"></input>
              </div>
              <button  className="btn btn-outline-success">Log in</button>
            </form>
            
            <a  href="/signup" > Sign Up with new account</a>
         
        </div>  


        

    </div>


  );
}


export default Login;
