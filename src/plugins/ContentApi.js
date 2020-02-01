import React from 'react';
import '../style/style.css'


const ContentApi = (props) => {
    
        return(
                <div className="course__list">
                <ul className="list__item">
                        <li>
                            <div className="course__box">
                                <a href="/">
                                    <div className="image">
                                        <img method="get" src={props.image} className="img-responsive" alt="content course"/>
                                    </div>
                                    <div className="course__desc">
                                        <p className="title" method="get">{props.nama_kursus}</p>
                                        <p className="info__course" method="get">
                                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                                            "  Total Durasi Video Kursus {props.total_durasi} "
                                        </p>
                                        <p className="info__course" method="get">
                                            <i className="fa fa-users" aria-hidden="true"></i>
                                            " {props.total_murid} Murid "
                                        </p>
                                        <p className="info__course" >
                                            <i className="fa fa-book" aria-hidden="true"></i>
                                            " {props.jumlah_video} Materi Khusus "
                                        </p>
                                
                                        <div className="clearfix">
                                            <small className="pull-left text-secondary"></small>
                                            <span size="4px" className="price pull-right m-0" style={{color:'#215CA0'}}>
                                                <strong>RP. {props.diskon}</strong> 
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                </ul>
                </div>
        )
    
}


export default ContentApi