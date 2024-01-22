import React from 'react';
import './App.css';
import { connect } from "react-redux";
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

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVal: 0,
      calVal: true,
      spanish: false,
      hiddenNav: false,
    };
    this.changePage = this.changePage.bind(this);
    this.changePageAboutUs = this.changePageAboutUs.bind(this);
    this.secondNav = this.secondNav.bind(this);
    this.toSpanish = this.toSpanish.bind(this);
  };
  changePage(val) {
    if (val === 5) {
      this.changePageAboutUs();
      return;
    }
    this.setState({
      mainVal: val
    })
    this.setState({
      hiddenNav: false
    })
    window.scrollTo({
      top: 10
    })
  };
  changePageAboutUs() {
    const section = document.getElementById( 'about-us' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  secondNav() {
    this.setState({
      hiddenNav: !this.state.hiddenNav
    })
  }
  calWidgetFull() {
    let val = !this.state.calVal;
    this.setState({
      calVal: val
    })
  }
  toSpanish() {
    this.setState({
      spanish: !this.state.spanish
    })
    console.log('pizza');
    console.log(this.state.spanish)
  }
  render() {
    let pageNum = this.state.mainVal;
    let spanishVal = this.state.spanish;
  return (
    <div className="App">
      <body>
        <div>
          <Header functions={[(val) => this.changePage(val), this.secondNav]} calShow={this.state.calVal} hiddenNav={this.state.hiddenNav} />
          <main>
            { pageNum === 0 ? <Home toSpanish={this.toSpanish} spanishVal={spanishVal} /> : pageNum === 1 ? <SalsaSecrets toSpanish={this.toSpanish} spanishVal={spanishVal} /> : pageNum === 2 ? <Schedule toSpanish={this.toSpanish} spanishVal={spanishVal} /> : pageNum === 3 ? <Testimonials toSpanish={this.toSpanish} spanishVal={spanishVal} /> : <Perks toSpanish={this.toSpanish} spanishVal={spanishVal} />}
            {/* { spanishVal === false ? <Main pageNum={pageNum} toSpanish={this.toSpanish}/> : <MainSp pageNum={pageNum} toSpanish={this.toSpanish} />} */}
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
  let hiddenNav = props.hiddenNav;
  console.log(changePage, changePageVal, secondNav, hiddenNav)
  let yum = 0;
  let titleFull = {
    title: 'Home'
  }
  if (yum === 0) {
    titleFull.disabled = true
  };
  return (
    <div>
      <header>
        <h1><a className="title" href="#home">Familia Salsera</a></h1>
        <nav className="myNav" id="myTopNav">
          <ul>
            <Page id='homeNav' title=''{...titleFull} value='0' changePage={changePageVal} />
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
      </header>
      { hiddenNav === false ? <Dummy /> : <HiddenNav changePage={changePageVal} /> }
    </div>
  )
}

const Page = (props) => {
  return (
    <li id={props.id} value={props.value} onClick={props.changePage}>{props.title}</li>
  )
}

const HiddenNav = (props) => {
  let changePageVal = props.changePage;
  return(
    <div className="second-nav" id="mySecondNav">
      <div className="hidden-nav ex-pad">
        <Page id='homeNav1' title='Home' value='0' changePage={changePageVal} />
        <Page id='tipsNav1' title='Salsa Secrets' value='1' changePage={changePageVal} />
        <Page id='schedNav1' title='Class Schedule' value='2' changePage={changePageVal} />
        <Page id='testNav1' title='Testimonials' value='3' changePage={changePageVal} />
        <Page id='perkNav1' title='Customer Perks' value='4' changePage={changePageVal} />
        <Page id='aboutNav1' title='About Us' value='5' changePage={changePageVal} />
      </div>
    </div>
  )
}

// MAIN SECTION

/*
function Main(props) {
  let pageNum = props.pageNum;
  console.log(pageNum)
  return (
    <div>
      { pageNum === 0 ? <Home toSpanish={props.toSpanish}/> : pageNum === 1 ? <SalsaSecrets toSpanish={props.toSpanish} /> : pageNum === 2 ? <Schedule toSpanish={props.toSpanish} /> : pageNum === 3 ? <Testimonials toSpanish={props.toSpanish} /> : <Perks toSpanish={props.toSpanish} />}
    </div>
  )
}

function MainSp(props) {
  let pageNum = props.pageNum;
  return (
    <div>
      { pageNum === 0 ? <HomeSp toSpanish={props.toSpanish}/> : pageNum === 1 ? <SalsaSecretsSp toSpanish={props.toSpanish} /> : pageNum === 2 ? <ScheduleSp toSpanish={props.toSpanish} /> : pageNum === 3 ? <TestimonialsSp toSpanish={props.toSpanish} /> : <PerksSp toSpanish={props.toSpanish} />}
    </div>
  )
}
*/

function Dummy() {
  return (
    <div>
    </div>
  )
}

const Home = (props) => {
  let spanishVal = props.spanishVal;
  return (
    <div>
       <IntroVideo />
      { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
      <div className="divider"></div>
      <div id="six-week-program" className="frame-block medium-text top-padding2">
        { spanishVal === false ? <ToSpanish toSpanish={props.toSpanish} /> : <ToSpanishSp toSpanish={props.toSpanish} /> }
        <h2 id="home1" className="no-pad">Familia Salsera</h2>
        { spanishVal === false ? <WelcomeWords /> : <WelcomeWordsSp /> }
        <OpeningImg />
      </div>
      <div className="divider"></div>
      <div className="frame-block medium-text">
        { spanishVal === false ? <ThePerks /> : <ThePerksSp /> }
          { spanishVal === false ? <Perks1 /> : <Perks1Sp /> }
          { spanishVal === false ? <Perks2 /> : <Perks2Sp /> }
          { spanishVal === false ? <Perks3 /> : <Perks3Sp /> }
          { spanishVal === false ? <Perks4 /> : <Perks4Sp /> }
          { spanishVal === false ? <Perks5 /> : <Perks5Sp /> }
      </div>
      { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
      { spanishVal === false ? <Factoid /> : <FactoidSp /> }
      <div className="divider"></div>
      <div className="frame-block medium-text top-padding">
        { spanishVal === false ? <Choice /> : <ChoiceSp /> }
        { spanishVal === false ? <Choice1 /> : <Choice1Sp /> }
        { spanishVal === false ? <Choice2 /> : <Choice2Sp /> }
      </div>
      <div className="divider"></div>
    </div>
  )
}

/*
const HomeSp = (props) => {
  return (
    <div>
      <div className="frame-block">
          <IntroVideo />
      </div>
      <CalendarButtonSp />
      <div className="divider"></div>
      <div id="six-week-program" className="frame-block medium-text top-padding2">
        <ToSpanishSp toSpanish={props.toSpanish} />
        <h2 id="home1" className="no-pad">Familia Salsera</h2>
        <WelcomeWordsSp />
        <OpeningImg />
      </div>
      <div className="divider"></div>
      <div className="frame-block medium-text">
        <ThePerksSp />
          <Perks1Sp />
          <Perks2Sp />
          <Perks3Sp />
          <Perks4Sp />
          <Perks5Sp />
      </div>
      <CalendarButtonSp />
      <FactoidSp />
      <div className="divider"></div>
      <div className="frame-block medium-text top-padding">
        <ChoiceSp />
        <Choice1Sp />
        <Choice2Sp />
      </div>
      <div className="divider"></div>
    </div>
  )
}
*/

const IntroVideo = () => {
  return (
    <div id="intro-vid" className=''>
      <div className='videoWrapper'>
        <video controls loop autoPlay muted >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="./videos/sessions.vtt" default />
        </video>
      </div>
    </div>
  )
}

class CalendarButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        calValue: true
      };
      this.calActive = this.calActive.bind(this);
  };
  calActive() {
    this.setState({
      calValue: !this.state.calValue
    })
  }
  render() {
    let calValue = this.state.calValue;
      return (
        <div>
          <div className="frame-block top-padding">
            <button className="button1" type="button" onClick={this.calActive} >Click Here For a Free Class!</button>
          </div>
          <button class="button3" type="button" onClick={this.calActive}>Schedule Your First Class</button>
          { calValue === true ? <Dummy /> : <CalendarWidget calRemove={this.calActive}/> }
        </div>
            )
  }
}

class CalendarButtonSp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        calValue: true
      };
      this.calActive = this.calActive.bind(this);
  };
  calActive() {
    this.setState({
      calValue: !this.state.calValue
    })
  }
  render() {
    let calValue = this.state.calValue;
      return (
        <div>
          <div className="frame-block top-padding">
            <button className="button1" type="button" onClick={this.calActive} >Haga Clic Aquí Para Una Clase Gratuita!</button>
          </div>
          <button class="button3" type="button" onClick={this.calActive}>Programa Tu Primera Clase</button>
          { calValue === true ? <Dummy /> : <CalendarWidget calRemove={this.calActive}/> }
        </div>
            )
  }
}

