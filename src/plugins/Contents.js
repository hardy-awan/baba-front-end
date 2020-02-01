import React, {Component} from 'react';
import ContentApi from './ContentApi';
import axios from 'axios'


export default class Contents extends Component {

    state = {
        post:[]
    }

    componentDidMount(){
        axios.get("http://localhost:7100/kursus")
            .then((result) => {
                this.setState({
                    post:result.data.response
                })
                console.log(result.data.response)
            })
    }

    render(){
        return(
            <div> 
            {
                this.state.post.map(post => {

                    return <ContentApi key={post.id} nama_kursus={post.nama_kursus} total_durasi={post.total_durasi}
                    total_murid={post.total_murid} jumlah_video={post.jumlah_video} harga={post.harga}
                    image={post.image} />
                })
                
            }
        </div>       
           
        )
    }
}