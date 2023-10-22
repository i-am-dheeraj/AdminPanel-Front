import React, { useEffect, useState } from 'react'
import Header from '../Pages/Header/Header'
import Sidebar from '../Pages/Sidebar/Sidebar'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Dashboard() {
    const fstyle = {
        marginLeft: "250px",
        marginTop: "120px"
    }
    // const [tablelist, setTablelist] = useState({
    //     name: "",
    //     logo :"",
    //     appIcon: "",
    //     appID: "",
    //     appName:""
    // });
    // const [all, setAll] = useState([])
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/getall").then((result)=>{
    //         // console.log(result.data)
    //         setAll(result.data);
    //         // console.log(all);
    //     })
    // },[]);
    // const handleUpdate = (data) =>{
    //     const id = data._id;
    //     localStorage.setItem('id',JSON.stringify(id));
    // }
    // const handleDelete = (data) =>{
    //     const id = data._id;
    //     axios.delete(`http://localhost:4000/delete/${id}`).then(()=>{
    //         alert("Deleted Successfully");
    //     });
    // }
    return (
        <>
            <Header />
            <Sidebar />
            <div className="container w-75" style={fstyle}>
                <h1>Welcome Back,  Admin</h1>
            </div>
            {/* <div className="container-fluid w-75 me-5 mt-5">
            <div className="row mt-5 ms-5 ps-5">
                <div className="col">
                    <hr className='mt-5'/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="col-head">
                        S.No.
                    </div>
                </div>
                <div className="col">
                    <p className='col-head'>Community Name</p>
                </div>
                <div className="col">
                    <p className="col-head">Logo</p>
                </div>
                <div className="col">
                    <p className="col-head">App Icon</p>
                </div>
                <div className="col">
                <p className="col-head">App Name</p>
                </div>
                <div className="col">
                <p className="col-head">DB Conn String</p>
                </div>
                <div className="col">
                <p className="col-head">App ID</p>
                </div>
                <div className="col">
                <p className="col-head">PlayStore ID</p>
                </div>
                <div className="col">
                <p className="col-head">Comm. Admn. Name</p>
                </div>
                <div className="col">
                <p className="col-head">Email</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
        </div> */}
            {/* <section className="section">
                <div className="row mt-5 pt-5 w-75 me-5 ps-5 float-end">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Datatables</h5>
                                {/* <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable</p> */}

                                {/* <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No.</th>
                                            <th scope="col">Comm. Name</th>
                                            <th scope="col">Logo</th>
                                            <th scope="col">App Icon</th>
                                            <th scope="col">App ID</th>
                                            <th scope="col">App Name</th>
                                            <th scope="col"></th>
                                            <th scope="col"><Link to = "/form" className="btn btn-primary ps-4 pe-4 pt-1 pb-1">Add</Link></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {all.map((data,index)=>(

                                        
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{data.name}</td>
                                            <td>Logo</td>
                                            <td>App Icon</td>
                                            <td>{data.appId}</td>
                                            <td>{data.appName}</td>
                                            
                                            <td><Link to = "/updateform" className="btn btn-success" onClick={()=>handleUpdate(data)}>Update</Link></td>
                                            <td><button className="btn btn-danger" onClick={()=>handleDelete(data)}>Delete</button></td>

                                        </tr>
                                        ))}
                                    </tbody>
                                </table> */}

                            {/* </div>
                        </div> */}

                    {/* </div>
                </div>
                
            </section> */} 

        </>
    )
}
