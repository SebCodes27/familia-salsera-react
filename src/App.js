import React from 'react';
import './App.css';
import video from './videos/sessions.mp4';
import secrets1 from './videos/secrets1.mp4';
import secrets2 from './videos/secrets2.mp4';
import secrets3 from './videos/secrets3.mp4';
import secrets4 from './videos/secrets4.mp4';
import secrets5 from './videos/secrets5.mp4';
import tesm1 from './videos/tesm1.mp4';
import tesm2 from './videos/tesm2.mp4';
import tesm3 from './videos/tesm3.mp4';
import perks1 from './videos/perks1.mp4';
import perks2 from './videos/perks2.mp4';
import openImage from "./images/openingImg.jpg";
import locImage from "./images/location3.png";
import schImage from "./images/schedule.jpg";
import pImg1 from "./images/perkImage1.jpg";
import pImg2 from "./images/perkImage2.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVal: 0,
      calVal: true
    };
    this.changePage = this.changePage.bind(this);
    this.changePageAboutUs = this.changePageAboutUs.bind(this);
    this.secondNav = this.secondNav.bind(this);
  };
  changePage(val) {
    if (val === 5) {
      this.changePageAboutUs();
      return;
    }
    this.setState({
      mainVal: val
    })
    const x = document.getElementById("mySecondNav");
    if (x.className === "second-nav responsive") {
      x.className = "second-nav";
    }
    window.scrollTo({
      top: 10
    })
  };
  changePageAboutUs() {
    const section = document.getElementById( 'about-us' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  secondNav() {
    const x = document.getElementById("mySecondNav");
    console.log(x)
    if (x.className === "second-nav") {
        x.className += " responsive";
    } else {
        x.className = "second-nav";
    }
  }
  calWidgetFull() {
    let val = !this.state.calVal;
    this.setState({
      calVal: val
    })
  }
  render() {
    let pageNum = this.state.mainVal;
  return (
    <div className="App">
      <body>
        <div>
          <Header functions={[(val) => this.changePage(val), this.secondNav]} calShow={this.state.calVal}/>
          <main>
            { pageNum === 0 ? <Main /> : pageNum === 1 ? <SalsaSecrets /> : pageNum === 2 ? <Schedule /> : pageNum === 3 ? <Testimonials /> : <Perks />}
          </main>
          <Footer />
        </div>
      </body>
    </div>
  );
}}

// HEADER SECTION

const Header = (props) => {
  let changePage = props.functions[0];
  let changePageVal = e => changePage(e.target.value);
  let secondNav = props.functions[1];
  let calShow = props.calShow;
  return (
    <header>
        <h1><a className="title" href="#home">Familia Salsera</a></h1>
        <nav className="myNav" id="myTopNav">
            <ul>
                <Page id='homeNav' title='Home' value='0' changePage={changePageVal}/>
                <Page id='tipsNav' title='Salsa Secrets' value='1' changePage={changePageVal} />
                <Page id='schedNav' title='Class Schedule' value='2' changePage={changePageVal} />
                <Page id='testNav' title='Testimonials' value='3' changePage={changePageVal} />
                <Page id='perkNav' title='Customer Perks' value='4' changePage={changePageVal} />
                <Page id='aboutNav' title='About Us' value='5' changePage={changePageVal} />
            </ul>
        </nav>
        <div className="icon thin-nav" onClick={secondNav}>
            <i className="fa fa-bars"></i>
        </div>
        <div className="second-nav" id="mySecondNav">
          <div className="hidden-nav ex-pad">
            <Page id='homeNav1' title='Home' value='0' changePage={changePageVal}/>
            <Page id='tipsNav1' title='Salsa Secrets' value='1' changePage={changePageVal} />
            <Page id='schedNav1' title='Class Schedule' value='2' changePage={changePageVal} />
            <Page id='testNav1' title='Testimonials' value='3' changePage={changePageVal} />
            <Page id='perkNav1' title='Customer Perks' value='4' changePage={changePageVal} />
            <Page id='aboutNav1' title='About Us' value='5' changePage={changePageVal} />
          </div>
        </div>
        { calShow === true ? <Dummy /> : <calWidget /> }
    </header>
  )
}

const Page = (props) => {
  return (
    <li id={props.id} value={props.value} onClick={props.changePage}>{props.title}</li>
  )
}

// MAIN SECTION

function Dummy() {
  return (
    <div>
    </div>
  )
}

const Main = () => {
  return (
    <div>
      <div className="frame-block">
          <IntroVideo />
      </div>
      <CalendarButton />
      <div className="divider"></div>
      <HomeOne />
      <div className="divider"></div>
      <div className="frame-block medium-text">
          <h2 id="the-perks" className="center large-text">The Perks</h2>
          <Perks1 />
          <Perks2 />
          <Perks3 />
          <Perks4 />
          <Perks5 />
      </div>
      <CalendarButton />
      <Factoid />
      <div className="divider"></div>
      <div className="frame-block medium-text top-padding">
        <Choice />
        <Choice1 />
        <Choice2 />
      </div>
      <div className="divider"></div>
    </div>
  )
}

const CalendarWidget = () => {
  return (
    <div>
      <div className="popupCalendar show" id="myPopup">
        <iframe src="" style={{'border': 'none'}} scrolling="no" id="msgsndr-calendar"></iframe><br /><script src="https://api.leadconnectorhq.com/widget/booking/51s99XpkQ63NwU4eLIwQ" type="text/javascript"></script>
      </div>
      <div className="calFade show" id="calFade"></div>
      <div class="outer-exit show" id="exit-button">
        <div class="inner-exit" type="button" onclick={calWidget}><i class="fa fa-times-circle-o"></i></div>
      </div>
    </div>
  )
}

const IntroVideo = () => {
  return (
    <div id="intro-vid">
      <video controls loop autoPlay muted>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/sessions.vtt" default />
      </video>
    </div>
  )
}

const CalendarButton = () => {
  return (
    <div className="frame-block top-padding">
      <button className="button1" type="button" onClick={calWidget}>Click Here For a Free Class!</button>
    </div>
  )
}

const HomeOne = () => {
  return (
    <div id="six-week-program" className="frame-block medium-text top-padding2">
      <ToSpanish />
      <h2 id="home1" className="no-pad">Familia Salsera</h2>
      <WelcomeWords />
      <OpeningImg />
    </div>
  )
}

const ToSpanish = () => {
  return (
    <button id="langButton" className="langButton" onClick="toSpanish()">En Español</button>
  )
}

const WelcomeWords = () => {
  return (
    <div id="homeA" className="fiftyPerc">
      <h2 className="large-text six-week-program">Become a Salsa Dancer Today!</h2>
      <p>We're looking for 20 people that are serious about learning to Dance Salsa at last!</p>
      <p>We're your local Dance Studio that has transformed hundreds of people just like you and we're eager to serve those who are looking to make 2023 their best year yet.</p>
      <p>Here's what <em>you'd</em> get with our Six Week Salsa Challenge:</p>
    </div>
  )
}

const OpeningImg = () => {
  return (
    <div className="fiftyPerc">
      <img className="opening-img" src={openImage} alt="group of five salsa dancers smiling"/>
    </div>
  )
}

const Perks1 = () => {
  return (
    <div id="homeB" className="fiftyPerc">
      <p>✅ 2 HIGH-ENERGY Salsa lessons per week</p>
      <p>✅ Access to an exclusive Salsa portal: tips, tricks, and lesson reviews</p>
      <p>✅ Gala Night Graduation where you can practice your new moves</p>
    </div>
  )
}

const Perks2 = () => {
  return (
    <div id="homeC" className="fiftyPerc">
      <p>✅ 24/7 access to our exclusive VIP Salsa community</p>
      <p>✅ Dance secrets that guarantee you become a HIT on the dance floor</p>
      <p>And much more...</p>
    </div>
  )
}

const Perks3 = () => {
  return (
    <div className="fiftyPerc">
      <p id="homeD">We need to give a fair warning because this isn't for anyone who's not ready to finally learn to Salsa... But... If you're ready to learn how to confidently step into the dance floor, we want you.</p>
    </div>
  )
}

const Perks4 = () => {
  return (
    <div className="fiftyPerc">
      <p id="homeE">If you're ready to feel that sense of unshakeable confidence that can only be earned, we want you. If you're ready for your friends to ask "Wow, where did you learn to Dance?!" we want you.</p>
    </div>
  )
}

const Perks5 = () => {
  return (
    <div className="center">
      <p id="homeF">🚨If that sounds like you, click below now, and reserve your FREE CLASS below🚨</p>
    </div>
  )
}

const Factoid = () => {
  return (
    <div id="factoid" className="large-text">
      <p id="homeG">Did you know: During times of stress, our stress hormone (cortisol) increases and our immune system suffers. Dance is a great form of exercise, and that's also what we're in this for.</p>
    </div>
  )
}

const Choice = () => {
  return (
    <p id="textH">Now if you're still reading this, you have two choices:</p>
  )
}

const Choice1 = () => {
  return (
    <div className="fiftyPerc black-box">
      <p id="homeI">Choice 1: Pretend like you never saw this ad and go about your day as you sell yourself on why next week, next month, or even next year is a "better time" to finally learn this awesome skill.</p>
    </div>
  )
}

const Choice2 = () => {
  return (
    <div className="fiftyPerc gold-box">
      <p id="homeJ">Choice 2: Recognize that life is a dance as they say and well, why should you spend most of your time only watching instead of being a part of it?</p>
    </div>
  )
}

// SALSA SECRETS SECTION

const SalsaSecrets = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanish />
        <h2 id="home" className="no-pad">Best-Kept Secrets -<br />We Asked the Girls and They Answered</h2>
        <CalendarWidget />
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret1A />
          <Secret1B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret2A />
          <Secret2B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret3A />
          <Secret3B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret4A />
          <Secret4B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret5A />
          <Secret5B />
        </div>
        <div className="divider2"></div>
      </div>
      <CalendarButton />
    </div>
  )
}

