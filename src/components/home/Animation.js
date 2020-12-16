import React from 'react';
import Particles from 'react-particles-js';


const Animation = () => {

    return(
            <Particles className="particles" 
            params={{

                "autoPlay": true,
                
                "detectRetina": false,
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
                      "mode": "trail"
                    },
                    "onDiv": {
                      "selectors": [],
                      "enable": false,
                      "mode": [],
                      "type": "circle"
                    },
                    "onHover": {
                      "enable": true,
                      "mode": "repulse",
                      "parallax": {
                        "enable": true,
                        "force": 20,
                        "smooth": 20
                      }
                    },
                    "resize": true
                  },

                  "modes": {
                    "attract": {
                      "distance": 600,
                      "duration": 1,
                      "speed": 0.8
                    },
                    "bounce": {
                      "distance": 100
                    },
                    "bubble": {
                      "distance": 300,
                      "duration": 1.5,
                      "opacity": 0.3,
                      "size": 6
                    },
                    "connect": {
                      "distance": 60,
                      "links": {
                        "opacity": 0.05
                      },
                      "radius": 30
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
                            "value": "rgba(52, 55, 55, 0.1)"
                          },
                          "stop": {
                            "value": "rgba(52, 55, 55, 0.1)"
                          }
                        },
                        "radius": 0
                      },
                      "shadow": {
                        "color": {
                          "value": "rgba(24, 88, 74, 0.1)"
                        },
                        "length": 5
                      }
                    },
                    "push": {
                      "quantity": 2
                    },
                    "remove": {
                      "quantity": 100
                    },
                    "repulse": {
                      "distance": 150,
                      "duration": 3,
                      "speed": 0.1
                    },
                    "slow": {
                      "factor": 5,
                      "radius": 200
                    },
                    "trail": {
                      "delay": 0.1,
                      "quantity": 1
                    }
                  }
                },

                "manualParticles": [],
                "motion": {
                  "disable": false,
                  "reduce": {
                    "factor": 1,
                    "value": false
                  }
                },

                "particles": {
                  "bounce": {
                    "horizontal": {
                      "random": {
                        "enable": true,
                        "minimumValue": 0.2
                      },
                      "value": 1
                    },
                    "vertical": {
                      "random": {
                        "enable": true,
                        "minimumValue": 0.2
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
                    "value": "#257574",
                    "animation": {
                      "enable": true,
                      "speed": 0.9,
                      "sync": true
                    }
                  },
                  "life": {
                    "count": 0,
                    "delay": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.001
                      },
                      "value": 0,
                      "sync": false
                    },
                    "duration": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.0001
                      },
                      "value": 15,
                      "sync": false
                    }
                  },

                  "links": {
                    "blink": true,
                    "color": {
                      "value": "#136952"
                    },
                    "consent": true,
                    "distance": 150,
                    "enable": true,
                    "frequency": 0.6,
                    "opacity": 0.4,
                    "shadow": {
                      "blur": 0,
                      "color": {
                        "value": "#00ff00"
                      },
                      "enable": false
                    },
                    "triangles": {
                      "enable": false,
                      "frequency": 0.5
                    },
                    "width": 1,
                    "warp": false
                  },

                  "move": {
                    "angle": {
                      "offset": 45,
                      "value": 10
                    },
                    "attract": {
                      "enable": false,
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "direction": "random",
                    "distance": 200,
                    "enable": true,
                    "gravity": {
                      "acceleration": 9.81,
                      "enable": false,
                      "maxSpeed": 10
                    },
                    "noise": {
                      "delay": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0.1
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
                    "random": true,
                    "size": false,
                    "speed": 10,
                    "straight": true,
                    "trail": {
                      "enable": false,
                      "length": 0.02,
                      "fillColor": {
                        "value": "10c286"
                      }
                    },
                    "vibrate": false,
                    "warp": false
                  },
                  "number": {
                    "density": {
                      "enable": false,
                      "area": 800,
                      "factor": 0.1
                    },
                    "limit": 100,
                    "value": 100
                  },
                  "opacity": {
                    "random": {
                      "enable": true,
                      "minimumValue": 0.1
                    },
                    "value": 0.3,
                    "animation": {
                      "enable": true,
                      "minimumValue": 0.15,
                      "speed": 1,
                      "sync": false
                    }
                  },
                  "reduceDuplicates": true,
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
                    "blur": 2,
                    "color": {
                      "value": "#10c286"
                    },
                    "enable": false,
                    "offset": {
                      "x": 0.1,
                      "y": 0.1
                    }
                  },
                  "shape": {
                    "options": {
                      "polygon": {
                        "nb_sides": 6
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
                    "value": 3,
                    "animation": {
                      "destroy": "none",
                      "enable": true,
                      "minimumValue": 0.1,
                      "speed": 10,
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
                      "frequency": 0.001,
                      "opacity": 0.6,
                      "color": {
                        "value": "#10c286"
                      }
                    },
                    "particles": {
                      "enable": true,
                      "frequency": 0.01,
                      "opacity": 0.6,
                      "color": {
                        "value": "#10c286"
                      }
                    }
                  }
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": false,
                "themes": []
              }} />
    )
}

export default Animation;