import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Update(){
    let navigate=useNavigate();
    const[id,setID]=useState(null)
    useEffect(()=>{
        //using the data which is stored in localstorage previously
        setID(localStorage.getItem('ID'));
        setName(localStorage.getItem('Name'));
        setPosition(localStorage.getItem('Position'));
        setOffice(localStorage.getItem('Office'));
        setAge(localStorage.getItem('Age'));
        setSalary(localStorage.getItem('Salary'))

    },[]);
    const[name,setName]=useState('');
    const[position,setPosition]=useState('');
    const[office,setOffice]=useState('');
    const[age,setAge]=useState('');
    const[salary,setSalary]=useState('');
    const updateAPIdata=()=>{
        axios.put(`https://6213c04189fad53b1f002efa.mockapi.io/employess/${id}`,{
            name,
            position,
            office,
            age,
            salary
        }).then(()=>{
            //navigating to the read component after updating the data
            navigate('/Read')
        })
    }
    return(
        <form className='create-form' onSubmit={(e)=>e.preventDefault()}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} 
                    placeholder='Name' value={name}/>
                </div>
                <div className="form-group col-md-6">
                    <label for="position">Position</label>
                    <input type="text" className="form-control" id="position" placeholder='Position' value={position}
                    onChange={(e)=>setPosition(e.target.value)}/>
                </div>
            </div>
            <div className="form-group">
                <label for="office">Office</label>
                <input type="text" className="form-control" id="office" placeholder="office" value={office}
                onChange={(e)=>setOffice(e.target.value)}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="age">Age</label>
                    <input type="number" className="form-control" id="age" placeholder='Age' value={age}
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="salary">Salary</label>
                    <input type="text" className="form-control" id="salary" placeholder='Salary' value={salary}
                    onChange={(e)=>setSalary(e.target.value)}/>
                </div>
            </div>
            {/* calling the updateAPIdata function when onclicking the submit button */}
            <button type="submit" className="btn btn-primary" onClick={updateAPIdata}>Submit</button>
        </form>
    )
}
export default Update;