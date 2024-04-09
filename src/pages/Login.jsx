import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {Header, Footer} from '../components/index'



const Login = () => {
 
  let  navigate=useNavigate()

  const [credentials, setcredentials ]= useState({email:"",password:""});
 
  const handleSumbmit = async(e)=>{
    console.log("Json")
    e.preventDefault();
    const response =await fetch("https://newfoodgo.onrender.com/api/loginuser",{
      method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers as needed
    },
    body: JSON.stringify({ email:credentials.email,password:credentials.password})
    })
    const json = await response.json();
    console.log("Json: ", json)

    // if(!json.succes){
    //   alert('Enter Valid Credentials')
    // }
    if (!json.success) {
      alert('Enter Valid Credentials')
      
    } 
    
    
    else {
      alert('welcome  {name}')
    } if (json.success) {
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate('/')

    }
    
       
  }
    const onChange = (event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
    <Header />
    <div className="container">
    <form className='text-center' onSubmit={handleSumbmit}>
      
  
  <div className="mb-3">
    <label html="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
</div>
<Footer />
    </>
  )
}

export default Login



































// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Header,Footer } from '../components';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "", geolocation: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/loginuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any other headers as needed
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })
//     });
//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert('Enter Valid Credentials');
//     }

//     if (json.success) {
//       localStorage.setItem("authTokn", json.autgToken)
//       console.log(localStorage.getItem( "authTokn"));
//       navigate('/');
//     }
//   }

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   }

//   return (
//     <>
//     <Header/>
//       <div className="container">
//         <form className='text-center' onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//           <Link to="/Signup" className="btn m-3 btn-danger">Go to SignUp</Link>
//         </form>
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default Login;

// import React, { useState } from 'react'
// import { Header } from '../components'
// import { useNavigate, Link } from 'react-router-dom'
//  function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" })
//   let navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/loginuser", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       //save the auth toke to local storage and redirect
//       localStorage.setItem('userEmail', credentials.email)
//       localStorage.setItem('token', json.authToken)
//       navigate("/");

//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (


//     <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
//       <div>
//         <Header />
//       </div>
//       <div className='container'>
//         <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//           <div className="m-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
//           </div>
//           <div className="m-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//           </div>
//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default Login





















