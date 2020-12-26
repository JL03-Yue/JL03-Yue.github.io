import React, { Component} from 'react';
import WorkList from '../../components/WorkList';
import styles from './home.module.scss'
import worksData from '../WorkPageDetail/works.json'


export default ()=>{
    return <div className={styles.wrap}>
        {/*个人简介 */}
        <section className = {styles.brief}>
            <img src="https://github.com/JL03-Yue/JL03-Yue.github.io/blob/master/half.jpg"/>
            <h2>Annie Li</h2>
            <ul>
                <li>
                    Love to dance
                </li>
                <li>
                    Eat
                </li>
                <li>
                    Sleep
                </li>
            </ul>
            <p>sentence 1</p>
            <p>sentence 2</p>
            <p>sentence 3</p>
        </section>

        {/*作品 */}
        <section className={styles.work}>
            <div  className={styles.title}>
                <h3>my work</h3>
                <p>a list of my work</p>
                
            </div>
            <WorkList dataSource = {worksData.data}/>

        </section>





    </div>
}