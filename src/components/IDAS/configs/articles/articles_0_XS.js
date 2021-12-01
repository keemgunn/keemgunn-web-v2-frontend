export const s1_f1_a1 = {
  modals: {
    base: {
      container: {
        class: [''],
        style: [{
          "grid-area": "1/1/2/2",
          "place-self": "center stretch",
          "padding": "0 0 0 var(--safe-margin)",
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
          "grid-area": "1/1/2/7",
          "place-self": "start stretch",
          "margin": "0 0",
          "aspect-ratio": "0.44"
        }],
      },
      wrapper: {
        class: ['sticky'],
        style: [{
          "flex-direction": "column",
          "justify-content": "flex-start",
          "align-items": "flex-start",
          "gap": "0",
          "top" : "calc(var(--nav-top-height) + var(--safe-margin) + 20vw)",
        }],
      }
    }
  }
}


export const s1_f2_a2 = {
  modals: {
    base: {
      container: {
        class: ['show-back-cover bc--right-off'],
        style: [{
          "grid-area": "1/4/2/9",
          "place-self": "stretch stretch",
          "align-items": "flex-end",
          "margin": "0 0",
          "aspect-ratio": "0.36"
        }],
      },
      wrapper: {
        class: [''],
        style: [{
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "flex-start",
          "gap": "13rem",
        }],
      }
    }
  }
}


export const s1_f2_a3 = {
  modals: {
    base: {
      container: {
        class: ['safe-padding-left'],
        style: [{
          "grid-area": "2/1/3/9",
          "place-self": "center stretch",
          "margin": "0 0",
          "padding-top" : "36rem",
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
          "place-self": "stretch stretch",
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
      class: ['show-border'],
      style: [{
        "grid-area": "1 / 2 / 2 / 8",
        "place-self": "stretch stretch",
        "margin": "20rem 0",
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
      class: ['safe-padding-left'],
      style: [{
        "grid-area": "3 / 1 / 4 / 9",
        "place-self": "stretch stretch",
        "margin": "0",
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
        "aspect-ratio": "0.78",
      }],
    }
  }}
}


export const s2_f3_a3 = {
  modals:{ base:{
    container: {
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "2 / 1 / 3 / 9",
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
        "gap": "28rem",
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
          opacity: ((context.position * 0.75) - 0.2)
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
          opacity: ((context.position * 0.85) + 0)
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
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 11",
        "place-self": "stretch stretch",
        "margin": "0 var(--safe-margin)",
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
        "gap": "calc(var(--safe-margin) * 2)",
      }],
    }
  }}
}


export const s2_f5_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "3 / 1 / 4 / 11",
        "place-self": "stretch stretch",
        "margin": "0 0 0 var(--safe-margin)",
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
        "aspect-ratio" : "1.25",
      }],
    }
  }}
}


export const s3_f1_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 0.55) - 0.32)
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
        "margin" : "100rem 0 0 0",
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
        const sectionPosition = context.downstream.sectionPosition;
        const start = 0.058;
        const end = 9;

        let opacity = ((context.position * 2) + 0.2);
        let scale = 1;
        if (sectionPosition > start && sectionPosition < end) {
          scale = ((sectionPosition - start) * (sectionPosition - start) * 90) + 1;
          opacity = 1 - (sectionPosition - start) * 8
        }
        return {
          opacity: opacity,
          transform: `scale(${scale})`,
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: ['sticky top-stage-top--2x safe-padding-left over-hidden'],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "aspect-ratio" : "1.2",
        "transform-origin": "50% 50%",
        "transition": "all 200ms ease",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
        "margin": "60rem 0 0 0",
        "position": "absolute",
        "padding-left": "var(--safe-margin)",
      }],
    }
  }}
}


export const s3_f2_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding" : "40vh 0 0 0",
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
        "gap": "calc(var(--safe-margin)*2)",
        "margin" : "0 calc(var(--safe-margin))",
      }],
    }
  }}
}


export const s3_f3_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        const sectionPosition = context.downstream.sectionPosition;
        const start = 0.241;
        const end = 9;

        let opacity = ((context.position * 2) + 0.2);
        let scale = 1;
        if (sectionPosition > start && sectionPosition < end) {
          scale = ((sectionPosition - start) * (sectionPosition - start) * 90) + 1;
          opacity = 1 - (sectionPosition - start) * 8
        }
        return {
          opacity: opacity,
          transform: `scale(${scale})`,
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: ['sticky top-stage-top--2x safe-padding-left over-hidden'],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "aspect-ratio" : "1",
        "transform-origin": "50% 50%",
        "transition": "all 200ms ease",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
        "margin": "60rem 0 0 0",
        "position": "absolute",
        "padding-left": "var(--safe-margin)",
      }],
    }
  }}
}


export const s3_f3_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding" : "50vh 0 0 0",
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
        "gap": "calc(var(--safe-margin)*2)",
        "margin" : "0 calc(var(--safe-margin))",
      }],
    }
  }}
}


export const s3_f3_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "3 / 1 / 4 / 2",
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
        "gap": "calc(var(--safe-margin)*2)",
        "margin" : "0 calc(var(--safe-margin))",
      }],
    }
  }}
}