const CalendarWidget = (props) => {
  let calRemove = props.calRemove;
  return (
    <div>
      <div className="popupCalendar" id="myPopup">
        <iframe src="https://api.leadconnectorhq.com/widget/booking/51s99XpkQ63NwU4eLIwQ" style={{width: '100%', height: '100%', border: 'none', overflow: 'hidden'}} scrolling="no" id="msgsndr-calendar"></iframe><br /><script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
      </div>
      <div className="calFade" id="calFade" />
      <div class="outer-exit" id="exit-button">
        <div class="inner-exit" type="button" onClick={calRemove}><i class="fa fa-times-circle-o" /></div>
      </div>
    </div>
  )
}

const ToSpanish = (props) => {
  return (
    <button id="langButton" className="langButton" onClick={props.toSpanish}>En Español</button>
  )
}

const ToSpanishSp = (props) => {
  return (
    <button id="langButton" className="langButton" onClick={props.toSpanish}>In English</button>
  )
}

const WelcomeWords = () => {
  return (
    <div id="homeA" className="fiftyPerc">
      <h2 className="large-text six-week-program">Become a Salsa Dancer Today!</h2>
      <p>We're looking for 20 people that are serious about learning to Dance Salsa at last!</p>
      <p>We're your local Dance Studio that has transformed hundreds of people just like you and we're eager to serve those who are looking to make 2024 their best year yet.</p>
      <p>Here's what <em>you'd</em> get with our Six Week Salsa Challenge:</p>
    </div>
  )
}

