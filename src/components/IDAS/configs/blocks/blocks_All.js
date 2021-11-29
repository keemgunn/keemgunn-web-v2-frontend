export default {

  // s1_f1_a1_b1: {
  //   _type: "block",
  //   serial: "s1-f1-a1-b1",
  //   name: "block-name",
  //   type: "quote",
  //   modals: {
  //     base: {
  //       class: [''],
  //       style: [{
  //         color: 'red'
  //       }],
  //     },
  //     hover: {
  //       true: {
  //         class: 'hover',
  //         style: {
  //         }
  //       }
  //     },
  //     touched: {
  //       true: {
  //         class: 'touched',
  //         style: {
  //           "opacity": "0.6"
  //         }
  //       }
  //     },
  //   },
  //   eventTriggers: {
  //     mouseEnter: {
  //       method: 'test!',
  //       data: null
  //     }
  //   },
  //   contents: {
  //     body: "this is quote block"
  //   }
  // },




// S1 : Intro =========================

// S1 F1 : Page Title ---------------

s1_f1_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header5 text-center']
  }},
  contents: {
    text: "ADMISSION ESSAY FOR IDAS",
  }
},

// S1 F2 : Motto --------------------

s1_f2_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-mark4--light'],
    style: [{
      width: 'fit-content'
    }]
  }},
  contents: {
    text: "Motto",
  }
},

s1_f2_a2_b1: {
  type: "idasMottoText"
},

// S1 F3 : My Profile --------------------
s1_f3_a1_b1: {
  type: 'imageContainer',
  modals: { base: {
    class: ['']
  }},
  contents: {
    ext: 'png',
    alt: `me`,
    showAlt: false,
    zoom: false,
    border: '1rem solid var(--ink4)',
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

s1_f3_a3_b1: { 
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-header6 gap14']
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

// S1 F4 : Dear Professors, --------------------
s2_f1_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header4--light']
  }},
  contents: {
    text: "Dear professors,",
  }
},
s2_f1_a1_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I'm writing this letter to find an opportunity at IDAS.<br>My name is Gunn Keem, and I'm very happy to introduce myself.",
  }
},
s2_f1_a1_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "First of all, I appreciate you for taking the time to read my story.<br>Until I made this decision, I had many insights into myself and considerations about my career path. <br>If you can deliver me the good news, this will significantly change the direction of my life.<br>Otherwise, even if we don't have a further relationship, I hope my story will inspire you at least a little bit.",
  }
},


// S2 : LIFE STORY ====================

// S2 F1 : title --------------------
s2_f2_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header5 safe-padding-sides']
  }},
  contents: {
    text: "I. My life story",
  }
},
s2_f2_a1_b2: {
  type: "lineVH",
  modals: { base: {
    class: ['line-flex-hor-1']
  }},
},
s2_f2_a1_b3: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header2--light safe-padding-sides'],
    style: [{
      'padding-top': '4rem'
    }]
  }},
  contents: {
    text: "<b>Attitude toward life</b><br>Determines<br>Life's attitude toward us.",
  }
},



