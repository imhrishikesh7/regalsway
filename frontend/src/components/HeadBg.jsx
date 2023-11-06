import BgImage from '../images/plexus_bg.jpg';
import React from 'react';
import '../App.css';
// import { useLocation } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeadBg() {
  // const location = useLocation();

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <div style={{ position: 'relative', height: '90vh' }}>
      
      

      {/* Header Banner */}
      <div
        style={{
          height: '90vh',
          width: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.4)',
          marginTop: '0',
          background: `url(${BgImage})  center / cover no-repeat`,
          position: 'relative',
        }}
      >
        {/* <h3
            position: 'absolute',
            bottom: '20px', // Adjust this value to set the margin below the text
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white', // Change the color to gray
          }}
        >
          Research Elite {location.pathname}
        </h3> */}
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          "fullScreen": {
              
              "zIndex": 1
          },
          "particles": {
              "number": {
                  "value": 80,
                  "density": {
                      "enable": true,
                      "value_area": 1200
                  }
              },
              "color": {
                  "value": "#fff"
              },
              "shape": {
                  "type": "circle",
                  "options": {
                      "sides": 10
                  }
              },
              "opacity": {
                  "value": 0.4,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 4,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "rotate": {
                  "value": 0,
                  "random": true,
                  "direction": "clockwise",
                  "animation": {
                      "enable": true,
                      "speed": 5,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.5,
                  "width": 2
              },
              "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "fpsLimit": 60,
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  },
                  "onclick": {
                      "enable": false,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 300,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 200,
                      "size": 10,
                      "duration": 2,
                      "opacity": 10,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true,
          "background": {
              "color": "transperent",
              "image": {
                "src": {BgImage}
              },
              "position": "50% 50%",
              "repeat": "no-repeat",
              // "size": "cover"
          }  
        }}
        style={{ position: 'fixed',
         top: 0, 
         left: 0, 
         width: '100%', 
         height: '100%', 
         zIndex: -1 
        }}
      />
      
      </div>
      
    </div>
  );
}
