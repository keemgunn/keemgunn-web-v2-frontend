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
      class: ['line-ver-1']
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
    type: "edgeFrame",
    modals: { base: {
      class: ['typo-header6']
    }},
    contents: {
      text: "Resume",
    }
  },































}