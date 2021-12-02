// export const s1_f1_a1 = {
//   sensors: {
//     position: {
//       StyleCalc: (context) => {
//         return {
//           opacity: context.position
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
//         "grid-area": "1/3/2/5",
//         "place-self": "center stretch",
//         "margin": "0 0",
//         "flex-direction": "column",
//         "justify-content": "flex-start",
//         "align-items": "flex-start",
//         "gap": "20rem",
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
//     position: {
//       1: {
//         class: 'something-1',
//         style: {
//           "color": "red"
//         }
//       }
//     },
//   }
// }



export const s1_f1_a1 = {
  modals: {
    base: {
      container: {
        class: ['safe-padding-left'],
        style: [{
          "grid-area": "1/1/2/2",
          "place-self": "center stretch",
          "width": "fit-content"
        }],
      },
      wrapper: {
        class: [''],
        style: [{
          "flex-direction": "column",
          "justify-content": "flex-start",
          "align-items": "flex-start",
          "gap": "0",
          "width": "fit-content"
        }],
      }
    }
  }
}


export const s1_f1_a2 = {
  modals: {
    base: {
      container: {
        class: ['noselect sticky'],
        style: [{
          "grid-area": "2/1/3/2",
          "place-self": "center stretch",
          "margin": "0 0 0 0",
          "overflow": "hidden",
          "text-overflow": "ellipsis",
        }],
      },
      wrapper: {
        class: [''],
        style: [{
          "flex-direction": "column",
          "justify-content": "flex-start",
          "align-items": "flex-start",
          "gap": "0",
          "overflow": "hidden",
          "text-overflow": "ellipsis",
        }],
      }
    }
  }
}


export const s1_f2_a1 = {
  modals: {
    base: {
      container: {
        class: [''],
        style: [{
          "grid-area": "1/1/3/5",
          "place-self": "start stretch",
          "margin": "0 0",
          "aspect-ratio": "0.408"
        }],
      },
      wrapper: {
        class: ['sticky'],
        style: [{
          "flex-direction": "column",
          "justify-content": "flex-start",
          "align-items": "flex-start",
          "gap": "0",
          "top" : "calc(var(--nav-top-height) + var(--safe-margin) + 15vw)",
        }],
      }
    }
  }
}


export const s1_f2_a2 = {
  modals: {
    base: {
      container: {
        class: [''],
        style: [{
          "grid-area": "1/5/2/9",
          "place-self": "center stretch",
          "align-items": "center",
          "margin": "0 0",
          "aspect-ratio": "0.75"
        }],
      },
      wrapper: {
        class: ['sticky'],
        style: [{
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "flex-start",
          "gap": "13rem",
          "top" : "calc(var(--nav-top-height) + var(--safe-margin) + 15vw)",
        }],
      }
    }
  }
}


export const s1_f2_a3 = {
  modals: {
    base: {
      container: {
        class: [''],
        style: [{
          "grid-area": "2/5/3/9",
          "place-self": "center stretch",
          "margin": "0 0",
          "aspect-ratio": "0.9",
          "align-items": "flex-end",
        }],
      },
      wrapper: {
        class: ['over-hidden'],
        style: [{
          "flex-direction": "column",
          "align-items": "flex-start",
          "gap": "40rem",
          "margin": "40rem 0 0 0",
          // "top" : "calc(var(--nav-top-height) + var(--safe-margin) + 200rem)",
        }],
      }
    }
  }
}


export const s2_f1_a1 = {
  modals: {
    base: {
      container: {
        class: [''],
        style: [{
          "grid-area": "1 / 1 / 2 / 2",
          "place-self": "stretch stretch",
          "margin": "0 0",
          "align-items": "center",
        }],
      },
      wrapper: {
        class: ['text-center'],
        style: [{
          "flex-direction": "column",
          "align-items": "flex-start",
          "gap": "14rem",
        }],
      }
    }
  }
}


export const s2_f2_a1 = {
  modals: {
    base: {
      container: {
        class: [''],
        style: [{
          "grid-area": "1/1/2/2",
          "place-self": "center stretch",
          "margin": "0 0",
          "align-items": "flex-start",
        }],
      },
      wrapper: {
        class: [''],
        style: [{
          "flex-direction": "column",
          "align-items": "flex-start",
          "gap": "20rem",
        }],
      }
    }
  }
}


export const s2_f3_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 6",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "14rem",
      }],
    }
  }}
}


export const s2_f3_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 6",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "aspect-ratio" : "0.5",
      }],
    },
    wrapper: {
      class: ['sticky top-stage-top--2x over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s2_f3_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 6 / 3 / 13",
        "place-self": "stretch stretch",
        "margin": "4rem 0 0 0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['sticky'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "39rem",
        "top" : "calc(calc(var(--stage-top) * 2) - 36rem)",
      }],
    }
  }}
}


export const s2_f4_a1 = {
    sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 0.68) - 0.88)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "center stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "center",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap" : "24rem",
      }],
    }
  }}
}


export const s2_f5_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 1) + 0)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 11",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['relative'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
        // "left" : "calc(var(--b-width) / (-18))",
      }],
    }
  }}
}