const Secret1A = () => {
  return (
    <div id="textA" className="fortyPerc tw-pad">
      <h3>AVOID This Mistake - Come Prepared</h3>
      <p className="center">Having confidence on the dance floor is a must... but what is the other key ingredient?</p>
    </div>
  )
}

const Secret1B = () => {
  return (
    <div className='tm-vid fiftyPerc tw-pad'>
      <video controls loop autoPlay muted className='tm-vid tall-vid'>
          <source src={secrets1} type="video/mp4" />
          <source src={secrets1} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/secrets1.vtt" default />
      </video>
    </div>
  )
}

const Secret2A = () => {
  return (
    <div id="textB" className="fortyPerc tw-pad">
      <h3>Without This NOTHING Else Will Work - Building a Foundation</h3>
      <p className="center">What gives the best salseros the edge on the dance floor? Take a look at the secret technique used by accomplished dancers and musicians alike.</p>
    </div>
  )
}

const Secret2B = () => {
  return (
    <div className='tm-vid fortyPerc tw-pad'>
    <video controls loop className='tm-vid tall-vid'>
        <source src={secrets2} type="video/mp4" />
        <source src={secrets2} type="video/webm" />
        <track label="English" kind="subtitles" srcLang="en" src="./videos/secrets2.vtt" default />
    </video>
  </div>
  )
}

