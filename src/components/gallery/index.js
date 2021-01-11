import React, { Component} from 'react';
import styles from "./gallery.module.scss"
import Popup from "./popup"

class Image extends Component{
    constructor(props){
        super(props);
        this.state={
            imageUrl:"",
            imageUrlArray:[

                "https://images.unsplash.com/photo-1564991922793-bc9003473313?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1535005410886-12b3caf12112?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1564612123322-ec11b6e1930a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1564665872710-7cce69129b0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1564415637254-92c66292cd64?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=60"
           
           
            ],
            showModal:false,
            popImagesUrl:""
        };
    }

    imageSubmitter = (e) =>{
        e.preventDefault();
        let imageUrlArray = this.state.imageUrlArray;
        imageUrlArray.push(this.state.imageUrl)
        this.setState({
            imageUrlArray:imageUrlArray
        })
    }

    handleLinkChange = (e)=>{
        e.preventDefault();
        this.setState({
            imageUrl:e.target.value
        })
    }

    handlePopup=(url)=>{
        this.setState({
            showModel:!this.state.showModal,
            popImageUrl:url
        })
    }


    render(){
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) =>{
            return(
                <img
                    className = {styles.singleImage}
                    src={url}
                    keys={index}
                    onClick={()=>this.handlePopup(url)}
                />
            )
        })
        return(
            <div className={styles.Images}>
                <form onSubmit={this.imageSubmitter}>
                    <input
                        types="text"
                        placeholder='plzinsert image url'
                        onChange={this.handleLinkChange}
                    />
                    <button type="Submit" className="submitButton">
                        submit image
                    </button>
                </form>

                {images}

                {this.state.showModal ?(
                    <Popup
                        popImageUrl = {this.state.popImageUrl}
                        closePopup = {this.handlePopup}
                    
                    />
                ):null}
            </div>
        );
    }
}

export default Image;