import Dashboard from './Dashboard';
import React from 'react';
import {Link} from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import UpdateIcon from '@mui/icons-material/Update';

//importing the material icons

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            <hr className="sidebar-divider my-0" />

            {/* setting the path using link from react router dom to the destinated path */}

            <li className="nav-item active">
                <Link to="/Dashboard" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/Table" className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/Create" className="nav-link">
                <AddBoxIcon/>
                    <span>Create</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/Read" className="nav-link">
                    <BookmarkIcon/>
                    <span>Read</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/Update" className="nav-link">
                    <UpdateIcon/>
                    <span>Update</span></Link>
            </li>
        </ul>
    )
}
export default Sidebar