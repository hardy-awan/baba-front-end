import React, {Component} from 'react';



class Header2 extends Component{
    render(){
        return(
            <div className="all-course">
                <div className="detail-courses shopping-cart checkout">
                    <div className="container">
                        <ul className="detail__title">
                            <li>
                                <a href="/">
                                    <span className="info">
                                        <ion-icon name="arrow-back" role="img" className="hydrated" aria-label="arrow-back"></ion-icon>
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li>
                                <span className="info">All Course</span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="breadcrumb">
                    <div className="container">
                        <h2>Semua Kursus Tersedia</h2>
                    </div>
                </div>
                <div className="container">
                    <h2 className="inner">All Course</h2>
                    <form id="filtering">
                        <div className="all-course__filter">
                            <span className="title">Filter by</span>
                            <div className="split__filter">
                                <select className="form-control searchable" name="type" id="category">
                                    <option >Pilih</option>
                                    <option >Kursus</option>
                                    <option >Paket</option>
                                    <option >Kategori</option>
                                    <option >Sub Kategori</option>
                                    <option >Harga Khusus</option>
                                </select>
                            </div>
                            <div className="split__filter">
                                <select className="form-control" id="categorys" style={{display:'none'}}></select>
                                <select className="form-control" id="subcategorys" style={{display:'none'}}></select>
                                <select className="form-control" id="price" style={{display:'none'}}></select>
                            </div>
                            <div className="split__filter search">
                                <input type="text" name="search" className="form-control" placeholder="Search" />
                                <button type="submit" className="btn btn-default">SEACH</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
};

export default Header2