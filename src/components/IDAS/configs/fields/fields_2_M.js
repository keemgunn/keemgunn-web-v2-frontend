// export const s1_f1 = {
//   type: "A",
//   sensors: {
//     position: {
//       StyleCalc: (position) => {
//         return {
//           opacity: position
//         }
//       },
//       reactors: {
//         0: null,
//         0.5: "half",
//         1: null
//       }
//     }
//   },
//   modals: {
//     base: {
//       class: [''],
//       style: [{
//         "margin": "0 0",
//         "padding": "0 0",
//         "grid-template-columns": 18,
//         "gap": "10rem 10rem",
//       }],
//     },
//     position: {
//       0: {
//         class: 'shown',
//         style: {
//           "opacity": "1"
//         }
//       }
//     },
//   }
// }


export const s1_f1 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0 0 150rem",
        "padding": "0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0",
        "height": "100vh",
        "align-content" : "flex-start"
      }],
    }
  }
}


export const s1_f2 = {
  type: "A",
  sensors: {
    position: {
    }
  },
  modals: {
    base: {
      class: ['sticky'],
      style: [{
        "margin": "0",
        "padding": "0 0 0 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0",
        "top" : "calc(var(--nav-top-height) + var(--safe-margin))",
      }],
    }
  }
}


export const s1_f3 = {
  type: "A",
  sensors: {
    position: {
    }
  },
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "200rem 0 0 0",
        "grid-template-columns": "repeat(8, 1fr)",
        "gap": "0rem var(--safe-margin)",
      }],
    }
  }
}


export const s2_f1 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "240rem 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0rem 0rem",
        "justify-content" : "center"
      }],
    }
  }
}

export const s2_f2 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "0 0 96rem 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0rem 0rem",
      }],
    }
  }
}

export const s2_f3 = {
  type: "B",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "padding": "0 var(--b-safe-margin)",
        "grid-template-columns": "repeat(12, 1fr)",
        "gap": "var(--safe-margin) var(--safe-margin)",
      }],
    }
  }
}

export const s2_f4 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "160rem 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0rem 0rem",
        "justify-content" : "center"
      }],
    }
  }
}

export const s2_f5 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "0",
        "grid-template-columns": "repeat(18, 1fr)",
        "gap": "calc(var(--b-width) / (18 * 1.8)) 0rem",
      }],
    }
  }
}

export const s3_f1 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0rem 0rem",
        "justify-content" : "center"
      }],
    }
  }
}

export const s3_f2 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(18, 1fr)" ,
        "gap": "0rem 0rem",
      }],
    }
  }
}

export const s3_f3 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(18, 1fr)",
        "grid-template-rows": "1fr auto",
        "gap": "0rem 0rem",
      }],
    }
  }
}

export const s3_f4 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "var(--safe-margin) 0rem",
        "justify-content": "center"
      }],
    }
  }
}

export const s3_f5 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(18, 1fr)",
        "gap": "0rem 0rem",
      }],
    }
  }
}


export const s3_f6 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0rem 0rem",
      }],
    }
  }
}

export const s3_f7 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding" : "100rem 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "80rem 0rem",
      }],
    }
  }
}

export const s4_f1 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(12, 1fr)",
        "gap": "80rem var(--safe-margin)",
      }],
    }
  }
}

export const s4_f2 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(10, 1fr)",
        "gap": "80rem var(--safe-margin)",
      }],
    }
  }
}

export const s4_f3 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "0 0 120rem 0",
        "grid-template-columns": "repeat(12, 1fr)",
        "gap": "0rem 28rem",
      }],
    }
  }
}

export const s4_f4 = {
  type: "A",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(10, 1fr)",
        "gap": "80rem var(--safe-margin)",
      }],
    }
  }
}

export const s4_f5 = {
  type: "C",
  sensors: {},
  modals: {
    base: {
      class: [''],
      style: [{
        "margin": "0",
        "padding": "120rem 0",
        "grid-template-columns": "repeat(1, 1fr)",
        "gap": "0rem 0rem",
        "height": "100vh",
        "justify-content" : "center"
      }],
    }
  }
}



