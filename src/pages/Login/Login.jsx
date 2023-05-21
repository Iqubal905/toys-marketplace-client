import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

  const {signIn, logInWithGoogle} = useContext(AuthContext)




const handleGoogleLogIn =()=>{
    logInWithGoogle()
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error =>{
        console.log('Error', error.message);
    })
}


    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result =>{
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }



    return (
        <div className="hero min-h-screen bg-base-200">
      
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                <form onSubmit={handleLogin}>
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
                            <input className="btn btn-secondary" type="submit" value="Login" />
                        </div>
                    </form>  
                  <p className='my-4 text-center'>If you are not register please <Link className=' text-emerald-600 font-bold link link-hover' to="/signup">Sign Up</Link> </p>
                  <div className="divider">OR</div>
                  <button className="btn btn-outline btn-accent" onClick={handleGoogleLogIn}>Google</button>
                  
                </div>
            </div>
        </div>
   
    );
};

export default Login;