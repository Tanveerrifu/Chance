import React from 'react';
import Logo from '../../../images/logo.svg'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navcss navbar-light">
                <div className="container">
                    {/* <a className="navbar-brand"  href="#"> */}
                        <img src={Logo} alt="" style={{marginLeft:'auto',marginRight:'auto',display:'block', marginTop:'10px',marginBottom:'10px', height:'50px',width:'100px'}} />
                        
                            
                    {/* </a> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;