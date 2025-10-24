import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link, Route, withRouter } from 'react-router-dom'
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'
import AboutPage from './aboutpage'
import PhotoPage from './photopage'

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/"><div className={styles.boxleft}><b>Home</b></div></Link>

            <div className={styles.boxright}>
              <a href={require('../assets/Qingyang_Annie_Li_Resume_SWE.docx.pdf')}><p><b>Resume</b></p></a>
              <Link to="/works" ><p className={location.pathname === "/works" ? styles.selected : null}><b>Work Experience</b></p></Link>
              <Link to="/photo_gallery" ><p className={location.pathname === "/photo_gallery" ? styles.selected : null}><b>Gallery</b></p></Link>
            </div>
          </div>
        </header>

        <section className={styles.content}>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/works' exact component={WorkPage} />
          <Route path='/photo_gallery' exact component={PhotoPage} />
          <Route path='/works/:id' exact component={WorkPageDetail} />
        </section>

        <footer className={styles.footer}>
          <p>© Updated 2025 by Annie Li</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
