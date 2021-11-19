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
        {Email: '<a href="mailto:gunnkeem@gmail.com" target="_blank">gunnkeem@gmail.com</a>'}
      ],
      heads: [],
      separators: [
        ':' , ':' , ':'
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
  // A1 ...............................
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
  // A1 ...............................
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
  // A2 ...............................
  // A3 ...............................
  s2_f1_a3_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header6']
    }},
    contents: {
      text: "I just followed my life",
    }
  },
  s2_f2_a3_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "My beginning was not good. At 19, I took the test with a high fever on the CSAT(College Scholastic Ability Test). The result was so terrible that I had never gotten such a bad score. Despite the efforts of the past few years, it was unacceptable for my future to be determined in a single day's condition. Fate was tyrannic, and I felt so small in front of it. I became pessimistic. I had to challenge the test one more time, but I couldn't. I was afraid of failing again like before I did, no matter how hard I prepare for the test. I entered a school where I could go with a much lower score.",
    }
  },
  s2_f2_a3_b3: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I didn't even have any interests in my major. I lived loosely for a while, just followed my life in a passive attitude. A year after, I went to the army. In such a disconnected environment like a military base, many thoughts come to mind. And most of my thoughts were 'what if's. What if I took the test again? What if I tried harder for my dream? I had all kinds of thoughts, but I couldn't act anything. I felt so distressed by just letting go of my early twenties. Then I realized that I was the same 'do nothing guy' outside the duty. I did barely anything that helps for my future even before joining the army. Until then, I have been bound to fate and dragged around. <i>(fig. 1)</i>",
    }
  },

  // S2 F3 : I couldn't stay the same 1
  // A1 ...............................
  s2_f3_a1_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header6']
    }},
    contents: {
      text: "I couldn't stay the same",
    }
  },
  s2_f3_a1_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I didn’t want to live like this anymore. I asked myself about my dreams. What do I want to do? The answer was about creating things. I had an old wish related to art and design, and I also wanted to go to art college. I've always been fascinated by the value of visual beauty, and I wanted to have a job in creating and producing beautiful things.",
    }
  },
  
  // S2 F4 : I couldn't stay the same 2
  // A1 ...............................
  s2_f4_a1_b1: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "When I was preparing for CSAT again in 2017.",
      showAlt: true,
      zoom: true
    }
  },
  // A2 ...............................
  s2_f4_a2_b1: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "After being discharged from the military, I decided to take the CSAT again. I had to correct my life with the responsibility to myself. But I didn't have much time to prepare for the entrance exam for art colleges. Therefore, instead of art college, I studied with the goal of a similar academic field. It wasn't an easy decision to prepare for college at the age of 24, but I didn't want to live my life as it is.",
    }
  },
  s2_f4_a2_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I couldn't make a big request like a private cram school to my parents, so I studied alone through online lectures with my money. The eight months of preparation were the harshest in my life. It was so hard, not only because of studying alone but also because of many doubts about my choice. But eventually, I passed the school that I am currently attending. It wasn't the best result, but I received a one-year tuition fee with a scholarship for excellent grades when I entered the school.",
    }
  },
  s2_f4_a2_b3: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "It was the first time I resisted fate. Otherwise, I would have been worried about my future while attending a school and major that I was not interested in. Ironically, the CSAT, which brought me to huge pain a few years ago, was an opportunity to encourage me. <strong>Then I realized that I could always make my own decision against fate. <i>(fig. 2)</i></strong>",
    }
  },

  // S3 F1 : This is the new me -------
  // A1 ...............................
  s3_f1_a1_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header6']
    }},
    contents: {
      text: "This is the new me",
    }
  },
  s3_f1_a1_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "After entering the second school, I'm trying to live actively and meaningfully without blaming fate.<br>I felt like I was free from any suppressions. I was going to do everything I wanted to do.<br><b>My dream is about creating things. So I started to resolve my desire for creation that I've been always put off for various reasons.<b>",
    }
  },


  // S3 F2 : Arts & Graphic Design ----
  // A1 ...............................
  s3_f2_a1_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header4--light']
    }},
    contents: {
      text: "Fine ARts",
    }
  },
  s3_f2_a1_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "Even though I didn't major in art, I started studying and creating works alone. I drew whatever I wanted, searching and learning over the internet. <strong>It was so much fun to create works with my intentions from beginning to end.</strong>",
    }
  },
  // s3_f2_a1_b3: {
  //   type: "edgeFrame",
  //   modals: { base: {
  //     class: ['typo-header6'],
  //     style: [{
  //       'padding-top': "24rem"
  //     }]
  //   }},
  // },
  // A2 ...............................
  s3_f2_a2_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header4--light']
    }},
    contents: {
      text: "Graphic designs",
    }
  },
  s3_f2_a2_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I studied graphic design through school classes and self-study. At the school dormitory, where I worked a part-time job, I produced graphic design posters for dormitory events. I also participated in several exhibitions with other designers gathered through SNS. Before the pandemic broke out, we met and talked about design. <strong>After years like this, creation has become a part of my life.</strong>",
    }
  },
  // s3_f2_a2_b3: {
  //   type: "edgeFrame",
  //   modals: { base: {
  //     class: ['typo-header6'],
  //     style: [{
  //       'padding-top': "24rem"
  //     }]
  //   }},
  // },
  // A3 ...............................
  s3_f2_a3_b1: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Gaze, 2019",
      showAlt: false,
    }
  },
  s3_f2_a3_b2: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Gaze, 2019",
      showAlt: false,
    }
  },
  s3_f2_a3_b3: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Gaze, 2019",
      showAlt: false,
    }
  },
  // A4 ...............................
  s3_f2_a4_b1: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Name Parade 2019, Poster design, 2019",
      showAlt: false,
    }
  },
  s3_f2_a4_b2: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Map Design 2020, Poster design, 2020",
      showAlt: false,
    }
  },
  s3_f2_a4_b3: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Poster design for school dormitory, 2019",
      showAlt: false,
    }
  },

  // S3 F3 : I enjoy self-teaching ----
  s3_f3_a1_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header6']
    }},
    contents: {
      text: "I enjoy self-teaching",
    }
  },

  // S3 F4 : Software Engineering -----
  // A1 ...............................
  s3_f4_a1_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header4--light']
    }},
    contents: {
      text: "Software Engineering",
    }
  },
  s3_f4_a1_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I start studying with a great interest in software development. Developing software is also a creation, which has its own creator's intentions. Although I didn't major in computer science, I also self-taught software engineering through the internet. Started with simple programs, I've been extending my limits of what I can create. I created a web application for my colleagues at the school dormitory. <strong>I was so happy that my work could provide actual help to people.</strong>",
    }
  },
  // s3_f4_a1_b3: {
  //   type: "edgeFrame",
  //   modals: { base: {
  //     class: ['typo-header6'],
  //     style: [{
  //       'padding-top': "24rem"
  //     }]
  //   }},
  // },
  // A2 ...............................
  s3_f4_a2_b1: {
    type: "imageContainer",
    modals: { base: {
      class: ['text-right']
    }},
    contents: {
      ext: 'png',
      alt: "Bitsol Dormitory Student Management.<br>code: <a href='https://github.com/keemgunn/bitsol' target='_blank'>https://github.com/keemgunn/bitsol</a>",
      showAlt: true,
    }
  },
  // A3 ...............................
  s3_f4_a3_b1: {
    type: "simpleText",
    modals: { base: {
      class: ['typo-header4--light']
    }},
    contents: {
      text: "Design + Code",
    }
  },
  s3_f4_a3_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I found that combining graphic design and software engineering can create amazing things. I decided to have my own unique identity by building skills in those two fields.",
    }
  },
  s3_f4_a3_b3: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "I made media art in form of a website for a graphic design exhibition. From planning and design to development, there were many things to pay attention to in a short period. But <strong>I enjoyed building something from the bottom.</strong>",
    }
  },
  // s3_f4_a3_b4: {
  //   type: "edgeFrame",
  //   modals: { base: {
  //     class: ['typo-header6'],
  //     style: [{
  //       'padding-top': "24rem"
  //     }]
  //   }},
  // },
  // A4 ...............................
  s3_f4_a4_b1: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Netflix Original Ozark Inspired Watchface Web App",
      showAlt: true,
    }
  },
  s3_f4_a4_b2: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Netflix Original Ozark Inspired Watchface Web App",
      showAlt: false,
    }
  },
  // A5 ...............................
  s3_f4_a5_b1: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Name Parade 2020 Media Art Exibition",
      showAlt: true,
    }
  },
  s3_f4_a5_b2: {
    type: "imageContainer",
    modals: { base: {
    }},
    contents: {
      ext: 'png',
      alt: "Name Parade 2020 Media Art Exibition",
      showAlt: false,
    }
  },
  s3_f4_a5_b3: {
    type: "imageContainer",
    modals: { base: {
      class: ['text-right'],
      style: [{'flex-direction' : 'column-reverse'}]
    }},
    contents: {
      ext: 'png',
      alt: "Name Parade 2020 Media Art Exibition<br>code: <a href='https://github.com/keemgunn/keemgunn.com---frontend' target='_blank'>https://github.com/keemgunn/keemgunn.com---frontend</a>",
      showAlt: true,
    }
  },














































}