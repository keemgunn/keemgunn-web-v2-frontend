// export const s1_f1_a1 = {
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
        class: ['sticky'],
        style: [{
          "grid-area": "1/1/2/2",
          "place-self": "center stretch",
          "margin": "0 0",
          "top": "50vh",
        }],
      },
      wrapper: {
        class: [''],
        style: [{
          "flex-direction": "column",
          "justify-content": "flex-start",
          "align-items": "flex-start",
          "gap": "0",
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
          "grid-area": "1/1/2/2",
          "place-self": "center stretch",
          "padding": "0 0 0 var(--margin-safe-col)",
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


export const s1_f2_a2 = {
  modals: {
    base: {
      container: {
        class: ['noselect sticky'],
        style: [{
          "grid-area": "2/1/3/2",
          "place-self": "center stretch",
          "margin": "0 0 0 0",
          "overflow": "hidden",
          "top": "20rem",
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


export const s1_f3_a1 = {
  modals: {
    base: {
      container: {
        class: [''],
        style: [{
          "grid-area": "1/1/3/5",
          "place-self": "start stretch",
          "margin": "0 0",
          "aspect-ratio": "0.375"
        }],
      },
      wrapper: {
        class: ['sticky'],
        style: [{
          "flex-direction": "column",
          "justify-content": "flex-start",
          "align-items": "flex-start",
          "gap": "0",
          "top": "140rem",
        }],
      }
    }
  }
}


export const s1_f3_a2 = {
  modals: {
    base: {
      container: {
        class: ['flex'],
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
          "top": "310rem",
        }],
      }
    }
  }
}


export const s1_f3_a3 = {
  modals: {
    base: {
      container: {
        class: ['flex'],
        style: [{
          "grid-area": "2/5/3/9",
          "place-self": "center stretch",
          "margin": "0 0",
          "aspect-ratio": "0.75",
          "align-items": "flex-end",
        }],
      },
      wrapper: {
        class: [''],
        style: [{
          "flex-direction": "column",
          "align-items": "flex-start",
          "gap": "40rem",
          "position": "relative",
          "overflow": "hidden"
        }],
      }
    }
  }
}


export const s1_f4_a1 = {
  modals: {
    base: {
      container: {
        class: ['flex'],
        style: [{
          "grid-area": "1/1/2/2",
          "place-self": "center stretch",
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

