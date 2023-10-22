import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Pages/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Header from '../Pages/Header/Header';
export default function Form() {
    
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

    const handleInsert = () => {
        axios.post("http://localhost:4000/insert", {
            name: tablelist.name,
            logo: tablelist.logo,
            appIcon: tablelist.appIcon,
            appID: tablelist.appID,
            appName: tablelist.appName,
            dbconnstring: tablelist.dbconnstring,
            admin_name: tablelist.admin_name,
            email: tablelist.email
        }).then((result) => {
        })
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
                {/* <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name = "password"/>
                    </div>
                </div> */}
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
                {/* <div className="row mb-3">
                    <label for="inputDate" className="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control"/>
                    </div>
                </div> */}
                {/* <div className="row mb-3">
                    <label for="inputTime" className="col-sm-2 col-form-label">Time</label>
                    <div className="col-sm-10">
                        <input type="time" className="form-control"/>
                    </div>
                </div> */}

                {/* <div className="row mb-3">
                    <label for="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                    <div className="col-sm-10">
                        <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color"/>
                    </div>
                </div> */}
                {/* <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Textarea</label>
                    <div className="col-sm-10">
                        <textarea className="form-control"></textarea>
                    </div>
                </div> */}
                {/* <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                <label className="form-check-label" for="gridRadios1">
                                    First radio
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                <label className="form-check-label" for="gridRadios2">
                                    Second radio
                                </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled/>
                                <label className="form-check-label" for="gridRadios3">
                                    Third disabled radio
                                </label>
                        </div>
                    </div>
                </fieldset> */}
                {/* <div className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                    <div className="col-sm-10">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    Example checkbox
                                </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck2" checked/>
                                <label className="form-check-label" for="gridCheck2">
                                    Example checkbox 2
                                </label>
                        </div>

                    </div>
                </div> */}

                {/* <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Disabled</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value="Read only / Disabled" disabled/>
                    </div>
                </div> */}

                {/* <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Select</label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div> */}

                {/* <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Multi Select</label>
                    <div className="col-sm-10">
                        <select className="form-select" multiple aria-label="multiple select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div> */}
                <br />
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <Link to="/community" className="btn btn-primary" onClick={handleInsert}>Submit</Link>
                    </div>
                </div>

            </form>
        </>
    )
}
