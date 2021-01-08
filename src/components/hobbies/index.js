import React, { Component} from 'react';
import styles from './hobby.module.scss'
import {Link} from 'react-router-dom'

export default ({dataSource})=>{
    return <div className={styles.hobbylist}>
       <ul>
           {
               dataSource && dataSource.map(item=>
                <li>
                    <Link to={'/works/${item.id}'}>
                        <div className = {styles.cover}>
                            <img src={item.cover}/>
                        </div>
                        {/*
                        <div className = {styles.title}>
                            <p>
                                {item.title}
                            </p>
                            
                        </div>  
                        */}        
                    </Link>
                </li>
                )
           }
       </ul>
    



    </div>
}