const Secret3A = () => {
  return (
    <div id="textC" className="fortyPerc tw-pad">
      <h3>Not Enough Girls? No Problem</h3>
      <p className="center">Check out this dance element (that most people ignore) that can actually bring you more joy.</p>
    </div>
  )
}

const Secret3B = () => {
  return (
    <div className='tm-vid fiftyPerc tw-pad'>
    <video controls loop className='tm-vid tall-vid'>
        <source src={secrets3} type="video/mp4" />
        <source src={secrets3} type="video/webm" />
        <track label="English" kind="subtitles" srcLang="en" src="./videos/secrets3.vtt" default />
    </video>
  </div>
  )
}

const Secret4A = () => {
  return (
    <div id="textD" className="fortyPerc tw-pad">
      <h3>He Actually Said WHAT?? - Avoid Embarrassment</h3>
      <p className="center">When we're rejected for a dance, is it the end of a good night? See what can help you to bounce back and get back on that dance floor.</p>
    </div>
  )
}

const Secret4B = () => {
  return (
    <div className='tm-vid fiftyPerc tw-pad'>
    <video controls loop className='tm-vid tall-vid'>
        <source src={secrets4} type="video/mp4" />
        <source src={secrets4} type="video/webm" />
        <track label="English" kind="subtitles" srcLang="en" src="./videos/secrets4.vtt" default />
    </video>
  </div>
  )
}