export const s2_f5_a2 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 1.3) - 0.3)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "1 / 11 / 3 / 19",
        "place-self": "stretch stretch",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['sticky top-stage-top--2x'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
      }],
    }
  }}
}


export const s2_f5_a3 = {
  modals:{ base:{
    container: {
      class: ['safe-padding-left'],
      style: [{
        "grid-area": "2 / 1 / 3 / 11",
        "place-self": "stretch stretch",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "aspect-ratio" : "0.65",
      }],
    },
    wrapper: {
      class: ['over-hidden sticky top-stage-top--2x'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s3_f1_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 0.55) - 0.7)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin" : "180rem 0 0 0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-end",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
      }],
    }
  }}
}


export const s3_f2_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 1) + 0.2)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 2 / 2 / 19",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['over-hidden sticky top-stage-top--2x'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
        "margin" : "60rem 0 0 0",
      }],
    }
  }}
}


export const s3_f2_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 10 / 2 / 18",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding" : "30vh 0 0 0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "z-index" : "10",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "var(--safe-margin)",
        "margin" : "0 0 0 calc(var(--safe-margin)/2)",
      }],
    }
  }}
}


export const s3_f3_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 2 / 2 / 19",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding" : "0 0 60rem 0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['over-hidden sticky top-stage-top--2x'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
        "margin" : "60rem 0 0 0",
      }],
    }
  }}
}


export const s3_f3_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 10 / 3 / 18",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "z-index" : "10",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "var(--safe-margin)",
        "margin" : "0 0 0 calc(var(--safe-margin)/2)",
      }],
    }
  }}
}


export const s3_f3_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 2 / 3 / 10",
        "place-self": "end stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-end",
        "z-index" : "10",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "var(--safe-margin)",
        "margin" : "0 calc(var(--safe-margin)/2) 0 0",
      }],
    }
  }}
}


export const s3_f4_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-end",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "20rem",
      }],
    }
  }}
}


export const s3_f4_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s3_f5_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 2 / 2 / 19",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['over-hidden sticky top-stage-top--2x'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
        "margin" : "60rem 0 0 0",
      }],
    }
  }}
}


export const s3_f5_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 10 / 3 / 18",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "z-index" : "10",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
        "margin" : "0 0 0 calc(var(--safe-margin)/4)",
      }],
    }
  }}
}


export const s3_f5_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 2 / 3 / 10",
        "place-self": "stretch stretch",
        "margin": "60rem 0 0 0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "z-index" : "10",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "calc(var(--safe-margin)/2)",
        "margin" : "0 calc(var(--safe-margin)/4) 0 0",
      }],
    }
  }}
}


export const s3_f6_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding-bottom" : "60rem",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
      }],
    }
  }}
}


export const s3_f6_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding" : "0 0 60rem 0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": " flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "20rem",
      }],
    }
  }}
}


export const s3_f6_a3 = {
  modals:{ base:{
    container: {
      class: ['safe-padding-bottom'],
      style: [{
        "grid-area": "3 / 1 / 4 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "var(--safe-margin)",
      }],
    }
  }}
}


export const s3_f6_a4 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "4 / 1 / 5 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "var(--safe-margin)",
      }],
    }
  }}
}


export const s3_f7_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 0.88) - 0)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-end",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "30rem",
      }],
    }
  }}
}


export const s3_f7_a2 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 1.2) + 0)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-top",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s4_f1_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 13",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "16rem",
      }],
    }
  }}
}


export const s4_f1_a2 = {
  modals:{ base:{
    container: {
      class: ['safe-padding-left'],
      style: [{
        "grid-area": "2 / 1 / 3 / 6",
        "place-self": "stretch stretch",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "28rem",
      }],
    }
  }}
}


export const s4_f1_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 6 / 3 / 13",
        "place-self": "stretch stretch",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "margin" : "24rem 0 0 0",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s4_f2_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 11",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "16rem",
      }],
    }
  }}
}


export const s4_f2_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 2 / 3 / 8",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "20rem",
      }],
    }
  }}
}


export const s4_f2_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "3 / 2 / 4 / 11",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "36rem",
      }],
    }
  }}
}


export const s4_f2_a4 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "3 / 7 / 4 / 10",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "z-index" : "10",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s4_f3_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 6",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s4_f3_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 6 / 2 / 13",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
      }],
    }
  }}
}


export const s4_f4_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 11",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "16rem",
      }],
    }
  }}
}


export const s4_f4_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 2 / 3 / 6",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "28rem",
      }],
    }
  }}
}


export const s4_f4_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 6 / 3 / 10",
        "place-self": "stretch stretch",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-end",
        "margin" : "26rem 0 0 0",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "stretch",
        "gap": "0",
        "height": "100%",
      }],
    }
  }}
}


export const s4_f4_a4 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "3 / 2 / 4 / 10",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s4_f4_a5 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "4 / 2 / 5 / 10",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}


export const s4_f4_a6 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "5 / 2 / 6 / 10",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }}
}



export const s4_f5_a1 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "stretch",
        "justify-content" : "center",
        "align-items": "center",
      }],
    },
    wrapper: {
      class: [''],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "center",
        "align-items": "center",
        "gap": "0",
      }],
    }
  }}
}




