import React, { Component} from 'react';
import WorkList from '../../components/WorkList';
import styles from './home.module.scss'
import worksData from '../WorkPageDetail/works.json'
import half from '../../assets/images/half2.jpg'
import head from '../../assets/images/head1.jpg'
import Masthead from '../../components/masthead'

export default ()=>{
    return <div className={styles.wrap}>
        <section className = {styles.brief}>
            <img src={head}/>
            <ul>
            </ul>
            
            
        </section>

       


         <section className={styles.about}>
            <div className={styles.title}>
                <h3> <b>Hi, I'm Annie (Qingyang) Li</b></h3>
            </div>
            <p><b>I am a Software Engineer II at Netflix, working in developer productivity. I'm generally interested in AI agents and developer experience. </b></p>
            <p>Previously, I worked as a Software Engineer at Microsoft in .NET & VSCode and Azure Compute. </p>
            <p>I received B.S. in Computer Science from UCLA with Summa Cum Laude.</p>

            
        </section>

         <section className={styles.masthead}>
            
            <Masthead/>

        </section>
{/* 
        <section className={styles.work}>
            <div  className={styles.title}>
                <h3>A Selection of Work</h3>
                <p>You can find more in the work overview.</p>
                
            </div>
            <WorkList dataSource = {worksData.data}/>

        </section> */}





    </div>
}