const Secret5A = () => {
  return (
    <div id="textE" className="fortyPerc tw-pad">
      <h3>How to Not BREAK Your Partner.....</h3>
      <p className="center">Dances are the most fun when both you and your partner are having a great time. What important quality should you show?</p>
    </div>
  )
}

const Secret5B = () => {
  return (
    <div className='tm-vid fiftyPerc tw-pad'>
    <video controls loop className='tm-vid tall-vid'>
        <source src={secrets5} type="video/mp4" />
        <source src={secrets5} type="video/webm" />
        <track label="English" kind="subtitles" srcLang="en" src="./videos/secrets5.vtt" default />
    </video>
  </div>
  )
}

// SCHEDULE SECTION

const Schedule = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanish />
        <h2 id="home" className="no-pad">Class Schedule</h2>
        <CalendarWidget />
      </div>
      <ScheduleImg />
      <CalendarButton />
    </div>
  )
}

const ScheduleImg = () => {
  return (
    <div className="frame">
      <a onClick="schedWidget()"><img id="class-sch" src={schImage} alt="picture of schedule" /></a>
      <img className="popupSchedule show" id="mySched" src={schImage} alt="picture of schedule" />
      <div className="outer-exit2 show" id="exit-button2">
          <div className="inner-exit2" type="button" onClick="schedWidget()"><i className="fa fa-times-circle-o"></i></div>
      </div>
      <div className="schedFade show" id="schedFade"></div>
    </div>
  )
}

// TESTIMONIALS SECTION

const Testimonials = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanish />
        <h2 id="home" className="no-pad">Testimonials</h2>
        <CalendarWidget />
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="side-by-side">
            <Tesm1A />
            <Tesm1B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
            <Tesm2A />
            <Tesm2B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
            <Tesm3A />
            <Test3B />
        </div>
        <div className="divider2"></div>
      </div>
      <CalendarButton />
    </div>
  )
}

const Tesm1A = () => {
  return (
    <div id="textA" className="thirtyPerc tw-pad">
      <h3>Meet Miguel:</h3>
      <p className="center">He went from Zero to Salsero in Record Time!</p>
    </div>
  )
}

const Tesm1B = () => {
  return (
    <div className='tm-vid seventyPerc tw-pad'>
      <video controls loop autoPlay muted className='tm-vid tall-vid'>
          <source src={tesm1} type="video/mp4" />
          <source src={tesm1} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/tesm1.vtt" default />
      </video>
    </div>
  )
}

const Tesm2A = () => {
  return (
    <div id="textB" className="thirtyPerc tw-pad">
      <h3>Meet Josie:</h3>
      <p className="center">She loves her Dancing Community here and is turning into a smooth Salsera.</p>
    </div>
  )
}

const Tesm2B = () => {
  return (
    <div className='tm-vid seventyPerc tw-pad'>
      <video controls loop className='tm-vid short-vid'>
          <source src={tesm2} type="video/mp4" />
          <source src={tesm2} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/tesm2.vtt" default />
      </video>
    </div>
  )
}

const Tesm3A = () => {
  return (
    <div id="textC" className="thirtyPerc tw-pad">
      <h3>Meet Angel:</h3>
      <p className="center">One of our many success stories, he gets complimented on his Lead Often.</p>
    </div>
  )
}