// S2 F2 : First Paragraphs ---------
// A1 ...............................
s2_f3_a1_b1: {
  type: "quote",
  modals: { base: {
    class: ['typo-caption3--thick gap18']
  }},
  contents: {
    line: 3,
    text: "I am the master of my fate : I am the captain of my soul",
  }
},
s2_f3_a1_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I want to start my story with the last line of <i>\"Invictus\"</i>. William Ernest, who wrote the poem, lived a hard life. And in his view, my life may be very blessed. But this poem brings a massive impression to my heart and makes me look back on my life. This article is about my attitude toward life. It's a story about me becoming the owner of my life, who was led by fate and had been living a passive life.",
  }
},
// A2 ...............................
s2_f3_a2_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-caption5--thick gap12 italic']
  }},
  contents: {
    text: "&lt;fig 1. I just followed the act of fate.&gt;",
  }
},
// A3 ...............................
s2_f3_a3_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header6']
  }},
  contents: {
    text: "I Just Followed my life",
  }
},
s2_f3_a3_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "My beginning was not good. At 19, I took the test with a high fever on the CSAT(College Scholastic Ability Test). The result was so terrible that I had never gotten such a bad score. Despite the efforts of the past few years, it was unacceptable for my future to be determined in a single day's condition. Fate was tyrannic, and I felt so small in front of it. I became pessimistic. I had to challenge the test one more time, but I couldn't. I was afraid of failing again like before I did, no matter how hard I prepare for the test. I entered a school where I could go with a much lower score.",
  }
},
s2_f3_a3_b3: {
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
s2_f4_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header6']
  }},
  contents: {
    text: "I couldn't stay the same",
  }
},
s2_f4_a1_b2: {
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
s2_f5_a1_b1: {
  type: "imageContainer",
  modals: {
    base: {
      class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: "When I was preparing for CSAT again in 2017.",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
// A2 ...............................
s2_f5_a2_b1: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "After being discharged from the military, I decided to take the CSAT again. I had to correct my life with the responsibility to myself. But I didn't have much time to prepare for the entrance exam for art colleges. Therefore, instead of art college, I studied with the goal of a similar academic field. It wasn't an easy decision to prepare for college at the age of 24, but I didn't want to live my life as it is.",
  }
},
s2_f5_a2_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I couldn't make a big request like a private cram school to my parents, so I studied alone through online lectures with my money. The eight months of preparation were the harshest in my life. It was so hard, not only because of studying alone but also because of many doubts about my choice. But eventually, I passed the school that I am currently attending. It wasn't the best result, but I received a one-year tuition fee with a scholarship for excellent grades when I entered the school.",
  }
},
s2_f5_a2_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "It was the first time I resisted fate. Otherwise, I would have been worried about my future while attending a school and major that I was not interested in. Ironically, the CSAT, which brought me to huge pain a few years ago, was an opportunity to encourage me. <strong>Then I realized that I could always make my own decision against fate. <i>(fig. 2)</i></strong>",
  }
},
s2_f5_a3_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-caption5--thick gap12']
  }},
  contents: {
    text: "<i>&lt;fig 2. I can make my own decision.&gt;</i>",
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


// S3 F2 : Fine Arts -------------

// A1 ...............................
s3_f2_a1_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-header4--light gap16']
  }},
  contents: {
    text: "Fine ARt",
  }
},
s3_f2_a1_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2'],
    style: [{
      "padding": "0 0 80rem 30rem",
      "width" : "calc(100vw * (7/18))",
    }]
  }},
  contents: {
    text: "Even though I didn't major in art, I started studying and creating works alone. I drew whatever I wanted, searching and learning over the internet. <strong>It was so much fun to create works with my intentions from beginning to end.</strong>",
  }
},

// A2 ...............................
s3_f2_a2_b1: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Gaze IV, 2019",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f2_a2_b2: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Gaze III, 2019",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f2_a2_b3: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Gaze II, 2019",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f2_a2_b4: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Gaze I, 2018",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},


// S3 F3 : Graphic Design --------
// A1 ...............................
s3_f3_a1_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-header4--light gap16']
  }},
  contents: {
    text: "Graphic design",
  }
},
s3_f3_a1_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2'],
    style: [{
      "padding": "0 0 88rem 30rem",
      "width" : "calc(100vw * (7/18))",
    }]
  }},
  contents: {
    text: "I studied graphic design through school classes and self-study. At the school dormitory, where I worked a part-time job, I produced graphic design posters for dormitory events. I also participated in several exhibitions with other designers gathered through SNS. Before the pandemic broke out, we met and talked about design. <strong>After years like this, creation has become a part of my life.</strong>",
  }
},
// A2 ...............................
s3_f3_a2_b1: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Name Parade 2019, Poster design, 2019",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f3_a2_b2: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "A poster design for school dormitory, 2018",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f3_a2_b3: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Map Design 2020, Poster design, 2020",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
// A3 ...............................
s3_f3_a3_b1: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Map Design 2021, Poster design, 2021",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f3_a3_b2: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "A poster design for school dormitory, 2019",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
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
  type: "lineVH",
  modals: { base: {
    class: ['line-flex-hor-1']
  }},
},
s3_f4_a1_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I start studying with a great interest in software development. Developing software is also a creation, which has its own creator's intentions. Although I didn't major in computer science, I also self-taught software engineering through the internet. Started with simple programs, I've been extending my limits of what I can create. I created a web application for my colleagues at the school dormitory. <strong>I was so happy that my work could provide actual help to people.</strong>",
  }
},
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
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},



