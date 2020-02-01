import React, {Component} from 'react';
import '../img/logo.png';




class Header extends Component{
    render(){
        return(
          <header>  
            <nav className="navbar navbar-brand-lg">
                <a className="navbar-brand" href="/">
                    <img className="img-fluid" src={require("../img/logo.png")} alt="BabaStudio"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                {/* <div id="navbarSupportedContent" className="collapse navbar-collapse"> */}
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            
                            <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-th" aria-hidden="true"></i> Categories
                            </a>
                            <div className="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Design</a>
                                <a className="dropdown-item" href="/">Digital Marketing</a>
                                <a className="dropdown-item" href="/">Programming Front-end</a>
                                <a className="dropdown-item" href="/">Programming Back-end</a>
                                <a className="dropdown-item" href="/">Mobile</a>
                                <a className="dropdown-item" href="/">Vide Editing</a>
                                <a className="dropdown-item" href="/">Database</a>
                                <div className="dropdown-submenu category-menu">
                                    <a className="dropdown-item" data-toggle="dropdown">
                                        Paket Kursus
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </a>
                                    <ul>
                                        <li className="dropdown-item">
                                            <a href="/" data-name="">Paket Kursus Programming</a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" data-name="">Paker Kursus Internet Marketing</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown-submenu category-menu">
                                    <a className="dropdown-item" href="/" data-toggle="dropdown">
                                        Chat Realtime
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <a href="/">1 Minggu</a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/">3 Minggu</a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/">5 Minggu</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown-item category-menu">
                                    <a className="dropdown-item" href="/">
                                            All Courses
                                        <i className="fa fa-chevron-right" data-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" name="search" placeholder="Search For Courses..." required="" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <i className="fa  fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <ul className="nav navbar-nav navbar-right font-thin">
                        <li className="nav-item"><a href="/">Techfor Community</a></li>
                        <li className="nav-item">
                            <a href="/">
                                <i className="fa icon fa-shopping-cart" aria-hidden="true"></i>
                                <span id="cartsCount" className="notif">0</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="bord-rad" href="/">
                                <span>Login</span>
                            </a>
                        </li>
                        <li></li>
                        <li className="nav-item signup">
                            <a className="bord-rad" href="/">
                                <span>Sign Up</span>
                            </a>
                        </li>
                    </ul>
                {/* </div> */}

            </nav>
          </header>  
        )
    }
}


export default Header