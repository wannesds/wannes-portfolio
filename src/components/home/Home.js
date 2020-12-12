import React from 'react';
import './Home.scss';
import Header from '../Header';
import './Home.scss';
import Home_link from './Home_link';
import Home_animation from './Home_animation';
import Particles from 'react-particles-js';


const Home = () => {

    return(
        <div id="home" className="home-box">
            <Particles className="particles"
            params={{
                "autoPlay": true,
                
                "detectRetina": true,
                "fpsLimit": 30,
                "infection": {
                  "cure": false,
                  "delay": 0,
                  "enable": false,
                  "infections": 0,
                  "stages": []
                },
                "interactivity": {
                  "detectsOn": "canvas",
                  "events": {
                    "onClick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "onDiv": {
                      "selectors": [],
                      "enable": false,
                      "mode": [],
                      "type": "circle"
                    },
                    "onHover": {
                      "enable": true,
                      "mode": "slow",
                      "parallax": {
                        "enable": false,
                        "force": 1,
                        "smooth": 1
                      }
                    },
                    "resize": true
                  },
                  "modes": {
                    "attract": {
                      "distance": 200,
                      "duration": 0.4,
                      "speed": 1
                    },
                    "bounce": {
                      "distance": 100
                    },
                    "bubble": {
                      "distance": 400,
                      "duration": 2,
                      "opacity": 0.8,
                      "size": 40
                    },
                    "connect": {
                      "distance": 80,
                      "links": {
                        "opacity": 0.5
                      },
                      "radius": 60
                    },
                    "grab": {
                      "distance": 400,
                      "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                      }
                    },
                    "light": {
                      "area": {
                        "gradient": {
                          "start": {
                            "value": "#ffffff"
                          },
                          "stop": {
                            "value": "#000000"
                          }
                        },
                        "radius": 1000
                      },
                      "shadow": {
                        "color": {
                          "value": "#000000"
                        },
                        "length": 2000
                      }
                    },
                    "push": {
                      "quantity": 4
                    },
                    "remove": {
                      "quantity": 2
                    },
                    "repulse": {
                      "distance": 50,
                      "duration": 0.4,
                      "speed": 1
                    },
                    "slow": {
                      "factor": 3,
                      "radius": 200
                    },
                    "trail": {
                      "delay": 1,
                      "quantity": 1
                    }
                  }
                },
                "manualParticles": [],
                "motion": {
                  "disable": false,
                  "reduce": {
                    "factor": 4,
                    "value": false
                  }
                },
                "particles": {
                  "bounce": {
                    "horizontal": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.1
                      },
                      "value": 1
                    },
                    "vertical": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.1
                      },
                      "value": 1
                    }
                  },
                  "collisions": {
                    "bounce": {
                      "horizontal": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0.1
                        },
                        "value": 1
                      },
                      "vertical": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0.1
                        },
                        "value": 1
                      }
                    },
                    "enable": false,
                    "mode": "bounce"
                  },
                  "color": {
                    "value": "#25757e",
                    "animation": {
                      "enable": false,
                      "speed": 1,
                      "sync": true
                    }
                  },
                  "life": {
                    "count": 0,
                    "delay": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0
                      },
                      "value": 0,
                      "sync": false
                    },
                    "duration": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.0001
                      },
                      "value": 0,
                      "sync": false
                    }
                  },
                  "links": {
                    "blink": false,
                    "color": {
                      "value": "#ffffff"
                    },
                    "consent": false,
                    "distance": 150,
                    "enable": true,
                    "frequency": 1,
                    "opacity": 0.4,
                    "shadow": {
                      "blur": 5,
                      "color": {
                        "value": "#00ff00"
                      },
                      "enable": false
                    },
                    "triangles": {
                      "enable": false,
                      "frequency": 1
                    },
                    "width": 1,
                    "warp": false
                  },
                  "move": {
                    "angle": {
                      "offset": 45,
                      "value": 90
                    },
                    "attract": {
                      "enable": false,
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "direction": "none",
                    "distance": 0,
                    "enable": true,
                    "gravity": {
                      "acceleration": 9.81,
                      "enable": false,
                      "maxSpeed": 50
                    },
                    "noise": {
                      "delay": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 0
                      },
                      "enable": false
                    },
                    "outModes": {
                      "default": "out",
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "random": false,
                    "size": false,
                    "speed": 2,
                    "straight": false,
                    "trail": {
                      "enable": false,
                      "length": 10,
                      "fillColor": {
                        "value": "#000000"
                      }
                    },
                    "vibrate": false,
                    "warp": false
                  },
                  "number": {
                    "density": {
                      "enable": true,
                      "area": 800,
                      "factor": 1000
                    },
                    "limit": 0,
                    "value": 80
                  },
                  "opacity": {
                    "random": {
                      "enable": true,
                      "minimumValue": 0.1
                    },
                    "value": 0.5,
                    "animation": {
                      "enable": true,
                      "minimumValue": 0.1,
                      "speed": 3,
                      "sync": false
                    }
                  },
                  "reduceDuplicates": false,
                  "rotate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0,
                    "animation": {
                      "enable": false,
                      "speed": 0,
                      "sync": false
                    },
                    "direction": "clockwise",
                    "path": false
                  },
                  "shadow": {
                    "blur": 0,
                    "color": {
                      "value": "#000000"
                    },
                    "enable": false,
                    "offset": {
                      "x": 0,
                      "y": 0
                    }
                  },
                  "shape": {
                    "options": {
                      "polygon": {
                        "nb_sides": 5
                      },
                      "star": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                        "width": 60,
                        "height": 60
                      },
                      "images": {
                        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                        "width": 60,
                        "height": 60
                      }
                    },
                    "type": "circle"
                  },
                  "size": {
                    "random": {
                      "enable": true,
                      "minimumValue": 1
                    },
                    "value": 5,
                    "animation": {
                      "destroy": "none",
                      "enable": true,
                      "minimumValue": 0.1,
                      "speed": 20,
                      "startValue": "max",
                      "sync": false
                    }
                  },
                  "stroke": {
                    "width": 0,
                    "color": {
                      "value": "#000000",
                      "animation": {
                        "enable": false,
                        "speed": 1,
                        "sync": true
                      }
                    }
                  },
                  "twinkle": {
                    "lines": {
                      "enable": true,
                      "frequency": 0.01,
                      "opacity": 1,
                      "color": {
                        "value": "#10c286"
                      }
                    },
                    "particles": {
                      "enable": true,
                      "frequency": 0.05,
                      "opacity": 1,
                      "color": {
                        "value": "#10c286"
                      }
                    }
                  }
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": false,
                "themes": []
              }}
              />
            <Header/> 
            <Home_animation className="animation"/>
            
            <div className="home-nav">
                <Home_link icon="〈〉" type="code"/>
                <Home_link icon="｛｝" type="design"/>
                <Home_link icon="〔〕" type="art"/>
            </div>
            
        </div>
    )
}

export default Home;