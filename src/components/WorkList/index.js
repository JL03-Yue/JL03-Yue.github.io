import React, { Component} from 'react';
import styles from './work.module.scss'
import {Link} from 'react-router-dom'

export default ({dataSource})=>{
    return <div className={styles.worklist}>
       <ul>
           {
               dataSource && dataSource.map(item=>
                <li key={item.id}>
                    <Link to={`/works/${item.id}`}>
                        <div className = {styles.cover}>
                            <img src={item.cover} alt={item.title}/>
                        </div>

                        <div className = {styles.workbrief}>
                            <h3>{item.title}</h3>
                            
                            <div className={styles.role}>{item.role}</div>
                            
                            <div className={styles.metadata}>
                                <span className={styles.dates}>{item.dates}</span>
                                <span className={styles.location}>{item.location}</span>
                            </div>

                            <p className={styles.description}>{item.brief}</p>
                        </div>
                    </Link>
                </li>
                )
           }
       </ul>
    </div>
}