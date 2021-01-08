import React, { Component} from 'react';
import styles from './about.module.scss';
import left from '../../assets/images/left1.jpg';
import Hobbies from '../../components/hobbies';
import datas from './hobby.json';
import Masthead from '../../components/masthead'

export default ()=>{
    return <div className ={styles.wrap}>

        <div  className={styles.title}>
                <h3>A Little About Me...</h3>
                
        </div>

        {/*照片 */}
        <section className = {styles.photo}>
            <div className={styles.sqr}>
                  <img className={styles.left} src={left } />
                  <h3>Annie Li</h3>  
                <Masthead/>

            </div>

        </section>

        {/**文字 */}
        <section className={styles.intro}>
            <div className={styles.words}>
                <div className={styles.brief}>
                <h5><b>Intro</b></h5>
                <p>Hi! I am a sophomore at the University of California, Los Angeles (UCLA)
                     majoring in B.S. Cognitive Science. I love data, web development, and dancing!</p>
                </div>


                <h5><b>I like...</b></h5>
         
                <Hobbies dataSource = {datas.data}/>


                
                ​<ul>
                <li>Dancing (Undoubtly No.1)</li>
                <li> Hiking   </li>
                <li>Ice-cream    </li>
                <li>Books    </li>
                <li>Sleeping     </li>
                <li>Summer   </li>
                <li> Science fictions   </li>
                <li>and puzzles!    </li>                 
                </ul>

                <h5><b>Travel</b></h5>

                <ul>
                <li>I am from originally from Beijing, China. My hometown is in Inner Mongolia.</li>

                <li>I've been to 3 continents, ~20 countries, and many cities, many of which I would like to revisit.</li>

                <li>I miss the grassland and horses in Inner Mogonlia, the night market in Taipei, the pandas and hotpots in Chengdu...</li>
                <li>I also miss Japan, France, the U.K., Switzerland, and more...</li>

                </ul>
                <h5><b>I dream of...</b></h5>

                <ul>
                <li>Going to Harry Potter World</li>
                <li>Finding an internship in the summer</li>
                <li>Procrastinating less</li>
                <li>Graduating on time</li>

                </ul>

                <br/><p>Feel free to explore my different pages!</p>


            </div>


        </section>

    </div>
}