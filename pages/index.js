import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'
import FeatureCard1 from '../components/feature-card1'
import FeatureCard2 from '../components/feature-card2'
import Component4 from '../components/component4'
import Component5 from '../components/component5'
import Component1 from '../components/component1'
import Component2 from '../components/component2'
import Component3 from '../components/component3'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Gamerzclub</title>
          <meta property="og:title" content="Gamerzclub" />
        </Head>
        <div className="home-header">
          <header
            data-thq="thq-navbar"
            className="home-navbar-interactive navbarContainer"
          >
            <div className="home-container01">
              <img
                alt="image"
                src="/external/Gamerzclubnew.png"
                className="home-image"
              />
            </div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <a href="#Home" className="home-nav12 bodySmall">
                  Home
                </a>
                <a href="#Feature" className="home-nav2 bodySmall">
                  Features
                </a>
                <a href="#ComingSoon" className="home-nav3 bodySmall">
                  Coming Soon
                </a>
                <a href="#FAQ" className="home-nav4 bodySmall">
                  FAQ
                </a>
              </nav>
              <a
                href="https://drive.google.com/uc?export=download&amp;id=1CGcBnhqar2sYqkjkFv8wOJwX36RYEsjl"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-buttons">
                  <button className="home-register buttonFilled">
                    Download App
                  </button>
                </div>
              </a>
            </div>
            <div className="home-container02">
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="home-mobile-menu1 mobileMenu"
            >
              <div className="home-nav">
                <div className="home-top">
                  <img
                    alt="image"
                    src="/external/Gamerzclubnew.png"
                    className="home-image01"
                  />
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="home-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <a href="#Home" className="home-home bodySmall">
                    Home
                  </a>
                  <a href="#Feature" className="home-nav21 bodySmall">
                    Features
                  </a>
                  <a href="#ComingSoon" className="home-nav31 bodySmall">
                    Coming Soon
                  </a>
                  <a href="#FAQ" className="home-nav41 bodySmall">
                    FAQ
                  </a>
                  <span className="home-nav5 bodySmall">Contact</span>
                </nav>
                <div className="home-buttons1">
                  <a
                    href="https://drive.google.com/uc?export=download&amp;id=1CGcBnhqar2sYqkjkFv8wOJwX36RYEsjl"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-register1 buttonFilled"
                  >
                    Download App
                  </a>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div id="Home" className="home-hero1 heroContainer">
            <div className="home-container03">
              <h1 className="home-hero-heading"># Rise to the challenge</h1>
              <h3 className="home-text">
                Turn your passion for gaming into mastery
              </h3>
              <a
                href="https://drive.google.com/uc?export=download&amp;id=1CGcBnhqar2sYqkjkFv8wOJwX36RYEsjl"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container04">
                  <div className="home-btn-group">
                    <button
                      type="reset"
                      className="home-hero-button1 buttonFilled"
                    >
                      Download App
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="featuresContainer">
            <div id="Feature" className="home-features1">
              <div className="home-container05">
                <span className="home-text01 overline">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  Join the Ultimate Gaming Experience
                </h2>
              </div>
              <div className="home-container06">
                <FeatureCard
                  heading="Paid Contests"
                  subHeading="Participate in paid contests for BGMI, Freefire, and Call of Duty"
                ></FeatureCard>
                <FeatureCard
                  heading="Exciting Prizes"
                  subHeading="Stand a chance to win exciting prizes in every contest"
                ></FeatureCard>
                <FeatureCard
                  heading="Fair Gameplay"
                  subHeading="Enjoy fair gameplay with strict anti-cheat measures"
                ></FeatureCard>
                <FeatureCard
                  heading="Real-Time Leaderboards"
                  subHeading="Track your progress and compete with other players on real-time leaderboards"
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-features2">
          <div className="featuresContainer">
            <div id="Refer" className="home-features3">
              <div className="home-container07">
                <span className="home-text04 overline">
                  <span>Refer a Friend</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/title-shape-200h.png"
                  className="home-image02"
                />
                <h2 className="home-features-heading1 heading2">
                  Refer your friends and earn real money daily
                </h2>
              </div>
              <div className="home-container08">
                <img
                  alt="image"
                  src="/external/refer_a_friend__3_-removebg-preview-600h.png"
                  className="home-image03"
                />
                <div className="home-container09">
                  <FeatureCard1></FeatureCard1>
                  <FeatureCard2></FeatureCard2>
                  <a
                    href="https://drive.google.com/uc?export=download&amp;id=1CGcBnhqar2sYqkjkFv8wOJwX36RYEsjl"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <div className="home-btn-group1">
                      <button
                        type="reset"
                        className="home-hero-button11 buttonFilled"
                      >
                        Download App
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ComingSoon" className="home-coming-soon">
          <div className="home-coming-soon1 pricingContainer">
            <div className="home-container10">
              <h2 className="home-pricing-heading heading2">Coming Soon</h2>
            </div>
            <span className="home-text07 overline">
              <span>
                THe team at gamigo is developing exactly what gamers need
              </span>
              <br></br>
            </span>
            <div className="home-container11">
              <div className="home-container12">
                <div className="home-container13">
                  <div className="home-container14">
                    <span className="home-text10">Jobs</span>
                    <span className="home-text11">
                      Discover job and opportunities in esports gaming
                    </span>
                  </div>
                  <img
                    alt="image"
                    src="/external/gamer-200h.png"
                    loading="eager"
                    className="home-image04"
                  />
                </div>
                <div className="home-container15">
                  <div className="home-container16">
                    <span className="home-text12">Gameplay</span>
                    <span className="home-text13">
                      Feature your gaming content, short videos and many more
                    </span>
                  </div>
                  <img
                    alt="image"
                    src="/external/game-console-200h.png"
                    className="home-image05"
                  />
                </div>
                <div className="home-container17">
                  <div className="home-container18">
                    <span className="home-text14">Gaming Profile</span>
                    <span className="home-text15">
                      <span>Create custom profiles, </span>
                      <span>Earn your gaming rank</span>
                      <br></br>
                    </span>
                  </div>
                  <img
                    alt="image"
                    src="/external/man-200h.png"
                    className="home-image06"
                  />
                </div>
              </div>
              <div className="home-container19">
                <img
                  alt="image"
                  src="/external/screenshot%202024-02-01%20161431-portrait-300w.png"
                  className="home-image07"
                />
              </div>
              <div className="home-container20">
                <div className="home-container21">
                  <div className="home-container22">
                    <span className="home-text19">Shop</span>
                    <span className="home-text20">
                      Earn Coins and Redeem for the coolest gaming gear
                    </span>
                  </div>
                  <img
                    alt="image"
                    src="/external/game-200h.png"
                    className="home-image08"
                  />
                </div>
                <div className="home-container23">
                  <div className="home-container24">
                    <span className="home-text21">Video &amp; Voice Calls</span>
                    <span className="home-text22">
                      Connect with your friends, fans &amp; followers directly
                    </span>
                  </div>
                  <img
                    alt="image"
                    src="/external/online-gaming-200h.png"
                    className="home-image09"
                  />
                </div>
                <div className="home-container25">
                  <div className="home-container26">
                    <span className="home-text23">Groups</span>
                    <span className="home-text24">
                      <span>
                        Join Groups, Create your team and Learn from Pro Gamers
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <img
                    alt="image"
                    src="/external/team-200h.png"
                    className="home-image10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="bannerContainer home-banner1">
            <h1 className="home-banner-heading heading2">
              Compete and Win Exciting Prizes
            </h1>
            <a
              href="https://drive.google.com/uc?export=download&amp;id=1CGcBnhqar2sYqkjkFv8wOJwX36RYEsjl"
              target="_blank"
              rel="noreferrer noopener"
              className="home-banner-button buttonFilled"
            >
              Download App
            </a>
          </div>
        </div>
        <div id="FAQ" className="home-faq">
          <div className="faqContainer">
            <div className="home-faq1">
              <div className="home-container27">
                <span className="overline">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text30 heading2">Common questions</h2>
                <span className="home-text31 bodyLarge">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container28">
                <Component4></Component4>
                <Component5></Component5>
                <Component1></Component1>
                <Component2></Component2>
                <Component3></Component3>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="footerContainer home-footer1">
            <img
              alt="image"
              src="/external/Gamerzclubnew.png"
              className="home-image11"
            />
            <div className="home-container29">
              <nav className="home-nav1 home-nav1 bodySmall">
                <a href="#Home">Home</a>
                <a href="#Feature" className="home-nav22 bodySmall">
                  Features
                </a>
                <a href="#ComingSoon" className="home-nav32 bodySmall">
                  Coming Soon
                </a>
                <a href="#FAQ" className="home-nav42 bodySmall">
                  FAQ
                </a>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container30">
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon14 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar-interactive {
            padding-left: TwoUnits;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-image {
            width: 243px;
            height: 78px;
            object-fit: contain;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav12 {
            color: #ffffff;
            transition: 0.3s;
            text-decoration: none;
          }
          .home-nav2 {
            color: #ffffff;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav3 {
            color: #ffffff;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav4 {
            color: #ffffff;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link {
            display: contents;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
          }
          .home-register {
            color: var(--dl-color-gray-white);
            background-color: rgb(255, 87, 34);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image01 {
            width: 200px;
            object-fit: contain;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-home {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav21 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav31 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav41 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-register1 {
            text-decoration: none;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 96px;
            align-items: flex-start;
            justify-content: center;
            background-blend-mode: lighten;
          }
          .home-hero1 {
            height: 682px;
            padding-top: 52px;
            padding-bottom: 36px;
            background-size: cover;
            background-color: transparent;
            background-image: url('/external/retro-sci-fi-background-futuristic-grid-landscape-of-the-1980-background-v_1508390jpg!sw800-1500w.jpg');
            background-repeat: no-repeat;
          }
          .home-container03 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: #ffffff;
            max-width: 800px;
            text-align: center;
          }
          .home-text {
            color: #ffffff;
            font-size: 21ox;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-link1 {
            display: contents;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            text-decoration: none;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero-button1 {
            color: var(--dl-color-gray-white);
            background-color: rgb(255, 87, 34);
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/external/pngtree-game-volcano-advertising-background-backgroundblack-backgroundlight-spotstar-image_72467-200h.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-blend-mode: lighten;
          }
          .home-container05 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text01 {
            font-size: 20px;
          }
          .home-features-heading {
            font-size: 50px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container06 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: 1fr 1fr;
          }
          .home-features2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            background-blend-mode: lighten;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text04 {
            font-size: 20px;
          }
          .home-image02 {
            width: var(--dl-size-size-xlarge);
            height: 19px;
            object-fit: cover;
          }
          .home-features-heading1 {
            font-size: 50px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container08 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .home-image03 {
            width: 478px;
            height: 511px;
            object-fit: contain;
          }
          .home-container09 {
            width: 475px;
            display: flex;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            grid-template-columns: 1fr 1fr;
          }
          .home-link2 {
            display: contents;
          }
          .home-btn-group1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-hero-button11 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xlarge);
            border-radius: var(--dl-radius-radius-radius4);
            background-color: rgb(255, 87, 34);
          }
          .home-coming-soon {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-coming-soon1 {
            height: 749px;
            background-size: auto;
            background-color: transparent;
            background-image: url('/external/5297078-1800h.jpg');
            background-blend-mode: normal;
          }
          .home-container10 {
            gap: var(--dl-space-space-unit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pricing-heading {
            color: var(--dl-color-gray-white);
            font-size: 60px;
          }
          .home-text07 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
          }
          .home-container11 {
            gap: var(--dl-space-space-sixunits);
            width: 1071px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container12 {
            gap: var(--dl-space-space-twounits);
            width: 323px;
            height: 372px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container13 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 208px;
            height: 100px;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text10 {
            color: #ff5722;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text11 {
            color: var(--dl-color-gray-white);
            font-size: 17px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            letter-spacing: 1.4px;
          }
          .home-image04 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .home-container15 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 208px;
            height: 100px;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text12 {
            color: rgb(255, 87, 34);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text13 {
            color: var(--dl-color-gray-white);
            font-size: 16.5px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            letter-spacing: 1.4px;
          }
          .home-image05 {
            width: auto;
            height: 100px;
            object-fit: cover;
          }
          .home-container17 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 208px;
            height: 100px;
            display: flex;
            position: relative;
            align-items: flex-end;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            color: rgb(255, 87, 34);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text15 {
            color: var(--dl-color-gray-white);
            font-size: 17px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            letter-spacing: 1.4px;
          }
          .home-image06 {
            width: auto;
            height: 100px;
            object-fit: cover;
          }
          .home-container19 {
            width: 231px;
            height: 372px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image07 {
            flex: 1;
            width: 100%;
            height: 349px;
            align-self: flex-start;
            object-fit: contain;
          }
          .home-container20 {
            gap: var(--dl-space-space-twounits);
            width: 323px;
            height: 372px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container21 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 208px;
            height: 100px;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text19 {
            color: rgb(255, 87, 34);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text20 {
            color: var(--dl-color-gray-white);
            font-size: 17px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            letter-spacing: 1.4px;
          }
          .home-image08 {
            width: auto;
            height: 100px;
            object-fit: cover;
          }
          .home-container23 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 208px;
            height: 100px;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text21 {
            color: rgb(255, 87, 34);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text22 {
            color: var(--dl-color-gray-white);
            font-size: 17px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            letter-spacing: 1.4px;
          }
          .home-image09 {
            width: auto;
            height: 100px;
            object-fit: cover;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container25 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container26 {
            flex: 0 0 auto;
            width: 208px;
            height: 100px;
            display: flex;
            position: relative;
            align-items: flex-end;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text23 {
            color: rgb(255, 87, 34);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text24 {
            color: var(--dl-color-gray-white);
            font-size: 17px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            letter-spacing: 1.4px;
          }
          .home-image10 {
            width: auto;
            height: 100px;
            object-fit: cover;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-banner-button {
            color: var(--dl-color-gray-white);
            text-decoration: none;
            background-color: #ff5722;
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container27 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text30 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text31 {
            text-align: left;
          }
          .home-container28 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-image11 {
            width: 200px;
            object-fit: contain;
          }
          .home-container29 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav1 {
            color: var(--dl-color-gray-white);
            margin-left: 0px;
            text-decoration: none;
          }
          .home-nav22 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav32 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav42 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-hero1 {
              height: 597px;
              flex-direction: column;
            }
            .home-container03 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-features-heading1 {
              text-align: center;
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-coming-soon1 {
              height: 1124px;
            }
            .home-container10 {
              width: auto;
            }
            .home-container11 {
              width: auto;
            }
            .home-container12 {
              width: 318px;
            }
            .home-text31 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-home {
              color: var(--dl-color-custom-neutral-light);
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav21 {
              color: var(--dl-color-custom-neutral-light);
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav31 {
              color: var(--dl-color-custom-neutral-light);
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav41 {
              color: var(--dl-color-custom-neutral-light);
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav5 {
              color: var(--dl-color-custom-neutral-light);
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-register1 {
              background-color: #ff5722;
            }
            .home-hero1 {
              height: 539px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-heading {
              text-align: center;
            }
            .home-container06 {
              grid-template-columns: 1fr;
            }
            .home-features3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-heading1 {
              text-align: center;
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-container09 {
              grid-template-columns: 1fr;
            }
            .home-coming-soon1 {
              height: 1783px;
            }
            .home-container10 {
              width: auto;
            }
            .home-container11 {
              width: 559px;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-faq1 {
              flex-direction: column;
            }
            .home-container27 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text31 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container30 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .home-image {
              width: 165px;
            }
            .home-mobile-menu1 {
              padding: 16px;
            }
            .home-image01 {
              width: 157px;
              height: 64px;
            }
            .home-home {
              color: var(--dl-color-gray-white);
            }
            .home-nav21 {
              color: var(--dl-color-gray-white);
            }
            .home-nav31 {
              color: var(--dl-color-gray-white);
            }
            .home-nav41 {
              color: var(--dl-color-gray-white);
            }
            .home-nav5 {
              color: var(--dl-color-gray-white);
            }
            .home-register1 {
              background-color: rgb(255, 87, 34);
            }
            .home-hero1 {
              height: 389px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              background-image: url('/external/retro-sci-fi-background-futuristic-grid-landscape-of-the-1980-background-v_1508390jpg!sw800-1500w.jpg');
              background-position: bottom;
            }
            .home-container03 {
              height: 50%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero-heading {
              color: rgb(255, 255, 255);
              width: 271px;
              font-size: x-large;
            }
            .home-text {
              color: rgb(255, 255, 255);
              font-size: 21px;
              font-style: normal;
              text-align: center;
              font-weight: 600;
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-features-heading {
              text-align: center;
            }
            .home-features3 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-features-heading1 {
              text-align: center;
            }
            .home-container08 {
              width: 100%;
              flex-direction: column;
            }
            .home-image03 {
              width: 100%;
            }
            .home-container09 {
              width: 100%;
            }
            .home-btn-group1 {
              flex-direction: column;
            }
            .home-coming-soon1 {
              width: 100%;
              height: 1676px;
              max-width: var(--dl-size-size-maxwidth);
            }
            .home-container10 {
              width: 100%;
              height: auto;
              padding-bottom: 0px;
            }
            .home-pricing-heading {
              text-align: center;
            }
            .home-text07 {
              text-align: center;
            }
            .home-container11 {
              gap: HalfUnit;
              width: auto;
              height: 1299px;
              padding-top: 4px;
              flex-direction: column;
            }
            .home-container12 {
              gap: var(--dl-space-space-twounits);
              height: 359px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text30 {
              text-align: center;
            }
            .home-text31 {
              text-align: center;
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-image11 {
              height: 103px;
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container30 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
