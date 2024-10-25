import { useState } from "react";


import axios from 'axios';

function Signup() {

    const [ name , setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ errors, setErrors ] = useState({});


    const validateForm = ()=> {
        const newErrors = {};

        if(!name || name.trim().length<3){
            newErrors.name = "Name is required and atleast having 3 Characters";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email || !emailRegex.test(email)){
            newErrors.email = "Email Format is not Valid";
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!password || !passwordRegex.test(password)){
            newErrors.password = "Password format is not valid";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
        
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!validateForm()){
            return;
        }
        try{

            
            const response = await axios.post('http://localhost:3003/signup', {name,email,password});
            console.log(response);
            alert("Signup Successfull");
            setName('');
            setEmail('');
            setPassword('');
        }
        catch(err){
            console.log('SignUp error: ' , err);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><center>Sign Up </center></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter your name here" autoComplete="off" name ="name" value={name} className="form-control rounded-0"
                        onChange={(e)=> setName(e.target.value)}></input>
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter your mailId here" autoComplete="off" name ="email" value={email} className="form-control rounded-0"
                        onChange={(e)=> setEmail(e.target.value)}></input>
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter your password here" autoComplete="off" name ="password" value={password} className="form-control rounded-0"
                        onChange={(e)=> setPassword(e.target.value)}></input>
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0" disabled={Object.keys(errors).length>0}>Signup</button>
                </form>
               {/* <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link> */}
            </div>
        </div>
    )

}

export default Signup;
