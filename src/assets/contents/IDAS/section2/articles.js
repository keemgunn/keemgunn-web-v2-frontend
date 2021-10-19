

const blocks = {

  "s2-f1-a1": [

  ],


}



const scaleReactor = {

  XS: { // ------------------------------------

    "s2-f1-a1": {
      style: {
        gridArea: "9 9 9 9",
        width: "100%", 
        margin: "0 0", padding: "0 0" 
      },
      class: {
        direction: "column",
        justify: "start",
        aligh: "start"
      }
    },

    "s2-f1-a2": {
      style: {
        gridArea: "9 9 9 9",
        width: "100%", 
        margin: "0 0", padding: "0 0" 
      },
      class: {
        direction: "column",
        justify: "start",
        aligh: "start"
      }
    },

  }
}




const otherReactor = {
  
  "s2-f1-a1": {
    states: {
      horizontal: ['wide', 'short']
    }, 
    style: {
      horizontal: [
        'when wide',
        'when short',
      ]
    },
    class: {
      horizontal: [
        'when wide',
        'when short',
      ]
    }
  },


}