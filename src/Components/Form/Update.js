import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Pages/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Header from '../Pages/Header/Header';
export default function Update() {
    
    const [tablelist, setTablelist] = useState({
        "name": "",
        "logo": "",
        "appIcon": "",
        "appID": "",
        "appName": "",
        "dbconnstring": "",
        "admin_name": "",
        "email": ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTablelist({
            ...tablelist,
            [name]: value
        });
    }
    const id = JSON.parse(localStorage.getItem('id'));
    useEffect(()=>{
        axios.get(`http://localhost:4000/getbyId/${id}`).then((result)=>{
            setTablelist({
                name: result.data?.name,
                logo: result.data?.logo,
                appIcon: result.data?.appIcon,
                appID: result.data?.appID,
                appName: result.data?.appName,
                dbconnstring: result.data?.dbconnstring,
                email: result.data?.email,
                admin_name: result.data?.admin_name
            })
        })
    },[])
    const handleUpdate = () => {
        
        axios.put(`http://localhost:4000/update/${id}`, {
            name: tablelist.name,
            logo: tablelist.logo,
            appIcon: tablelist.appIcon,
            appID: tablelist.appID,
            appName: tablelist.appName,
            dbconnstring: tablelist.dbconnstring,
            email: tablelist.email,
            admin_name: tablelist.admin_name
        }).then((result) => {
        })
        localStorage.removeItem('id');
    }

    const fstyle = {
        marginLeft: "200px",
        marginTop: "80px"
    }

    return (

        <>
            <Header/>
            <Sidebar />

            <form className='pt-5 ps-5 w-75' style={fstyle}>
                <h2>Add Data:</h2><br />
                <div className="row mb-3">
                    <label for="inputText" className="col-sm-2 col-form-label">Community Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" value={tablelist.name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">App ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="appID" value={tablelist.appID} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">App Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="appName" value={tablelist.appName} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">Logo</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="file" id="formFile" name="logo" value={tablelist.logo} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">App Icon</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="file" id="formFile" name="appIcon" value={tablelist.appIcon} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">DB String</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="url" id="formFile" name="dbconnstring" value={tablelist.dbconnstring} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" name="email" value={tablelist.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputText" className="col-sm-2 col-form-label">Admin Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="admin_name" value={tablelist.admin_name} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <Link to="/community" className="btn btn-primary" onClick={handleUpdate}>Submit</Link>
                    </div>
                </div>

            </form>
        </>
    )
}
