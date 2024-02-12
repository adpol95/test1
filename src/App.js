import './App.css';
import chainVar from './refrs/aed6500f4da41c641f3de5d96247eb6654e9c386.png';
import team from './refrs/91588b3d042df901d9b941ccbb57af4f151401c7.png';
import puzzle from './refrs/50d0db451c0e1e66e1caddd142986fcf6792ca05.png';
import dollar from './refrs/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png';
import key from './refrs/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png';
import message from './refrs/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png';
import searching from './refrs/search-icon-png-21.png';
import questionMark from './refrs/question-mark-regular-192.png';
import {useState} from "react";

function App() {
  const [burgerState, setBurgerState] = useState(true);
  const [searchingState, setSearchingState] = useState(true);

  return (
    <div className="App">
      <header className={burgerState ? "header1" : "header1Inactive"}>
        <div className="leftSection">
          <div className="logoHead">
            <img
              src="https://theme.zdassets.com/theme_assets/2197739/df1f3a3595ad6f2e809942c0cbfa85f84156dd61.svg"
              alt="logo"/>
          </div>
          <div className="dividerLogoWText">
            I
          </div>
          <div className="textLogoHeadBlock">
            <a href="https://help.abstract.com/hc/en-us" className="textLogoHead">
              Help Center
            </a>
          </div>
        </div>

        <div className="rightSectionFull">
          <div className="blockLeftBut">
            <button className="leftBut">
              Submit a request
            </button>
          </div>
          <div className="blockRightBut">
            <button className="rightBut">
              Sign in
            </button>
          </div>
        </div>
        <div className="rightSectionPart">
          <div>
            <div className="searchingIconTop" onClick={() => setSearchingState(!searchingState)}>
              <img src={searching} alt="searching"/>
            </div>
          </div>
          <div className="burgerZone" onClick={() => setBurgerState(!burgerState)}>
                    <span className={burgerState ? "log1-1" : "log1-2"}>

                    </span>
            <span className={burgerState ? "log2-1" : "log2-2"}>

                    </span>
            <span className={burgerState ? "log3-1" : "log3-2"}>
                    </span>
          </div>
        </div>
        <div className={searchingState ? "searchingHeaderOff" : "searchingHeaderOn"}>
          <input type="text" placeholder="Search"/>
          <div className="crossMain" onClick={() => setSearchingState(!searchingState)}>
            <div className="cross1">

            </div>
            <div className="cross2">

            </div>
          </div>
        </div>
        <div className={burgerState ? "header2Inactive" : "header2"}>
          <div className="adderHeadTopText">
            Submit a request
          </div>
          <div className="adderHeadBottomText">
            Sign in
          </div>
        </div>
      </header>
      <main>
        <section className="searchingArea">
          <div className="descSearchText">
            How can we help?
          </div>
          <div className="mainSearchingBar">
            <input type="text" placeholder="Search"/>
            <img alt="arrow-right" className="rightArrowSearchBar"/>
          </div>
        </section>
        <section className="navArea">
          <div className="variationsHelp">
            <div className="varImgOverall">
              <img src={chainVar} alt="chain"/>
            </div>
            <div className="textOfHelp">
              <p className="mainName">
                Using Abstract
              </p>
              <p className="descriptionOfHelp">
                Abstract lets you manage, version, and document your designs in one place.
              </p>
              <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract">
                Learn More →
              </a>
            </div>
          </div>
          <div className="variationsHelp">
            <div className="varImgOverall">
              <img src={team} alt="team"/>
            </div>
            <div className="textOfHelp">
              <p className="mainName">
                Manage your account
              </p>
              <p className="descriptionOfHelp">
                Configure your account setting, such as your email, profile details, password.
              </p>
              <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract">
                Learn More →
              </a>
            </div>
          </div>
          <div className="variationsHelp">
            <div className="varImgOverall">
              <img src={puzzle} alt="puzzle"/>
            </div>
            <div className="textOfHelp">
              <p className="mainName">
                Manage organizations, teams, and products
              </p>
              <p className="descriptionOfHelp">
                Use Abstract organizations, teams and projects to organize your people and your work.
              </p>
              <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract">
                Learn More →
              </a>
            </div>
          </div>
          <div className="variationsHelp">
            <div className="varImgOverall">
              <img src={dollar} alt="dollar"/>
            </div>
            <div className="textOfHelp">
              <p className="mainName">
                Manage bills
              </p>
              <p className="descriptionOfHelp">
                Change subscriptions and payment details.
              </p>
              <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract">
                Learn More →
              </a>
            </div>
          </div>
          <div className="variationsHelp">
            <div className="varImgOverall">
              <img src={key} alt="key"/>
            </div>
            <div className="textOfHelp">
              <p className="mainName">
                Authenticate to Abstract
              </p>
              <p className="descriptionOfHelp">
                Set up and configure SSO, SCIM. and Just-In-Time provisioning.
              </p>
              <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract">
                Learn More →
              </a>
            </div>
          </div>
          <div className="variationsHelp">
            <div className="varImgOverall">
              <img src={message} alt="message"/>
            </div>
            <div className="textOfHelp">
              <p className="mainName">
                Abstract support
              </p>
              <p className="descriptionOfHelp">
                Get in touch with a human.
              </p>
              <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract">
                Learn More →
              </a>
            </div>
          </div>
        </section>

      </main>
      <footer>
        <div className="firstGroupFoot">
          <p className="topicName">
            Abstract
          </p>
          <a href="http://localhost:3000/">
            Start Trial
          </a>
          <a href="http://localhost:3000/">
            Pricing
          </a>
          <a href="http://localhost:3000/">
            Download
          </a>
        </div>
        <div className="firstGroupFoot">
          <p className="topicName">
            Resources
          </p>
          <a href="http://localhost:3000/">
            Blog
          </a>
          <a href="http://localhost:3000/">
            Help Center
          </a>
          <a href="http://localhost:3000/">
            Release Notes
          </a>
          <a href="http://localhost:3000/">
            Status
          </a>
        </div>
        <div className="firstGroupFoot">
          <p className="topicName">
            Community
          </p>
          <a href="http://localhost:3000/">
            Twitter
          </a>
          <a href="http://localhost:3000/">
            Linkedin
          </a>
          <a href="http://localhost:3000/">
            Facebook
          </a>
          <a href="http://localhost:3000/">
            Dribbble
          </a>
          <a href="http://localhost:3000/">
            Podcast
          </a>
        </div>
        <div className="firstGroupFoot">
          <p className="topicName">
            Company
          </p>
          <a href="http://localhost:3000/">
            About Us
          </a>
          <a href="http://localhost:3000/">
            Careers
          </a>
          <a href="http://localhost:3000/">
            Legal
          </a>
          <b>
            Contact Us
          </b>

          <a href="http://localhost:3000/">
            info@abstract.com
          </a>
        </div>
        <div className="containerSecGrFt">
          <div className="secondGroupFoot">
            <img
              src="https://theme.zdassets.com/theme_assets/2197739/df1f3a3595ad6f2e809942c0cbfa85f84156dd61.svg"
              alt="logo"/>
            <div>
              {"©"} Copyright 2022
            </div>
            <div>
              Abstract Studio Design, Inc.
            </div>
            <div>
              All rights reserved
            </div>
          </div>
        </div>
      </footer>
      <div className="helperIcon">
        <div className="circleHelp">
          <div className="circleHelp2">
            <img src={questionMark} alt=""/>
          </div>
        </div>
        <div className="textHelp">
          Help
        </div>
      </div>
    </div>
  );
}

export default App;