const WelcomeWordsSp = () => {
  return (
    <div id="homeA" className="fiftyPerc">
      <h2 className="large-text six-week-program">Conviértete en un bailarín de salsa hoy!</h2>
      <p>¡Estamos buscando 20 personas que realmente quieran aprender a bailar Salsa por fin!</p>
      <p>Somos su estudio de danza local que ha transformado a cientos de personas como usted y estamos ansiosos por servir a aquellos que buscan hacer del 2024 su mejor año hasta el momento.</p>
      <p>Esto es lo que obtendrías con nuestro Reto de Salsa de Seis Semanas:</p>
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

const ThePerks = () => {
  return (
    <h2 id="the-perks" className="center large-text">The Perks</h2>
  )
}

const ThePerksSp = () => {
  return (
    <h2 id="the-perks" className="center large-text">Las Ventajas</h2>
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

const Perks1Sp = () => {
  return (
    <div id="homeB" className="fiftyPerc">
      <p>✅ 2 lecciones de salsa de ALTA ENERGÍA por semana</p>
      <p>✅ Acceso a un portal exclusivo de Salsa: consejos, trucos y reseñas de lecciones</p>
      <p>✅ Noche de Gala de Graduación donde podrás practicar tus nuevos movimientos</p>
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

const Perks2Sp = () => {
  return (
    <div id="homeC" className="fiftyPerc">
      <p>✅ Acceso 24/7 a nuestra exclusiva comunidad VIP Salsa</p>
      <p>✅ Secretos de baile que te garantizan convertirte en un HIT en la pista de baile</p>
      <p>Y mucho más...</p>
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

const Perks3Sp = () => {
  return (
    <div className="fiftyPerc">
      <p id="homeD">Necesitamos darte una advertencia justa porque esto no es para cualquiera que no esté listo para finalmente aprender Salsa... Pero... Si estás listo para aprender a entrar con confianza a la pista de baile, te queremos.</p>
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

const Perks4Sp = () => {
  return (
    <div className="fiftyPerc">
      <p id="homeE">Si está preparado para sentir esa sensación de confianza inquebrantable que sólo puede ganarse, lo queremos. Si estás listo para que tus amigos te pregunten "¡Vaya, dónde aprendiste a bailar!" te queremos.</p>
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

const Perks5Sp = () => {
  return (
    <div className="center">
      <p id="homeF">🚨Si eso te suena familiar, haz clic a continuación ahora y reserva tu CLASE GRATUITA a continuación🚨</p>
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

const FactoidSp = () => {
  return (
    <div id="factoid" className="large-text">
      <p id="homeG">¿Sabías que? En momentos de estrés, nuestra hormona del estrés (cortisol) aumenta y nuestro sistema inmunológico sufre. La danza es una excelente forma de ejercicio y para eso también estamos en esto.</p>
    </div>
  )
}

const Choice = () => {
  return (
    <p id="textH">Now if you're still reading this, you have two choices:</p>
  )
}

const ChoiceSp = () => {
  return (
    <p id="textH">Ahora bien, si todavía estás leyendo esto, tienes dos opciones:</p>
  )
}

const Choice1 = () => {
  return (
    <div className="fiftyPerc black-box">
      <p id="homeI">Choice 1: Pretend like you never saw this ad and go about your day as you sell yourself on why next week, next month, or even next year is a "better time" to finally learn this awesome skill.</p>
    </div>
  )
}

const Choice1Sp = () => {
  return (
    <div className="fiftyPerc black-box">
      <p id="homeI">Opción 1: finge que nunca has visto este anuncio y continúa con tu día mientras te convences de por qué la próxima semana, el próximo mes o incluso el próximo año es un "mejor momento" para finalmente aprender esta increíble habilidad.</p>
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

const Choice2Sp = () => {
  return (
    <div className="fiftyPerc gold-box">
      <p id="homeJ">Opción 2: Reconocer que la vida es un baile como dicen y bueno, ¿por qué deberías pasar la mayor parte de tu tiempo sólo mirando en lugar de ser parte de ello?</p>
    </div>
  )
}

// SALSA SECRETS SECTION

const SalsaSecrets = (props) => {
  let spanishVal = props.spanishVal;
  return (
    <div>
      <div className="frame top-padding3">
        { spanishVal === false ? <ToSpanish toSpanish={props.toSpanish} /> : <ToSpanishSp toSpanish={props.toSpanish} /> }
        { spanishVal === false ? <SecretsTitle /> : <SecretsTitleSp /> }
        { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="side-by-side">
          { spanishVal === false ? <Secret1A /> : <Secret1ASp /> }
          <Secret1B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          { spanishVal === false ? <Secret2A /> : <Secret2ASp /> }
          <Secret2B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          { spanishVal === false ? <Secret3A /> : <Secret3ASp /> }
          <Secret3B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          { spanishVal === false ? <Secret4A /> : <Secret4ASp /> }
          <Secret4B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          { spanishVal === false ? <Secret5A /> : <Secret5ASp /> }
          <Secret5B />
        </div>
        <div className="divider2"></div>
      </div>
      { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
    </div>
  )
}

/*
const SalsaSecretsSp = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanishSp />
        <SecretsTitleSp />
        <CalendarButtonSp />
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret1ASp />
          <Secret1B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret2ASp />
          <Secret2B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret3ASp />
          <Secret3B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret4ASp />
          <Secret4B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
          <Secret5ASp />
          <Secret5B />
        </div>
        <div className="divider2"></div>
      </div>
      <CalendarButtonSp />
    </div>
  )
}
*/

const SecretsTitle = () => {
  return (
    <h2 id="home" className="no-pad">Best-Kept Secrets -<br />We Asked the Girls and They Answered</h2>
  )
}

const SecretsTitleSp = () => {
  return (
    <h2 id="home" className="no-pad">Los Secretos Mejor Guardados:<br />Les Preguntamos a las Chicas y Respondieron</h2>
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

const Secret1ASp = () => {
  return (
    <div id="textA" className="fortyPerc tw-pad">
      <h3>EVITE Este Error - Venga Preparado</h3>
      <p className="center">Tener confianza en la pista de baile es imprescindible... pero ¿cuál es el otro ingrediente clave?</p>
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

const Secret2ASp = () => {
  return (
    <div id="textB" className="fortyPerc tw-pad">
      <h3>Sin Esto, NADA Más Funcionará - Construyendo una Base</h3>
      <p className="center">¿Qué les da a los mejores salseros la ventaja en la pista de baile? Eche un vistazo a la técnica secreta utilizada tanto por bailarines como por músicos consumados.</p>
    </div>
  )
}

const Secret2B = () => {
  return (
    <div className='tm-vid fiftyPerc tw-pad'>
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

const Secret3ASp = () => {
  return (
    <div id="textC" className="fortyPerc tw-pad">
      <h3>¿No Hay Suficientes Chicas? Ningún Problema</h3>
      <p className="center">Echa un vistazo a este elemento de baile (que la mayoría de la gente ignora) que en realidad puede brindarte más alegría.</p>
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

const Secret4ASp = () => {
  return (
    <div id="textD" className="fortyPerc tw-pad">
      <h3>¿En Realidad Dijo QUÉ? - Evite la Vergüenza</h3>
      <p className="center">Cuando nos rechazan para un baile, ¿es el final de una buena noche? Vea qué puede ayudarle a recuperarse y volver a la pista de baile.</p>
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

const Secret5ASp = () => {
  return (
    <div id="textE" className="fortyPerc tw-pad">
      <h3>Cómo NO ROMPER a tu pareja.....</h3>
      <p className="center">Los bailes son de lo más divertido cuando tanto tú como tu pareja os lo pasáis genial. ¿Qué cualidad importante deberías mostrar?</p>
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

const Schedule = (props) => {
  let spanishVal = props.spanishVal;
  return (
    <div>
      <div className="frame top-padding3">
        { spanishVal === false ? <ToSpanish toSpanish={props.toSpanish} /> : <ToSpanishSp toSpanish={props.toSpanish} /> }
        { spanishVal === false ? <ScheduleTitle /> : <ScheduleTitleSp /> }
      </div>
      <ScheduleButton />
      { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
    </div>
  )
}

/*
const ScheduleSp = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanishSp />
        <ScheduleTitleSp />
      </div>
      <ScheduleButton />
      <CalendarButtonSp />
    </div>
  )
}
*/

const ScheduleTitle = () => {
  return (
    <h2 id="home" className="no-pad">Class Schedule</h2>
  )
}

const ScheduleTitleSp = () => {
  return (
    <h2 id="home" className="no-pad">Horario de Clase</h2>
  )
}

class ScheduleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sched: false
    };
    this.showSched = this.showSched.bind(this);
  };
  showSched() {
    this.setState({
      sched: !this.state.sched
    })
  }
  render() {
    let schedVal = this.state.sched;
  return (
    <div className="frame">
      <a onClick={this.showSched}><img id="class-sch" src={schImage} alt="picture of schedule" /></a>
      { schedVal === false ? <Dummy /> : <ScheduleImage showSched={this.showSched} />}
    </div>
  )
}
}

const ScheduleImage = (props) => {
  return(
    <div>
      <img className="popupSchedule" id="mySched" src={schImage} alt="picture of schedule" />
      <div className="outer-exit2" id="exit-button2">
          <div className="inner-exit2" type="button" onClick={props.showSched}><i className="fa fa-times-circle-o"></i></div>
      </div>
      <div className="schedFade" id="schedFade"></div>
    </div>
  )
}

// TESTIMONIALS SECTION

const Testimonials = (props) => {
  let spanishVal = props.spanishVal;
  return (
    <div>
      <div className="frame top-padding3">
        { spanishVal === false ? <ToSpanish toSpanish={props.toSpanish} /> : <ToSpanishSp toSpanish={props.toSpanish} /> }
        { spanishVal === false ? <TestimonialsTitle /> : <TestimonialsTitleSp /> }
        { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="side-by-side">
            { spanishVal === false ? <Tesm1A /> : <Tesm1ASp /> }
            <Tesm1B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
            { spanishVal === false ? <Tesm2A /> : <Tesm2ASp /> }
            <Tesm2B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
            { spanishVal === false ? <Tesm3A /> : <Tesm3ASp /> }
            <Test3B />
        </div>
        <div className="divider2"></div>
      </div>
      { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
    </div>
  )
}

/*
const TestimonialsSp = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanishSp />
        <TestimonialsTitleSp />
        <CalendarButtonSp />
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="side-by-side">
            <Tesm1ASp />
            <Tesm1B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
            <Tesm2ASp />
            <Tesm2B />
        </div>
        <div className="divider2"></div>
        <div className="side-by-side">
            <Tesm3ASp />
            <Test3B />
        </div>
        <div className="divider2"></div>
      </div>
      <CalendarButtonSp />
    </div>
  )
}
*/

const TestimonialsTitle = () => {
  return (
    <h2 id="home" className="no-pad">Testimonials</h2>
  )
}

const TestimonialsTitleSp = () => {
  return (
    <h2 id="home" className="no-pad">Testimonios</h2>
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

const Tesm1ASp = () => {
  return (
    <div id="textA" className="thirtyPerc tw-pad">
      <h3>Conocer a Miguel:</h3>
      <p className="center">¡Pasó de Cero a Salsero en Tiempo Récord!</p>
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

const Tesm2ASp = () => {
  return (
    <div id="textB" className="thirtyPerc tw-pad">
      <h3>Conocer a Josie:</h3>
      <p className="center">A ella le encanta su comunidad de baile aquí y se está convirtiendo en una suave Salsera.</p>
    </div>
  )
}

const Tesm2B = () => {
  return (
    <div className='tm-vid seventyPerc tw-pad short-vid-out'>
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

const Tesm3ASp = () => {
  return (
    <div id="textC" className="thirtyPerc tw-pad">
      <h3>Conocer a Angel:</h3>
      <p className="center">Una de nuestras muchas historias de éxito, recibe elogios por su liderazgo frecuente.</p>
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

const Perks = (props) => {
  let spanishVal = props.spanishVal;
  return (
    <div>
      <div className="frame top-padding3">
        { spanishVal === false ? <ToSpanish toSpanish={props.toSpanish} /> : <ToSpanishSp toSpanish={props.toSpanish} /> }
        { spanishVal === false ? <PerksTitle /> : <PerksTitleSp /> }
        { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="box">
          { spanishVal === false ? <Perk1A /> : <Perk1ASp /> }
          <Perk1B />
        </div>
        <div className="divider2"></div>
        <div className="box item-reverse">
          <Perk2B />
          { spanishVal === false ? <Perk2A /> : <Perk2ASp /> }
        </div>
        <div className="divider2"></div>
        <div className="box">
          { spanishVal === false ? <Perk3A /> : <Perk3ASp /> }
          <Perk3B />
        </div>
        <div className="divider2"></div>
        <div className="box">
          { spanishVal === false ? <Perk4A /> : <Perk4ASp /> }
          <Perk4B />
        </div>
        <div className="divider2"></div>
        <div className="box item-reverse">
          <Perk5B />
          { spanishVal === false ? <Perk5A /> : <Perk5ASp /> }
        </div>
        <div className="divider2"></div>
      </div>
      { spanishVal === false ? <CalendarButton /> : <CalendarButtonSp /> }
    </div>
  )
}

/*
const PerksSp = () => {
  return (
    <div>
      <div className="frame top-padding3">
        <ToSpanishSp />
        <PerksTitleSp />
        <CalendarButtonSp />
      </div>
      <div className="frame">
        <div className="divider2"></div>
        <div className="box">
          <Perk1ASp />
          <Perk1B />
        </div>
        <div className="divider2"></div>
        <div className="box item-reverse">
          <Perk2B />
          <Perk2ASp />
        </div>
        <div className="divider2"></div>
        <div className="box">
          <Perk3ASp />
          <Perk3B />
        </div>
        <div className="divider2"></div>
        <div className="box">
          <Perk4ASp />
          <Perk4B />
        </div>
        <div className="divider2"></div>
        <div className="box item-reverse">
          <Perk5B />
          <Perk5ASp />
        </div>
        <div className="divider2"></div>
      </div>
      <CalendarButtonSp />
    </div>
  )
}
*/

const PerksTitle = () => {
  return (
    <h2 id="home" className="no-pad">Customer Perks</h2>
  )
}

const PerksTitleSp = () => {
  return (
    <h2 id="home" className="no-pad">Beneficios Para el Cliente</h2>
  )
}

const Perk1A = () => {
  return (
    <p id="textA" className="text fiftyPerc">Free FB Group with Steps/Tricks/Tips</p>
  )
}

const Perk1ASp = () => {
  return (
    <p id="textA" className="text fiftyPerc">Grupo de Facebook Gratuito con Pasos/Trucos/Consejos</p>
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

const Perk2ASp = () => {
  return (
    <p id="textB" className="text fiftyPerc">Portal en Línea Gratuito</p>
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

const Perk3ASp = () => {
  return (
    <p id="textC" className="text thirtyPerc">Ven y Sé Parte de Nuestro...</p>
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

const Perk4ASp = () => {
  return (
    <p id="textD" className="text thirtyPerc">Programa de Fitness Gratuito!</p>
  )
}

const Perk4B = () => {
  return (
    <div className='seventyPerc tw-pad'>
      <video controls loop autoPlay muted className='short-vid'>
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

const Perk5ASp = () => {
  return (
    <p id="textE" className="text thirtyPerc">Excursiones de Baile</p>
  )
}

const Perk5B = () => {
  return (
    <div className='seventyPerc tw-pad'>
      <video controls loop className='short-vid'>
          <source src={perks2} type="video/mp4" />
          <source src={perks2} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="./videos/perks2.vtt" default />
      </video>
    </div>
  )
}

// FOOTER SECTION

const Footer = (props) => {
  let spanishVal = props.spanishVal;
  return (
    <div className="frame-block">
      <h2 id="about-us"></h2>
      <LocationImg />
      { spanishVal === false ? <Location /> : <LocationSp /> }
      { spanishVal === false ? <PhoneNumber /> : <PhoneNumberSp /> }
    </div>
  )
}

/*
const FooterSp = () => {
  return (
    <div className="frame-block">
      <h2 id="about-us"></h2>
      <LocationImg />
      <LocationSp />
      <PhoneNumberSp />
    </div>
  )
}
*/

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

const LocationSp = () => {
  return (
    <div className="contact-info">
      <p id="textK" className="contact bold">Ubicación:</p>
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

function PhoneNumberSp() {
  return (
    <div className="contact-info">
      <p id="textL" className="contact bold">Número de Teléfono:</p>
      <a href="tel:9092797956">
        <p className="contact">(909) 279-7956</p>
      </a>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // pageVal: state.menu.pageVal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // homePage: () => dispatch(homePage()),
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Display);

class App extends React.Component {
  render() {
  return (
    <Container/>
  );
}
}

export default App;