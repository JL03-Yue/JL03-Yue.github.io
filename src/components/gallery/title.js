import React, { Component} from 'react';
import styles from "./gallery.module.scss"

class Title extends Component{
    render(){
        return(
            <div className={styles.title}>
                
                <b>Gallery</b>
            </div>
        );
    }

}



export default Title;