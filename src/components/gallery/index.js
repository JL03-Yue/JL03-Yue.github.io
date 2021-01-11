import React, { Component} from 'react';

class Images extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl:"",
            imageUrlArray:[
                
            ],
            showModal:false,
            popImageUrl:""
        }
    }
    render(){
        return(
            <div className="Images">
                    Photo
            </div>
        );
    }
    

}

export default Images;