import React, { Component} from 'react';
import WorkList from '../../components/WorkList';
import styles from './home.module.scss'
import worksData from '../WorkPageDetail/works.json'
import half from '../../assets/images/half2.jpg'

export default ()=>{
    return <div className={styles.wrap}>
        {/*个人简介 */}
        <section className = {styles.brief}>
            <img src={half}/>
            <h2>Annie Li</h2>
            <ul>
                <li>
                    Cognitive Science Major
                </li>
                <li>
                Research Assistant Intern
                </li>
                <li>
                Love to dance
                </li>
            </ul>
            <p>Hi! Nice to meet you!</p>
            
        </section>

        {/*作品 */}
        <section className={styles.work}>
            <div  className={styles.title}>
                <h3>A Selection of Work</h3>
                <p>You can find more in the work overview.</p>
                
            </div>
            <WorkList dataSource = {worksData.data}/>

        </section>





    </div>
}