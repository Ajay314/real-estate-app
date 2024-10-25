import { useState } from "react";


import axios from 'axios';

function AddProperty() {

    const [ name , setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ location , setLocation ] = useState('');
    const [ availablity, setAvailablity ] = useState('');
    
     const handleSubmit = async (e) =>{
        e.preventDefault();

        
        try{

            
            const response = await axios.post('http://localhost:3003/add', {name,price,location,availablity});
            console.log(response);
            alert("Property Added");
          
            setName('');
            setPrice('');
            setLocation('');
            setAvailablity('');
           
        }
        catch(err){
            console.log('Property Add error: ' , err);
        }
    };
    
    

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><center>Hi Admin, Add a Property </center></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter property name" autoComplete="off" name ="name" value={name} className="form-control rounded-0"
                        onChange={(e)=> setName(e.target.value)}></input>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Price</strong>
                        </label>
                        <input type="number" placeholder="what is the price" autoComplete="off" name ="price" value={price} className="form-control rounded-0"
                        onChange={(e)=> setPrice(e.target.value)}></input>
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Location</strong>
                        </label>
                        <input type="text" placeholder="Enter location here" autoComplete="off" name ="location" value={location} className="form-control rounded-0"
                        onChange={(e)=> setLocation(e.target.value)}></input>
                        
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Availability</strong>
                        </label>
                        <input type="" placeholder="Availability" autoComplete="off" name ="availability" value={availablity} className="form-control rounded-0"
                        onChange={(e)=> setAvailablity(e.target.value)}></input>
                        
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Add Property</button>
                </form>
              
            </div>
        </div>
    )

}

export default AddProperty;
    