const Test3B = () => {
  return (
    <div className='tm-vid seventyPerc tw-pad'>
      <video controls loop className='tm-vid short-vid'>
          <source src={tesm3} type="video/mp4" />
          <source src={tesm3} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/tesm3.vtt" default />
      </video>
    </div>
  )
}

// CUSTOMER PERKS SECTION

const Perks = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanish />
        <h2 id="home" className="no-pad">Customer Perks</h2>
        <CalendarWidget />
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="box">
          <Perk1A />
          <Perk1B />
        </div>
        <div className="divider2"></div>
        <div className="box item-reverse">
          <Perk2B />
          <Perk2A />
        </div>
        <div className="divider2"></div>
        <div className="box">
          <Perk3A />
          <Perk3B />
        </div>
        <div className="divider2"></div>
        <div className="box">
          <Perk4A />
          <Perk4B />
        </div>
        <div className="divider2"></div>
        <div className="box item-reverse">
          <Perk5B />
          <Perk5A />
        </div>
        <div className="divider2"></div>
      </div>
      <CalendarButton />
    </div>
  )
}

const Perk1A = () => {
  return (
    <p id="textA" className="text fiftyPerc">Free FB Group with Steps/Tricks/Tips</p>
  )
}

const Perk1B = () => {
  return (
    <div className="fiftyPerc">
      <img className="media-center" src={pImg1} alt="facebook group home page"/><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
    </div>
  )
}

const Perk2A = () => {
  return (
    <p id="textB" className="text fiftyPerc">Free Online Portal</p>
  )
}

const Perk2B = () => {
  return (
    <div className="fiftyPerc">
      <img className="media-center" src={pImg2} alt="youtube video playlist of dancing tips"/>         
    </div>
  )
}

const Perk3A = () => {
  return (
    <p id="textC" className="text thirtyPerc">Come Be Part of Our...</p>
  )
}

const Perk3B = () => {
  return (
    <img className="wide-media seventyPerc" src="https://live.staticflickr.com/65535/52766966391_816b6bf1f4_h.jpg" width="1600" height="auto" alt="large group of 30+ salsa dancers cheering"/>
  )
}

const Perk4A = () => {
  return (
    <p id="textD" className="text thirtyPerc">Free Fitness Program!</p>
  )
}

const Perk4B = () => {
  return (
    <div className='tm-vid seventyPerc tw-pad'>
      <video controls loop autoPlay muted className='tm-vid short-vid'>
          <source src={perks1} type="video/mp4" />
          <source src={perks1} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/perks1.vtt" default />
      </video>
    </div>
  )
}

const Perk5A = () => {
  return (
    <p id="textE" className="text thirtyPerc">Dancing Field Trips</p>
  )
}

const Perk5B = () => {
  return (
    <div className='tm-vid seventyPerc tw-pad'>
      <video controls loop className='tm-vid short-vid'>
          <source src={perks2} type="video/mp4" />
          <source src={perks2} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/perks2.vtt" default />
      </video>
    </div>
  )
}

// FOOTER SECTION

const Footer = () => {
  return (
    <div className="frame-block">
      <h2 id="about-us"></h2>
      <LocationImg />
      <Location />
      <PhoneNumber />
    </div>
  )
}

const LocationImg = () => {
  return (
    <div className="locations">
      <img className="location3" src={locImage} width="924" height="1024" alt="two people dancing with address text beneath"/><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
    </div>
  )
}

const Location = () => {
  return (
    <div className="contact-info">
      <p id="textK" className="contact bold">Location:</p>
      <a href="https://goo.gl/maps/MTFkBVKthE3sLUQa8" target="_blank">
        <p className="contact">185 W. Arrow Hwy<br />Pomona CA, 91767</p>
      </a>
    </div>
  )
}

function PhoneNumber() {
  return (
    <div className="contact-info">
      <p id="textL" className="contact bold">Phone Number:</p>
      <a href="tel:9092797956">
        <p className="contact">(909) 279-7956</p>
      </a>
    </div>
  )
}

export default App;
