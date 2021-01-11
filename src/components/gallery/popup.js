import React, { Component} from 'react';
import styles from "./gallery.module.scss"

class Pop extends Component{
    render(){
        return(
            <div className={styles.popupParent}>
                <div className={styles.popupImage}>
                    <button 
                    className={styles.imageClosingButton} 
                    onClick={this.props.closePopup}
                    >
                            x
                    </button>

                    <img src={this.props.popImageUrl}/>
                </div>

            </div>
        );
    }
}

export default Pop;