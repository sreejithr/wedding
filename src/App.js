import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import logo from './logo.svg';
import './App.css';

const device = {
  phone: '@media only screen and (max-width: 40em)',
  laptop: '@media only screen and (min-width: 1224px)',
};

const whiteFlower = 'https://static.wixstatic.com/media/ea71bb_c30b7a5e4fba45ba823a8fde134905d3~mv2.png/v1/fill/w_60,h_69,al_c,usm_0.66_1.00_0.01/ea71bb_c30b7a5e4fba45ba823a8fde134905d3~mv2.png';

const leaf1 = 'https://static.wixstatic.com/media/ea71bb_d5c592007b35486f9010890d9a79da8e~mv2.png/v1/fill/w_67,h_48,al_c,usm_0.66_1.00_0.01/ea71bb_d5c592007b35486f9010890d9a79da8e~mv2.png';

const bud1 = 'https://static.wixstatic.com/media/ea71bb_b3377d617c074705abe921407b878878~mv2.png/v1/fill/w_32,h_27,al_c,usm_0.66_1.00_0.01/ea71bb_b3377d617c074705abe921407b878878~mv2.png';

const leaf2 = 'https://static.wixstatic.com/media/ea71bb_95e2cec64db54a01b99eaf4823206e1e~mv2.png/v1/fill/w_56,h_40,al_c,usm_0.66_1.00_0.01/ea71bb_95e2cec64db54a01b99eaf4823206e1e~mv2.png';

const leaf3 = 'https://static.wixstatic.com/media/ea71bb_f55edf90fe65456f8b7b74df64bdde85~mv2.png/v1/fill/w_64,h_60,al_c,usm_0.66_1.00_0.01/ea71bb_f55edf90fe65456f8b7b74df64bdde85~mv2.png';

const redFlower = 'https://static.wixstatic.com/media/ea71bb_6ddba9a5c2c641b28affaa9173df0b5f~mv2_d_1300_1286_s_2.png/v1/fill/w_132,h_130,al_c,usm_0.66_1.00_0.01/ea71bb_6ddba9a5c2c641b28affaa9173df0b5f~mv2_d_1300_1286_s_2.png';

const leaf4 = 'https://static.wixstatic.com/media/ea71bb_f55edf90fe65456f8b7b74df64bdde85~mv2.png/v1/crop/x_15,y_0,w_809,h_761/fill/w_52,h_52,al_c,usm_0.66_1.00_0.01/ea71bb_f55edf90fe65456f8b7b74df64bdde85~mv2.png';

const bigWhiteFlower = 'https://static.wixstatic.com/media/ea71bb_276146657a6e408f952e89a9e90a9f28~mv2.png/v1/fill/w_132,h_140,al_c,usm_0.66_1.00_0.01/ea71bb_276146657a6e408f952e89a9e90a9f28~mv2.png';

const chembaruthi = 'https://static.wixstatic.com/media/ea71bb_d3a6b7327e5f43a88fd7f46f2ec6c71d~mv2.png/v1/fill/w_100,h_89,al_c,usm_0.66_1.00_0.01/ea71bb_d3a6b7327e5f43a88fd7f46f2ec6c71d~mv2.png';

const bigRedFlower = 'https://static.wixstatic.com/media/ea71bb_d8021448528d4101a265cda589b7bbe7~mv2.png/v1/fill/w_192,h_187,al_c,usm_0.66_1.00_0.01/ea71bb_d8021448528d4101a265cda589b7bbe7~mv2.png';

const floral = "https://static.wixstatic.com/media/ea71bb_9273ad06aa58469ab6d1a5d0b4fc1cb4~mv2_d_1572_1746_s_2.png/v1/fill/w_649,h_720,al_c,usm_0.66_1.00_0.01/ea71bb_9273ad06aa58469ab6d1a5d0b4fc1cb4~mv2_d_1572_1746_s_2.png";

const fernLeaf = 'https://static.wixstatic.com/media/ea71bb_d7799aaa6ea54bdd9cc092de32334c91~mv2.png/v1/fill/w_203,h_172,al_c,usm_0.66_1.00_0.01/ea71bb_d7799aaa6ea54bdd9cc092de32334c91~mv2.png';

