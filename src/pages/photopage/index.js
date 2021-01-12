import React, { Component} from 'react';
import styles from '../photopage/photo.module.scss'
import Images from '../../components/gallery/index'
import Title from '../../components/gallery/title'

export default ()=>{
    
    return <div className={styles.wrap}>
        <Title/>
       <Images/>
    </div> 
    
    

}
