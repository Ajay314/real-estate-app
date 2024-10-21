import { useState } from "react";
import axios from "axios";


function Login () {

    const [email, setEmail] =useState('');
    const [password,setPassword] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try{
            const response =  await axios.post('http://localhost:3003/login' , { email ,password});
            console.log(response);

            if(response.data !=="Success"){
                setErrorMessage("Invalid email or password, please try again..");
                setEmail('');
                setPassword('');
            }

        }
        catch(err){
            console.log("Login error:  " , err);
            setErrorMessage("An error occured during login. Please try Again");
        }
    };

    return(

        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><center>Login</center></h2>
                <form onSubmit={handleSubmit}>
                   
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter your mailId here" autoComplete="off" name ="email" value={email} className="form-control rounded-0"
                        onChange={(e)=> setEmail(e.target.value)}></input>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter your password here" autoComplete="off" name ="password" value={password} className="form-control rounded-0"
                        onChange={(e)=> setPassword(e.target.value)}></input>
                        
                    </div>
                    {errorMessage && (
                        <p className="text-danger">{errorMessage}</p>
                    )}
                    <button type="submit" className="btn btn-success w-100 rounded-0" disabled={!!errorMessage}>Login</button>
                </form>
               
            </div>
        </div>
    )
}







export default Login;