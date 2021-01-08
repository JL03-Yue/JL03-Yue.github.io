import React, { Component} from 'react';
import WorkList from '../../components/WorkList';
import styles from './home.module.scss'
import worksData from '../WorkPageDetail/works.json'
import half from '../../assets/images/half2.jpg'
import Masthead from '../../components/masthead'

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

        {/*链接 */}
        <section className={styles.masthead}>
            
            <Masthead/>

        </section>


         {/**关于我 */}
         <section className={styles.about}>
            <div className={styles.title}>
                <h3>About Me</h3>
            </div>
            <p>Hi! I am a sophomore at the University of California, Los Angeles (UCLA)
                     majoring in B.S. Cognitive Science. </p>
            <p>I love data, web development, and dancing!</p>
            
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