import React, { Component} from 'react';
import styles from './masthead.module.scss'
import {Link} from 'react-router-dom'

export default ()=>{
    return <div className={styles.masthead}>
       <a href="https://www.linkedin.com/in/annie-l-774a17191/">
         <img alt="Linkedin" src="https://cdn2.iconfinder.com/data/icons/free-social-media-16/24/LinkedIn-256.png"/>
      </a>

      <a href="https://www.facebook.com/aqy.li.18659/">
         <img alt="Facebook" src="https://cdn2.iconfinder.com/data/icons/free-social-media-16/24/Facebook-256.png"/>
      </a>

      <a href="https://github.com/JL03-Yue/">
         <img alt="Github" src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/29-256.png"/>
      </a>



    </div>
}