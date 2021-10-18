export default {
  pageName: 'NavBar',
  states: {
    horizontal: 'wide', // ['wide', 'short']
    vertical: 'expanded', // ['expanded', 'shrinked'],
    menu: false // [true, false],
  },
  classKit: {

    'nav-top': {
      base: 'flex f-dir-col f-js-cont-space tr-nav-top',
      states: {
        horizontal: {
          wide: 'nt--wide',
          short: 'nt--short'
        },
        menu: {
          false: '',
          true: 'nt--expand'
        }
      }
    },

    'nav-top-contents': {
      base: 'flex f-dir-row f-js-cont-space',
      states: {
        horizontal: {
          wide: 'ntc--wide',
          short: 'ntc--short'
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
      base: 'flex f-al-item-start noselect',
      states: {
        horizontal: {
          wide: 'f-dir-row',
          short: 'f-dir-col'
        }
      }
    },
    
    'nav-top-links-item': {
      base: 'flex f-dir-col f-al-item-start',
      states: {
        horizontal: {
          wide: 'op1',
          short: ''
        },
        menu: {
          true: 'op1',
          false: 'op0'
        }
      }
    },

    'nav-top-btns': {
      base: 'btns flex f-dir-row f-al-item-start f-js-cont-end gap8',
      states: {}
    }





  }
}