import React, { Component} from 'react';
import styles from "./gallery.module.scss"
import Popup from "./popup.js"


class Image extends Component{
    constructor(props){
        super(props);
        this.state={
            imageUrl:"",
            imageUrlArray:[
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_202101121536081.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_202101121538463.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154024.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154121.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154230.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154321.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154413.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154526.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154700.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154839.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112154957.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112155112.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112155313.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/one.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112173428.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112173438.jpg?raw=true",
                "https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/src/assets/gallery/WeChat%20Image_20210112173443.jpg?raw=true"

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
                <div className = {styles.allImage}>
                <img
                    className = {styles.singleImage}
                    src={url}
                    keys={index}
                    onClick={()=>this.handlePopup(url)}
                />
                </div>
            )
        })
        return(
            <div className={styles.Images}>
               {/* <form onSubmit={this.imageSubmitter}>
                    <input
                        types="text"
                        placeholder='plzinsert image url'
                        onChange={this.handleLinkChange}
                    />
                    <button type="Submit" className="submitButton">
                        submit image
                    </button>
                </form>
                */}

                

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