export const s3_f4_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        const sectionPosition = context.downstream.sectionPosition;
        const start = 0.48;
        const end = 9;

        let opacity = ((context.position * 2) + 0.2);
        let scale = 1;
        if (sectionPosition > start && sectionPosition < end) {
          scale = ((sectionPosition - start) * (sectionPosition - start) * 110) + 1;
          opacity = 1 - (sectionPosition - start) * 10
        }
        return {
          opacity: opacity,
          transform: `scale(${scale})`,
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: ['sticky top-stage-top--2x safe-padding-left over-hidden'],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "aspect-ratio" : "0.8",
        "transform-origin": "50% 50%",
        "transition": "all 200ms ease",
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
        "margin": "60rem 0 0 0",
        "padding": "0 var(--safe-margin)",
        "position": "absolute",
      }],
    }
  }}
}


export const s3_f4_a2 = {
  modals:{ base:{
    container: {
      class: ['sticky'],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding" : "40vh var(--safe-margin) 0 var(--safe-margin)",
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
  sensors: {
    position: {
      StyleCalc: (context) => {
        const sectionPosition = context.downstream.sectionPosition;
        const start = 0.563;
        const end = 9;

        let opacity = ((context.position * 2) + 0.2);
        let scale = 1;
        if (sectionPosition > start && sectionPosition < end) {
          scale = ((sectionPosition - start) * (sectionPosition - start) * 90) + 1;
          opacity = 1 - (sectionPosition - start) * 8
        }
        return {
          opacity: opacity,
          transform: `scale(${scale})`,
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: ['sticky top-stage-top--2x safe-padding-left over-hidden'],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "aspect-ratio" : "1",
        "transform-origin": "50% 50%",
        "transition": "all 200ms ease",
      }],
    },
    wrapper: {
      class: ['over-hidden'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "24rem",
        "margin": "60rem 0 0 0",
        "position": "absolute",
        "padding-left": "var(--safe-margin)",
      }],
    }
  }}
}


export const s3_f5_a2 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding" : "40vh 0 0 0",
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
      }],
    }
  }}
}


export const s3_f5_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "3 / 1 / 4 / 2",
        "place-self": "stretch stretch",
        "margin": "20rem 0 0 0",
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
      }],
    }
  }}
}


export const s3_f6_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 0.55) - 0)
        }
      },
    }
  },
  modals:{ base:{
    container: {
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "1 / 1 / 2 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding-bottom" : "80rem",
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
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 0.8) + 0.1)
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
      class: [''],
      style: [{
        "grid-area": "3 / 1 / 4 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0 0 calc(var(--safe-margin)*2.2) 0",
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
        "gap": "calc(var(--safe-margin)*2.2)",
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
        "gap": "calc(var(--safe-margin)*2.2)",
      }],
    }
  }}
}


export const s3_f7_a1 = {
  sensors: {
    position: {
      StyleCalc: (context) => {
        return {
          opacity: ((context.position * 1.8) - 0)
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
        "padding": "0 var(--safe-margin)",
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
      class: ['over-hidden safe-padding-left'],
      style: [{
        "flex-direction": "column",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "gap": "0",
        "aspect-ratio" : "1.5",
      }],
    }
  }}
}


export const s4_f1_a1 = {
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
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
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
      class: ['safe-padding-left'],
      style: [{
        "grid-area": "3 / 1 / 4 / 2",
        "place-self": "stretch stretch",
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
        "aspect-ratio" : "1.6",
      }],
    }
  }}
}


export const s4_f2_a1 = {
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
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
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
        "gap": "20rem",
      }],
    }
  }}
}


export const s4_f2_a3 = {
  modals:{ base:{
    container: {
      class: ['show-back-cover bc--right-off sticky'],
      style: [{
        "grid-area": "4 / 1 / 5 / 2",
        "place-self": "stretch stretch",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "padding-left" : "calc(var(--safe-margin) * (0.9)",
      }],
    },
    wrapper: {
      class: [''],
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
      class: ['sticky top-stage-top--2x'],
      style: [{
        "grid-area": "3 / 1 / 4 / 2",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "z-index" : "-1",
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
        "grid-area": "1 / 3 / 2 / 6",
        "place-self": "stretch stretch",
        "margin": "0",
        "padding": "0",
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
        "top": "calc(var(--safe-margin)*(-2))"
      }],
    }
  }}
}


export const s4_f3_a2 = {
  modals:{ base:{
    container: {
      class: ['safe-padding-sides'],
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
        "grid-area": "1 / 1 / 2 / 2",
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
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "2 / 1 / 3 / 2",
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


export const s4_f4_a3 = {
  modals:{ base:{
    container: {
      class: [''],
      style: [{
        "grid-area": "3 / 1 / 4 / 2",
        "place-self": "stretch stretch",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-end",
        "padding" : "0 0 10rem calc(var(--safe-margin)*(4.2))",
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
        "aspect-ratio" : "0.72",
      }],
    }
  }}
}


export const s4_f4_a4 = {
  modals:{ base:{
    container: {
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "4 / 1 / 5 / 2",
        "place-self": "stretch stretch",
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
      class: ['show-border'],
      style: [{
        "grid-area": "5 / 1 / 6 / 2",
        "place-self": "stretch stretch",
        "align-content" : "flex-start",
        "justify-content" : "flex-start",
        "align-items": "flex-start",
        "margin-bottom" : "calc(var(--safe-margin)*0.8)",
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
        "aspect-ratio" : "2",
      }],
    }
  }}
}


export const s4_f4_a6 = {
  modals:{ base:{
    container: {
      class: ['safe-padding-sides'],
      style: [{
        "grid-area": "6 / 1 / 7 / 2",
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