// S3 F5 : Design + Code --------
// A1 ...............................
s3_f5_a1_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-header4--light gap16']
  }},
  contents: {
    text: "Design + Code",
  }
},
s3_f5_a1_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2'],
    style: [{
      "padding": "0 0 0 30rem",
      "width" : "calc(100vw * (7/18))",
    }]
  }},
  contents: {
    text: "I found that combining graphic design and software engineering can create amazing things. I decided to have my own unique identity by building skills in those two fields.",
  }
},
s3_f5_a1_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2'],
    style: [{
      "padding": "0 0 100rem 24rem",
      "width" : "calc(100vw * (7/18))",
    }]
  }},
  contents: {
    text: "I made media art in form of a website for a graphic design exhibition. From planning and design to development, there were many things to pay attention to in a short period. But <strong>I enjoyed building something from the bottom.</strong>",
  }
},
// A2 ...............................
s3_f5_a2_b1: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Name Parade 2020 Media Art Exibition",
    showAlt: false,
    zoom: false,
    border: '',
  }
},
s3_f5_a2_b2: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Name Parade 2020 Media Art Exibition",
    showAlt: false,
    zoom: false,
    border: '',
  }
},
s3_f5_a2_b3: {
  type: "imageContainer",
  modals: { base: {
    class: ['text-right'],
  }},
  contents: {
    ext: 'png',
    alt: "Name Parade 2020 Media Art Exibition<br>code: <a href='https://github.com/keemgunn/keemgunn.com---frontend' target='_blank'>https://github.com/keemgunn/keemgunn.com---frontend</a>",
    showAlt: true,
    zoom: false,
    border: '',
  }
},
// A3 ...............................
s3_f5_a3_b1: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Netflix Original Ozark Inspired Watchface Web App",
    showAlt: false,
    zoom: false,
    border: '',
  }
},
s3_f5_a3_b2: {
  type: "imageContainer",
  modals: { base: {
  }},
  contents: {
    ext: 'png',
    alt: "Netflix Original Ozark Inspired Watchface Web App",
    showAlt: true,
    zoom: false,
    border: '',
  }
},



// S3 F6 : Graphic Design --------
// A1 ...............................
s3_f6_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header6']
  }},
  contents: {
    text: "My first time at work",
  }
},
s3_f6_a1_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I had an internship opportunity at an IT company and worked for eight months. It was my first job, and it was hard. But it was an opportunity to grow fast in a short time. I thought that companies don't usually assign big tasks to interns, but I had a lot of works. The last project I worked on was for a pharmaceutical company, Celltrion. And the project was designed and produced by me.",
  }
},
// A2 ...............................
s3_f6_a2_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header4--light']
  }},
  contents: {
    text: "Data Visualization",
  }
},
s3_f6_a2_b2: {
  type: "lineVH",
  modals: { base: {
    class: ['line-flex-hor-1']
  }},
},
s3_f6_a2_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "Planit Partners, the company that I worked at this year, is a company that provides solutions for data visualizations. Many companies are still managing their big data with just spreadsheets like Excel. Most of my work at this company was about improving customers' data managing processes, and visualize their data.",
  }
},
s3_f6_a2_b4: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "There is a saying that \"data is the new oil.\" Data visualization changes this crude oil to power that helps us. It guides companies to derive insights and make strategic plans. I experienced many practical works from data modeling to ETL(Extract, Transform, Load) and data visualization.",
  }
},
// A3 ...............................
s3_f6_a3_b1: {
  type: "imageContainer",
  modals: {
    base: {
      class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: "Project for client - Database, Data-mart design",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f6_a3_b2: {
  type: "imageContainer",
  modals: {
    base: {
      class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: "Project for client - Data management flow design",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},

// A4 ...............................
s3_f6_a4_b1: {
  type: "imageContainer",
  modals: {
    base: {
      class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: "Project for client - Data Visualization Dashboard",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f6_a4_b2: {
  type: "imageContainer",
  modals: {
    base: {
      class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: "Project for client - Data Visualization Dashboard",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
s3_f6_a4_b3: {
  type: "imageContainer",
  modals: {
    base: {
      class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: "Project for client - Data Visualization Dashboard",
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},



// S3 F7 : Moving on to --------
// A1 ...............................
s3_f7_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header6']
  }},
  contents: {
    text: "Moving on to the next chapter",
  }
},
s3_f7_a1_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I've had many activities over the past four years, and a lot of good opportunities have come this year. Particularly, the company I worked for this year proposed to me the contract of a full-time employee. Since I determined to live my life actively, fate has helped me. I'm not bound in my fate, and I'm not fighting against fate either. <strong>Above all, 'fate' itself isn't means my life itself. It is me and my fate together who write my life story. And writing my story is the process of compromising with fate.</strong> <b><i>(fig. 3)</b></i>",
  }
},
s3_f7_a1_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "Sometimes fate is stubborn and unhelpful. Nonetheless, if I try to write my story actively, fate may help me. Sometimes life goes my way, sometimes it doesn't. <strong>But what matters is the fact that I am holding a pen.</strong>",
  }
},
s3_f7_a1_b4: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "And now, I'm going to write the next chapter of my life. An appealing opportunity to start a career has come, but I want to go further without being complacent. I would venture to turn my life closer to my dream. I don't know if it's too late, but it doesn't matter. It may have been fate's desire to take a long time to get here. I think it's time to take what I want. As the master of my life, I am trying to change the direction of life once again. I hope you can help me achieve my dream. Thank you.",
  }
},
// A2 ...............................
s3_f7_a2_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-caption5--thick gap12']
  }},
  contents: {
    text: "<i>&lt;fig 3. It is me and my fate together who write my life story.&gt;</i>",
  }
},



// S4 F1 : Why Design? --------
// A1 ...............................
s4_f1_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header3 safe-padding-sides']
  }},
  contents: {
    text: "Why Design?",
  }
},
s4_f1_a1_b2: {
  type: "lineVH",
  modals: { base: {
    class: ['line-flex-hor-1']
  }},
},
// A2 ...............................
s4_f1_a2_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header6']
  }},
  contents: {
    text: "Pursuing Value",
  }
},
s4_f1_a2_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I have been fascinated by beautiful things since I was a child. Graphic design, art, architecture, furniture: those things are all about beauty. The reason why I want to do designs is that it is an act of pursuing beauty. But I'm not saying that design is about just making aesthetic things. Beauty has another facet except for aesthetics. Value is another essence of beauty. <i>(fig. 4)</i>",
  }
},
s4_f1_a2_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "We feel much bigger beauty in something that implies numerous endeavors and values within them. Dancer's beautiful gestures contain countless times of patience. Numerous people are still working right now to make beautiful products that enrich our lives. Even the beautiful sunset has its value inside. Looking at the red sunset has a positive effect on the brain and helps stabilize the sleep cycle. Sometimes I feel beauty in polished and elaborated algorithms in computer science.",
  }
},
s4_f1_a2_b4: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I would venture to say that 'valuable' and 'beautiful' are not separate. Design is the process of creating value and pursuit of beauty. <strong>Create beautiful things that can contribute to people's lives: that's what I want to do through design.</strong>",
  }
},
// A3 ...............................
s4_f1_a3_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-caption5--thick gap12']
  }},
  contents: {
    text: "<i>&lt;fig 4. Beauty has another facet except for aesthetics&gt;</i>",
  }
},



