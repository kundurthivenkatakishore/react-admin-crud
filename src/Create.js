import axios from 'axios';
import React, { useState } from 'react';
import './App.css'
import {useNavigate} from 'react-router-dom';

function Create() {
    let navigate=useNavigate();
    const[name,setName]=useState('');
    const[position,setPosition]=useState('');
    const[office,setOffice]=useState('');
    const[age,setAge]=useState('');
    const[salary,setSalary]=useState('');
    const postdata=()=>{
        // creating the data using axios request
        axios.post(`https://6213c04189fad53b1f002efa.mockapi.io/employess`,{
            name,
            position,
            office,
            age,
            salary
        }).then(()=>{
            // navigating to read component after creating 
            navigate('/Read')
        })
    }
    return (
        //form for taking the inputs from the user
        <form className='create-form' onSubmit={(e)=>e.preventDefault()}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
                </div>
                <div className="form-group col-md-6">
                    <label for="position">Position</label>
                    <input type="text" className="form-control" id="position" placeholder='Position'
                    onChange={(e)=>setPosition(e.target.value)}/>
                </div>
            </div>
            <div className="form-group">
                <label for="office">Office</label>
                <input type="text" className="form-control" id="office" placeholder="office" 
                onChange={(e)=>setOffice(e.target.value)}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="age">Age</label>
                    <input type="number" className="form-control" id="age" placeholder='Age' 
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="salary">Salary</label>
                    <input type="text" className="form-control" id="salary" placeholder='Salary' 
                    onChange={(e)=>setSalary(e.target.value)}/>
                </div>
            </div>
            {/* calling the postdata function which will post the data to the api */}
            <button type="submit" className="btn btn-primary" onClick={postdata}>Submit</button>
        </form>
    )
}
export default Create