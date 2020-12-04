import React,{useState} from 'react';
import './Login.css';



function SignupComponent(props){    

  const [alert,setAlert] = useState('');
  
  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      ACCOUNT_NAME:e.target.account.value,
      ACCOUNT_EMAIL:e.target.email.value,
      ACCOUNT_PASS:e.target.password.value
    }
    
    
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

   await fetch('http://localhost:3500/signup',
    { method:'POST',
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
    
        return(
            <div>
              <div className="containerLogin col-6">
            <h2>Sign UP Financial App Login</h2>

            <form className="formLogin col-6" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="acc" >Account name</label>
                <input type="acc" className="form-control" maxLength="10" name="account" placeholder="Your desired account name"></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Your Password</label>
                <input type="password" className="form-control" name="password" placeholder=" Your Password"></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email address</label>
                <input type="email" className="form-control" name="email"  placeholder="Your email"></input>
                
                <button className="btn btn-outline-success">Submit </button>
              
              </div>
              
            </form>
            <p className="alert" >{alert}</p>

            <a href="/"> Go back Log in</a>

          </div>

            </div>
    
        );
    
}


export default SignupComponent;