import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
   
     const {createUser} = useContext(AuthContext)

    const handleSignup = (event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password =form.password.value
        
        // console.log(name, email, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
           <div className="hero min-h-screen mt-6 bg-base-200">
      
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignup}>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Name</span>
                      </label>
                      <input type="text" name='name' placeholder="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Photo Url</span>
                      </label>
                      <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input type="text" name='email' placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                      <input type="text" name='password' placeholder="password" className="input input-bordered" />
                     
                  </div>
                  <div className="form-control mt-6">
                      <input className="btn btn-secondary" type="submit" value="Submit" />
                  </div>
              </form>
              <p className='my-4 text-center'> Already have an account please? <Link className=' text-emerald-600 font-bold link link-hover' to="/login">Login</Link> </p>
            
          </div>
      </div>
  </div>

        </div>
    );
};

export default SignUp;