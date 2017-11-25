import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

import logo from './logo.svg';
import './App.css';

const device = {
  phone: '@media only screen and (max-width: 40em)',
  laptop: '@media only screen and (min-width: 1224px)',
};

const purpleFlower = 'https://static.wixstatic.com/media/ea71bb_4afe88d84e374fb293ca75499f61ca11~mv2_d_1463_1253_s_2.png/v1/fill/w_51,h_40,al_c,usm_0.66_1.00_0.01/ea71bb_4afe88d84e374fb293ca75499f61ca11~mv2_d_1463_1253_s_2.png';

const goldenFlower = 'https://static.wixstatic.com/media/ea71bb_51664b73722446b18b9b4f81331b280f~mv2.png/v1/fill/w_60,h_52,al_c,usm_0.66_1.00_0.01/ea71bb_51664b73722446b18b9b4f81331b280f~mv2.png';

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

            <div style={styles.card}>
              <img src={purpleFlower} style={{width: 30, height: 30}} />
              <p style={styles.cardCaption}>Getting Married</p>

              <div style={styles.cardDetails}>
                <div style={styles.cardDate}>
                  <p style={styles.subText}>January 7-8, 2018</p>
                </div>

                <div style={styles.cardVenue}>
                  <p style={styles.cardVenueText}>Parvathi Kalyana Mandapam</p>
                  <p style={styles.cardVenueText}>Surya Resmi Convention Center</p>
                </div>
              </div>

              <div style={styles.rsvp}>
                <button type="button" style={styles.button} className="btn btn-success">RSVP</button>
            </div>

            <p style={styles.buttonSubText}>(Get notified when the photos come out!)</p>
              </div>
          </div>

          <div style={styles.photos}>
            <div style={styles.carouselContainer}>
              <Carousel infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} autoPlay={true}>
                <div><img style={styles.photo} src="http://192.168.1.6:8000/train.jpg"/></div>
                <div><img style={styles.photo} src="http://192.168.1.6:8000/train.jpg"/></div>
              </Carousel>
            </div>
          </div>

          <div style={styles.reach}>
            <div style={styles.section}>
              <h3 style={styles.sectionHeader}>Wedding</h3>
              <p>10.30 AM - 11.00 AM</p>
              <p>Sunday, 7th January 2018</p>
              <p><b>Parvathy Kalyana Mandapam</b></p>
              <p>Palakkad, Kerala</p>
              <iframe frameborder="0" style={styles.map}
src="https://www.google.com/maps/embed/v1/search?q=parvathi+kalyana+palakkad&key= AIzaSyCCcXUdXCHYynGXOman9Sp3rjBQ-jdjNgg" allowfullscreen></iframe>
            </div>
            <div style={styles.section}>
              <h3 style={styles.sectionHeader}>Reception</h3>
              <p>5.00 PM - 8.00 AM</p>
              <p>Monday, 8th January 2018</p>
              <p><b>Surya Resmi Convention Center</b></p>
              <p>Palakkad, Kerala</p>
              <iframe frameborder="0" style={styles.map} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVTPWQ-VtqDsRMmHU1wonj5M&key=AIzaSyCCcXUdXCHYynGXOman9Sp3rjBQ-jdjNgg" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    );
            //     <div style={styles.events}>
            //   <div style={styles.marriage}>
            //     <img src="http://192.168.1.6:8000/Nirapara3.png" ostyle={styles.eventChiclet}/>
            //     <div style={styles.eventGradient}></div>
            //     <span style={styles.eventTitle}><h4>Marriage</h4></span>
            //   </div>
            //   <div style={styles.reception}>
            //     <img src="http://192.168.1.6:8000/photoid42.jpg" style={styles.eventChiclet}/>
            //     <div style={styles.eventGradient}></div>
            //     <span style={styles.eventTitle}><h4>Reception</h4></span>
            //   </div>
            // </div>
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
    },
  },
  invitation: {
    [device.phone]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
//      backgroundColor: '#ceb4ff',
//      backgroundColor: 'rgb(214, 187, 110)',
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'rgb(244, 192, 175)',
    },
    [device.laptop]: {
      display: 'flex',
      height: '100vh',
      backgroundColor: 'rgb(244, 192, 175)',
//      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
      margin: '0 auto',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  names: {
    position: 'relative',
    width: 300 * 1,
    height: 350 * 1,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
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
    fontSize: 45 * 0.9,
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
    marginBottom: 5,
    color: 'black',
    fontSize: 16,
    borderBottom: '2px solid white',
    fontFamily: '"Crimson Text", sans-serif',
  },
  cardCaption: {
    color: 'black',
//    color: '#222222',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
    borderBottom: '2px solid white',
    fontFamily: '"Crimson Text", sans-serif',
  },
  cardVenueText: {
    marginTop: 0,
    marginBottom: 0,
    color: 'black',
    fontSize: 16,
    borderBottom: '2px solid white',
    fontFamily: '"Crimson Text", sans-serif',
  },
  card: {
    [device.phone]: {
      backgroundColor: 'white',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
      marginTop: 0,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 20,
      width: '80vw',
    },
    [device.laptop]: {
      backgroundColor: 'white',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
      marginTop: 20,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 20,
      width: '35em',
    },
  },
  cardDate: {
    [device.phone]: {
      borderBottom: '1px solid #888',
      textAlign: 'center',
    },
    [device.laptop]: {
      borderRight: '1px solid #888',
      paddingRight: 20,
      width: '15em',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
  cardVenue: {
    [device.laptop]: {
      paddingTop: 5,
      paddingBottom: 15,
      paddingLeft: 20,
      width: '15em',
    },
    [device.phone]: {
      paddingTop: 5,
      paddingBottom: 10,
      textAlign: 'center',
    },
  },
  cardDetails: {
    [device.laptop]: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
    },
    [device.phone]: {
    }
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#00cc00',
    borderColor: '#00cc00',
    paddingLeft: 30,
    paddingRight: 30,
  },
  buttonSubText: {
    fontSize: 14,
    fontFamily: '"Crimson Text", sans-serif',
    marginBottom: 0,
  },
  reach: {
    [device.laptop]: {
      padding: 20,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    [device.phone]: {
      padding: 10,
    },
  },
  sectionHeader: {
    fontSize: 30,
    fontFamily: '"Crimson Text", sans-serif',
    //borderBottom: '1px solid #222',
  },
  photos: {
    [device.laptop]: {
      backgroundColor: 'rgb(244, 192, 175)',
      paddingBottom: 40,
    },
    [device.phone]: {
      padding: 0
    }
  },
  carouselContainer: {
    [device.laptop]: {
      margin: '0 auto',
      width: '35em',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
    },
    [device.phone]: {
      width: '100vw',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
    }
  },
  photo: {
    [device.phone]: {
      maxWidth: '100vw',
    },
    [device.laptop]: {
      maxWidth: '35em',
    }
  },
  map: {
    width: "23em",
    height: "23em",
    borderWidth: 0,
  },
  section: {
    [device.laptop]: {
      width: '25em',
    }
  },
};

export default App;