class Content extends Component {
  render() {
              // <img src={require('./sree.jpg')} style={styles.face}/>
              // <img src={require('./jr-sreejith.jpg')} style={styles.face}/>
    return (
        <div style={styles.container}>
          <div style={styles.invitation}>

        <div style={styles.names}>
          <img src={floral} style={{position: 'absolute', top: 0, left: 15, width: 300,  }}/>

        <img src={fernLeaf} style={{position: 'absolute', top: 80, left: -10, resizeMode: 'contain', width: 90, transform: 'rotate(50deg) scaleX(-1)'}}/>

        <img src={fernLeaf} style={{position: 'absolute', top: 80, right: -10, resizeMode: 'contain', width: 90, transform: 'rotate(-40deg)'}}/>

        <img src={fernLeaf} style={{position: 'absolute', bottom: 75, right: 10, resizeMode: 'contain', width: 90, zIndex: 20}}/>

        <img src={bigWhiteFlower} style={{position: 'absolute', bottom: 80, right: 10, resizeMode: 'contain', width: 50, zIndex: 21}}/>

        <img src={chembaruthi} style={{position: 'absolute', top: 75, left: -20, resizeMode: 'contain', width: 50, zIndex: 20}}/>

        <img src={bigRedFlower} style={{position: 'absolute', top: -5, left: -10, resizeMode: 'contain', width: 100, zIndex: 20}}/>

        <img src={whiteFlower} style={{position: 'absolute', top: 150, left: 20, resizeMode: 'contain', width: 50, transform: 'rotate(-20deg)'}}/>

        <img src={redFlower} style={{position: 'absolute', top: 140, left: 100, resizeMode: 'contain', width: 55, zIndex: 21}}/>

        <img src={leaf1} style={{position: 'absolute', top: 150, left: 70, resizeMode: 'contain', width: 50, zIndex: 20, transform: 'scaleX(-1)'}}/>

        <img src={leaf2} style={{position: 'absolute', top: 50, left: 70, resizeMode: 'contain', width: 50, zIndex: 20, transform: 'rotate(70deg) scaleX(-1)'}}/>

        <img src={leaf3} style={{position: 'absolute', top: 50, left: 200, resizeMode: 'contain', width: 50, zIndex: 20, transform: 'rotate(90deg) scaleX(-1)'}}/>

        <img src={bud1} style={{position: 'absolute', top: 125, left: 200, resizeMode: 'contain', width: 20, zIndex: 20, transform: 'rotate(90deg) scaleX(-1)'}}/>

        <img src={bud1} style={{position: 'absolute', top: 185, left: 180, resizeMode: 'contain', width: 25, zIndex: 20, transform: 'rotate(0deg) scaleX(-1)'}}/>

        <img src={leaf2} style={{position: 'absolute', top: 130, left: -10, resizeMode: 'contain', width: 40, transform: 'rotate(-40deg) scaleX(-1)'}}/>

            <div style={styles.her}>
              <p style={styles.name}>SREELAKSHMY</p>
            </div>

            <div style={styles.his}>
              <p style={styles.name}>SREEJITH</p>
            </div>
        </div>

            <p style={styles.subText}>JAN 7-8, 2018</p>

            <p style={styles.subText}>Parvathi Kalyana Mandapam</p>

            <div style={styles.rsvp}>
              <button type="button" className="btn btn-success">RSVP</button>
            </div>

          </div>

          <div style={styles.reach}>
            <h3>Where?</h3>
            <div style={styles.events}>
              <div style={styles.marriage}>
                <img src="http://192.168.1.8:8000/Nirapara3.png" style={styles.eventChiclet}/>
                <div style={styles.eventGradient}></div>
                <span style={styles.eventTitle}><h4>Marriage</h4></span>
              </div>
              <div style={styles.reception}>
                <img src="http://192.168.1.8:8000/photoid42.jpg" style={styles.eventChiclet}/>
                <div style={styles.eventGradient}></div>
                <span style={styles.eventTitle}><h4>Reception</h4></span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

class App extends Component {
  render() {
    const Comp = Radium(Content);
    return <StyleRoot><Comp/></StyleRoot>;
  }
}

const styles = {
  container: {
    [device.phone]: {
//      height: '100vh',
      // display: 'flex',
      // justifyContent: 'center',
      // flexDirection: 'colu'
      // alignItems: 'center',
    },

    [device.laptop]: {
      width: 800,
    },
  },
  invitation: {
    [device.phone]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
//      backgroundColor: 'white',
//      backgroundColor: 'rgb(214, 187, 110)',
      backgroundColor: 'rgb(244, 192, 175)',
    },
    [device.laptop]: {
      backgroundColor: 'green'
    },
  },
  names: {
    position: 'relative',
    width: 300,
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  her: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 90,
    left: 10,
  },
  his: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: 170,
    left: 10,
  },
  face: {
    marginLeft: 20,
    marginRight: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: '"Helvetica", sans-serif',
    color: 'white',
    zIndex: 10,
    textShadow: '1px 0px 1px rgba(0, 0, 0, 0.5)',
  },
  rsvp: {
  },
  events: {
    width: '100vw',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  marriage: {
    minWidth: 100,
    width: '50vw',
    backgroundImage: 'url(http://127.0.0.1:8000/Nirapara3.png)',
    backgroundSize: 'cover',
    height: 120,
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
  },
  reception: {
    minWidth: 100,
    width: '50vw',
    backgroundImage: 'url(http://127.0.0.1:8000/photoid42.jpg)',
    backgroundSize: 'cover',
    position: 'relative',
    height: 120,
    transition: 'opacity .2s ease-in-out',
    overflow: 'hidden',
    color: 'white',
  },
  eventGradient: {
    backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.2) 0, rgba(5,5,5,0.4) 100%)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50vw',
    minWidth: 100,
    height: 120,
  },
  eventChiclet: {
    width: '50vw',
    height: 120,
  },
  eventTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  subText: {
    color: '#163e3a',
    fontWeight: 'bold',
    borderBottom: '2px solid white',
    fontFamily: '"Monteserrat", sans-serif',
  },
};

export default App;
