import React from 'react';


import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';


const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'skills', name: 'Skills', icon: 'fa-superpowers' },
  { id: 'portfolio', name: 'Projects', icon: 'fa-code-fork'},
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Timothy</strong>
              <br />
              Software Developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="four">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            Developers football competition in diameter big price to layer the
            pot. Chavez ultricies care who wants to CNN. Lobortis elementum
            aliquet eget a den of which they do not hold it in hatred developers
            nor the mountains of the deposit slip. The element of time, sem ante
            ullamcorper dolor nulla quam placerat viverra environment is not
            with our customers. Free makeup and skirt until the mouse or
            partners or to decorate each targeted.
          </p>
        </div>
      </section>

      <section id="skills" className="two">
        <div className="container">
          <div className="col-4 col-12-mobile">
          <header>
            <h2>Skills</h2>
          </header>
          <div className="first-half-icons">
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-jquery-plain-wordmark colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
          </div>
          <div className="second-half-icons">
            <i className="devicon-express-original-wordmark colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-postgresql-plain-wordmark colored"></i>
            <i className="devicon-python-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-github-plain-wordmark colored"></i>
          </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="three">
        <div className="container">
          <header>
            <h2>Projects</h2>
          </header>

          <p>
            {/* Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior. */}
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://kimtimmy93.github.io/whackamole/" target="_blank" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Whack-A-Mole</h3>
                  <p>Web application based on the all-time classic arcade game of Whack-A-Mole built in JavaScript</p>
                </header>
              </article>

              <article className="item">
                <a href="/#" target="_blank" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>MIXR</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://localhost0003.herokuapp.com/" target="_blank" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Magna Nullam</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" target="_blank" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Natoque Vitae</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="mailto:timhkim0623@gmail.com">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
