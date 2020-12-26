import React, { Component} from 'react';
import styles from '../WorkPage/works.module.scss'
import WorkLists from '../../components/WorkList'
import datas from '../WorkPageDetail/works.json'

export default ()=>{
    return <div className ={styles.wrap}>
        <div  className={styles.title}>
                <h3>my work</h3>
                <p>a collection of my work</p>
                
            </div>
        <WorkLists dataSource = {datas.data}/>


    </div>
}