export default {
  states: {
    horizontal: 'wide', // ['wide', 'short']
    vertical: 'expanded', // ['expanded', 'shrinked'],
    menu: false // [true, false],
  },
  classKit: {

    'nav-top': {
      base: 'flex f-dir-col f-js-cont-space',
      states: {
        menu: {
          false: 'nav-top--normal',
          true: 'nav-top--expand'
        }
      }
    },

    'nav-top-contents': {
      base: 'flex f-dir-row f-js-cont-space',
      states: {
        horizontal: {
          wide: 'contents--wide',
          short: 'contents--short'
        }
      }
    },

    'nav-menu-btn': {
      base: 'btns flex f-dir-row f-al-item-start f-js-cont-start gap8',
      states: {}
    },

    'nav-logo-gunn': {
      base: 'svg h-fit',
      states: {}
    },

    'nav-top-links': {
      base: 'flex f-al-item-start',
      states: {
        horizontal: {
          wide: 'f-dir-row',
          short: 'f-dir-col'
        }
      }
    },

    'nav-top-btns': {
      base: 'btns flex f-dir-row f-al-item-start f-js-cont-end gap8',
      states: {}
    }





  }
}