// S4 F2 : Why Softeware Engineering? --------
// A1 ...............................
s4_f2_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header3 safe-padding-sides']
  }},
  contents: {
    text: "Why Software Engineering?",
  }
},
s4_f2_a1_b2: {
  type: "lineVH",
  modals: { base: {
    class: ['line-flex-hor-1']
  }},
},
// A2 ...............................
s4_f2_a2_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header6']
  }},
  contents: {
    text: "Both How It LOOks, and how it woRks",
  }
},
s4_f2_a2_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I started studying software engineering in 2019, just two years ago. The main reason I started software engineering was due to Italian designer Riccardo Falcinelli. Let me bring some lines from his book.",
  }
},
// A3 ...............................
s4_f2_a3_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-caption5--thick gap12']
  }},
  contents: {
    text: "<i>Riccardo Falcinelli, &lt;Critica portatile al visual design&gt;, 2014</i>",
  }
},
s4_f2_a3_b2: {
  type: "quote",
  modals: { base: {
    class: ['typo-body2 gap12'],
    style: [{
      padding: "0 0 0 30rem",
      width : "calc(((100vw + var(--safe-margin)) * (5/10)) - var(--safe-margin))",
    }]
  }},
  contents: {
    line: 3,
    text: "The idea of visual design can emerge between much more diverse and complex realities and problems. (...) It may arise while solving technical problems. All of those things become information that builds a design, and it becomes a factor that determines the fate and form of the design.",
  }
},
  s4_f2_a3_b3: {
    type: "quote",
    modals: { base: {
      class: ['typo-body2 gap12'],
      style: [{
        padding: "0 0 0 30rem",
        width : "calc(((100vw + var(--safe-margin)) * (5/10)) - var(--safe-margin))",
      }]
    }},
    contents: {
      line: 3,
      text: "To figure out who is a great designer, you must first check how to make ordinary T-shirts or trademarks.",
    }
},
s4_f2_a3_b4: {
  type: "quote",
  modals: { base: {
    class: ['typo-body2 gap12'],
    style: [{
      padding: "0 0 0 30rem",
      width : "calc(((100vw + var(--safe-margin)) * (5/10)) - var(--safe-margin))",
    }]
  }},
  contents: {
    line: 3,
    text: "To become a good designer, you must first become a technician with deep and solid knowledge.",
  }
},
s4_f2_a3_b5: {
  type: "quote",
  modals: { base: {
    class: ['typo-body2 gap12'],
    style: [{
      padding: "0 0 80rem 30rem",
      width : "calc(((100vw + var(--safe-margin)) * (5/10)) - var(--safe-margin))",
    }]
  }},
  contents: {
    line: 3,
    text: "Because of the educational method in art, designers don't try to look at things from the perspective of people who have studied completely different fields, which is the perspective of most ordinary people.",
  }
},
// A4 ...............................
s4_f2_a4_b1: {
  type: 'imageContainer',
  modals: { base: {
    class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: `&lt;Critica portatile al visual design&gt;<br>image: <a>https://www.spaziobk.com</a>`,
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},



// S4 F3 : Why Softeware Engineering? 2 --------
// A1 ...............................
s4_f3_a1_b1: {
  type: 'imageContainer',
  modals: { base: {
    class: ['text-right']
  }},
  contents: {
    ext: 'png',
    alt: `Riccardo Falcinelli, image: <a>https://www.spaziobk.com</a>`,
    showAlt: true,
    zoom: false,
    border: '1rem solid var(--ink4)',
  }
},
// A2 ...............................
s4_f3_a2_b1: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "He completely changed my view of design. What he meant for design is not bounded by superficial beauty. Design is the overall process of problem-solving. Therefore, to make a great design, it is necessary to understand the technologies used for it. Especially, design is not a one-time work but must be reproduced with countless copies. So it is not a single work that we design, but the process of producing it.",
  }
},
s4_f3_a2_b2: {
    type: "bodyText",
    modals: { base: {
      class: ['typo-body2']
    }},
    contents: {
      text: "When I read this book, I was busy designing apps for school assignments. <strong>But designing just layouts and shapes felt so superficial, and I wanted to know how it actually works inside. Therefore, I started studying software engineering.</strong>",
    }
},
s4_f3_a2_b3: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I studied software for a great design, but I started to feel attracted to the development itself. Development is a very creative activity, and also in the domain of design. Software development is repeating the process of studying, designing, and creating yourself innumerable times.",
  }
},
s4_f3_a2_b4: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "<strong>Also, good software can convey value to people's lives.</strong> This aspect is on the same page with the reason why I want to do design. We live in an era where almost everything can be done in cyberspace. Designing good software is the most direct way to help people today.",
  }
},



