import React, {Component} from 'react';
import '../img/logo.png'



class Footer extends Component{
    render(){
        return(
            <footer>    
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-5 col-xs-12">
                            <div className="widget">
                                <div className="widget__title">
                                    <a href="/">
                                        <img className="image-fluid" src={require('../img/logo.png')} alt="vector logo" />
                                    </a>
                                </div>
                                <div className="widget__description">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <div className="widget">
                                <div className="widget__title">
                                    <h3>Tentang</h3>
                                </div>
                                <div className="widget__description">
                                    <ul>
                                        <li><a href="/">Kupon</a></li>
                                        <li><a href="/">Kursus</a></li>
                                        <li><a href="/">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <div className="widget">
                                <div className="widget__title">
                                    <h3>Customer Service</h3>
                                </div>
                                <div className="widget__description">
                                    <ul>
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Kontak Kami</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="widget">
                                <div className="widget__title">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="widget__description">
                                    <p>Ikuti Berita Kami</p>
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <input id="exampleInputEmail" className="form-control" type="email" name="email" placholder="Enter Your Email" />
                                        </div>
                                        <button className="btn btn-default btn-plane-send">
                                            <i className="icon ion-md-paper-plane"></i>
                                        </button>
                                    </form>
                                    <p>Terkoneksi Dengan Kami</p>
                                    <ul className="media">
                                        <li>
                                            <a className="facebook" href="/">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                    
                                        <li>
                                            <a className="twitter" href="/">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a className="gplus" href="/">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="copyright__text text-center">
                            <p>
                                Copyright @2019
                                <a href="/">Dedy Hardi Kurniawan</a>
                                , All right reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer