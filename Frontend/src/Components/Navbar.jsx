import React from 'react'

export const Navbar = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className="navbar-brand" href=''>
                    Readit
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav'>
                        <li className='nav-item1 active'>
                            <a className='nav-link' href='#'>
                                Dashboard
                            </a>
                        </li>

                        <li className='nav-item2 active'>
                            <a className='nav-link' href='#/Login'>
                                Login
                            </a>
                        </li>

                        <li className='nav-item3 active'>
                            <a className='nav-link' href='#/Register'>
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}