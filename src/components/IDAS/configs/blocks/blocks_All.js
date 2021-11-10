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





}