// S4 F4 : Why IDAS? --------
// A1 ...............................
s4_f4_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header3 safe-padding-sides']
  }},
  contents: {
    text: "Why IDAS?",
  }
},
s4_f4_a1_b2: {
  type: "lineVH",
  modals: { base: {
    class: ['line-flex-hor-1']
  }},
},
// A2 ...............................
s4_f4_a2_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-header6']
  }},
  contents: {
    text: "On the bounding line",
  }
},
s4_f4_a2_b2: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "Design and software engineering. These two are related to my wish. I experienced what works are being done in each area, and had conversations with people in there. However, I couldn't feel a sense of belonging from either side. When I talked to graphic designers, they weren't very interested in technology. They were too preoccupied with aesthetic things. Developers were on the opposite side. They were people who didn't want to spend much time on aesthetics and beauty.",
  }
},
// A3 ...............................
s4_f4_a3_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-caption5--thick gap12']
  }},
  contents: {
    text: "&lt;fig 5. Between aesthetic and engineering&gt;",
  }
},
// A4 ...............................
s4_f4_a4_b1: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "They didn't seem interested in anything beyond the partitions blocking each other. But I think design and engineering are not much different. Both of these have a common purpose: Design and plan to create things worth to people. And I don't want to choose just one of those. <strong>For me, design is in between 'aesthetic' and 'engineering'</strong> (fig. 5) Between those two domains, design can be a whole process of a beautiful and technically excellent solution.",
  }
},
// A5 ...............................
s4_f4_a5_b1: {
  type: "edgeFrame",
  modals: { base: {
    class: ['typo-caption5--thick gap12']
  }},
  contents: {
    text: "&lt;fig 5. Between aesthetic and engineering&gt;",
  }
},
// A6 ...............................
s4_f4_a6_b1: {
  type: "bodyText",
  modals: { base: {
    class: ['typo-body2']
  }},
  contents: {
    text: "I think IDAS is the right place for pursuing my dream. I saw the curriculum is composed to extend both design and engineering capabilities. I want to explore intense and solid knowledge of design and technology there.",
  }
},



// S4 F5 : Thank You --------
// A1 ...............................
s4_f5_a1_b1: {
  type: "simpleText",
  modals: { base: {
    class: ['typo-caption1 text-center']
  }},
  contents: {
    text: "Thank you very much for reading my long story.",
  }
},








































}