import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="/">
                            <i className="bi bi-grid"></i>
                            <span><Link to = "/dashboard">Dashboard</Link></span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/">
                            <i className="bi bi-grid"></i>
                            <span><Link to = "/community">Community</Link></span>
                        </a>
                    </li>

                </ul>

            </aside>

        </>
    )
}
