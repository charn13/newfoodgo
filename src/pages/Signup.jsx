import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [credentials, setcredentials ]= useState({name:"",email:"",password:"",geolocation:""});
 
  const handleSumbmit = async(e)=>{
    console.log("Json")
    e.preventDefault();
    const response =await fetch("https://gofood-1-pmft.onrender.com/api/creatuser",{
      method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers as needed
    },
    body: JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password, location: credentials.geolocation})
    })
    const json = await response.json();
    console.log("Json: ", json)

    // if(!json.succes){
    //   alert('Enter Valid Credentials')
    // }
    if (!json.success) {
      alert('Enter Valid Credentials')
      
    } else {
      alert('welcome')
    }

  }
    const onChange = (event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
  <>
  <div className="container">
    <form className='text-center' onSubmit={handleSumbmit}>
      
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={credentials.name} onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
             <label htmlFor="exampleInputLocation" className="form-label">Location</label>
             <input type="text" className="form-control w-50 m-auto" id="exampleInputLocation" name='geolocation' value={credentials.geolocation} onChange={onChange} />
          </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/Login" className="btn m-3 btn-danger">Go to Login</Link>
</form>
</div>
</>
  )
}

export default Signup
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/creatuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any other headers as needed
       
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
//     });
//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert('Enter Valid Credentials');
//     }
//   }

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   }

//   return (
//     <>
//       <div className="container-fluied">
//         <form className='text-center' onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputName" className="form-label">Name</label>
//             <input 
//             type="text" 
//             className="form-control w-50 m-auto" 
//             id="exampleInputName" 
//             aria-describedby="emailHelp" 
//             name='name' 
//             onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control w-50 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'   onChange={handleSubmit} />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1"   onChange={onChange} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputLocation" className="form-label">Location</label>
//             <input type="text" className="form-control w-50 m-auto" id="exampleInputLocation" name='geolocation'   onChange={onChanget}  />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//           <Link to="/Login" className="btn m-3 btn-danger">Go to Login</Link>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Signup;
