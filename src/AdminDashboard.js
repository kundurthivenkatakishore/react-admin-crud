import React from 'react';
import Sidebar from './Sidebar';
import Table from './Table'
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Dashboard from './Dashboard';
import {Routes,Route} from 'react-router-dom';

function AdminDashboard(){
    return(
    <div id="wrapper">
        <Sidebar/>
        <Routes>
            <Route exact path='/Dashboard' element={<Dashboard/>}/>
            <Route exact path='/Table' element={<Table/>}/>
            <Route exact path='/Create' element={<Create/>}/>
            <Route exact path='/Read' element={<Read/>}/>
            <Route exact path='/Update' element={<Update/>}/>
        </Routes>
    </div>
    )
}
export default AdminDashboard;