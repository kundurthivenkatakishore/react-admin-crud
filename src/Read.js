import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';
import {Link } from 'react-router-dom'

function Read(){
    const setData=(data)=>{
        //storing in localstorage for further usage
        let{id,name,position,office,age,salary}=data;
        localStorage.setItem('ID',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Position',position);
        localStorage.setItem('Office',office);
        localStorage.setItem('Age',age);
        localStorage.setItem('Salary',salary);
    }
    //getting the data from the api using axios request
    const getData=()=>{
        axios.get(`https://6213c04189fad53b1f002efa.mockapi.io/employess`)
        .then((getData)=>{
            setAPIdata(getData.data);
        })
    }
    //deleting the data using the passed id
    const onDelete=(id)=>{
        axios.delete(`https://6213c04189fad53b1f002efa.mockapi.io/employess/${id}`)
        .then(()=>{
            getData();
        })
    }
    const[APIdata,setAPIdata]=useState([]);
    useEffect(()=>{
        axios.get(`https://6213c04189fad53b1f002efa.mockapi.io/employess`)
        .then((response)=>{
            setAPIdata(response.data);
        })
    },[])
    return(
        //inserting the data from api into the table
        <table className="table table-bordered table-sm table1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {APIdata.map((data)=>{
                    return(
                        <tr>
                            <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.position}</td>
                    <td>{data.office}</td>
                    <td>{data.age}</td>
                    <td>{data.salary}</td>
                    <Link to="/Update"><td><button className="btn btn-primary" onClick={()=>setData(data)}>Update</button></td></Link>
                    <td><button className='btn btn-primary' onClick={()=>onDelete(data.id)}>Delete</button></td>
                </tr>
                    )
                })}
                
            </tbody>
        </table>
        
    )
}
export default Read