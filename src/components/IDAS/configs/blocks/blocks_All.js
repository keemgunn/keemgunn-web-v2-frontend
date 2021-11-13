export default {





  s1_f1_a1_b1: {
    _type: "block",
    serial: "s1-f1-a1-b1",
    name: "block-name",
    type: "quote",
    modals: {
      base: {
        class: [''],
        style: [{
          color: 'red'
        }],
      },
      hover: {
        true: {
          class: 'hover',
          style: {
          }
        }
      },
      touched: {
        true: {
          class: 'touched',
          style: {
            "opacity": "0.6"
          }
        }
      },
    },
    eventTriggers: {
      mouseEnter: {
        method: 'test!',
        data: null
      }
    },
    contents: {
      body: "this is quote block"
    }
  },











// S1 : Intro =========================
  
  // S1 F1 : Page Title ---------------


  // S1 F2 : Motto --------------------
  s1_f2_a1_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-mark4--light']
    }},
    contents: {
      text: "Motto",
    }
  },
  s1_f2_a1_b2: {
    type: "idasMottoText"
  },

  
  // S1 F3 : Resume -------------------
  // A1 ...............................
    // picture of mine  
  // A2 ...............................
  s1_f3_a2_b1: { 
    type: "simpleText",
    modals: { base: {
      class: ['typo-caption1--thick']
    }},
    contents: {
      text: "Gunn Keem (김건)",
    }
  },
  s1_f3_a2_b2: {
    type: "lineVH",
    modals: { base: {
      class: ['line-flex-hor-1']
    }},
  },
  s1_f3_a2_b3: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-caption4']
    }},
    contents: {
      text: "April 6, 1994",
    }
  },
  s1_f3_a2_b4: {
    type: "simpleDictionary",
    modals: { base: {
      class: ['typo-body3'],
      style: [{ gap : '4rem' }]
    }},
    contents: {
      tag: 'address',
      texts: [
        {Adress: 'Nowon-gu, Seoul, South Korea'},
        {Phone: '+82 - 10 - 9362 - 7935'},
        {Email: 'gunnkeem@gmail.com'}
      ],
      heads: [],
      separators: [
        ':' , ':' , ':'
      ],
      links: [
        null, null, 'mailto:gunnkeem@gmail.com'
      ],
      keyClass: [],
      valueClass: []
    }
  },
  // A3 ...............................
  s1_f3_a3_b1: { 
    type: "simpleText",
    modals: { base: {
      class: ['typo-header6']
    }},
    contents: {
      text: "Resume",
    }
  },
  s1_f3_a3_b2: {
    type: "cvItem",
    modals: { base: {
    }},
    contents: {
      title: "EDUCATION",
      records: [
        {
          name: 'Kwangwoon University',
          time: 'Mar 2018 - Feb 2022',
          expected: true,
          description: 'Bachelor of Arts, School of Media and Communication Arts'
        }
      ]
    }
  },
  s1_f3_a3_b3: {
    type: "cvItem",
    modals: { base: {
    }},
    contents: {
      title: "Activities",
      records: [
        {
          name: 'Name Parade 2020',
          time: 'Oct 2020',
          expected: false,
          description: 'Media Art Exibition'
        },
        {
          name: '2nd Daegang Poster Exibition Workshop',
          time: 'Nov 2019',
          expected: false,
          description: 'Graphic Design Workshop'
        },
        {
          name: 'Name Parade 2019',
          time: 'Oct 2019',
          expected: false,
          description: 'Graphic Design Poster Exibition'
        },
      ]
    }
  },
  s1_f3_a3_b4: {
    type: "cvItem",
    modals: { base: {
    }},
    contents: {
      title: "work experience",
      records: [
        {
          name: 'Planit Partners',
          time: 'Jan 2021 - Sep 2021',
          expected: false,
          description: 'Technical Assistant | Database Engineering, Data Visualization'
        }
      ]
    }
  },
  // s1_f3_a3_b5: {
  //   type: "edgeFrame",
  //   modals: { base: {
  //     class: ['typo-header6'],
  //     style: [{
  //       'padding-top': "24rem"
  //     }]
  //   }},
  // },




// S2 : LIFE STORY ====================

  // S2 F1 : title --------------------
  s2_f1_a1_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header2']
    }},
    contents: {
      text: "Attitude toward life",
    }
  },
  s2_f1_a1_b2: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header2--light']
    }},
    contents: {
      text: "Determines",
    }
  },
  s2_f1_a1_b3: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header2--light']
    }},
    contents: {
      text: "Life's attitude toward us.",
    }
  },

  // S2 F2 : First Paragraphs ---------
  s2_f2_a1_b1: {
    type: "quote",
    modals: { base: {
      class: ['typo-caption3--thick']
    }},
    contents: {
      text: "I am the master of my fate : I am the captain of my soul",
    }
  },
  s2_f2_a1_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I want to start my story with the last line of <i>\"Invictus\"</i>. William Ernest, who wrote the poem, lived a hard life. And in his view, my life may be very blessed. But this poem brings a massive impression to my heart and makes me look back on my life. This article is about my attitude toward life. It's a story about me becoming the owner of my life, who was led by fate and had been living a passive life.",
    }
  },



























}