import React, { Component} from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route, withRouter} from 'react-router-dom'
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'
import WorkLists from '../components/WorkList'



class App extends Component {
  render(){
    const{location} = this.props;{/*获取当前路径 */}
    console.log(location.pathname);

    return(
      <div className={styles.App}>
      
        {/*头部 */}
        <header className={styles.header}>
        <div  className={styles.box}>
            <Link to="/"><div className={styles.boxleft}>Lab</div></Link> {/*/是首页导航 */}
            <div className={styles.boxright}>
              <Link to="/" ><p className={location.pathname==="/"?styles.selected:null}>HOME</p></Link>
              <Link to="/works" ><p className={location.pathname==="/works"?styles.selected:null}>WORKS</p></Link>
            </div>

          </div>

        </header>


        {/*内容 */}
        <section className={styles.content}>
          <Route path = '/' exact component = {HomePage}/>
          <Route path = '/works' exact component = {WorkPage}/>
          <Route path = '/works/:id' exact component = {WorkPageDetail}/>

        </section>


        {/*底部 */}
      <footer className={styles.footer}>
        <p>©<b>2020 Annie Li</b></p>
        <p>Handmade with</p>


      </footer>
      </div>
    );
  }  
}

export default withRouter(App); {/*withrouter返回当前路径*/}
