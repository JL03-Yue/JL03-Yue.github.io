import React, { Component} from 'react';
import styles from '../WorkPage/works.module.scss'
import WorkLists from '../../components/WorkList'
import datas from '../WorkPageDetail/works.json'

export default ()=>{
    return <div className ={styles.wrap}>
        <div  className={styles.title}>
                <h3><b>Work Experience</b></h3>
            </div>
        <WorkLists dataSource = {datas.data}/>


    </div>
}