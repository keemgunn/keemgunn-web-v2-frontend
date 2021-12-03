export default {
  pageName: 'NavBar',
  states: {
    horizontal: 'wide', // ['wide', 'short']
    vertical: 'expanded', // ['expanded', 'shrinked'],
    menu: false // [true, false],
  },
  classKit: {

    'nav-top': {
      base: '',
      states: {
        horizontal: {
          wide: '',
          short: ''
        },
        menu: {
          false: '',
          true: ''
        }
      }
    },

    'nav-top-contents': {
      base: '',
      states: {
        horizontal: {
          wide: '',
          short: ''
        }
      }
    },

    'nav-menu-btn': {
      base: '',
      states: {}
    },

    'nav-logo-gunn': {
      base: '',
      states: {}
    },

    'nav-top-links': {
      base: '',
      states: {
        horizontal: {
          wide: '',
          short: ''
        }
      }
    },
    
    'nav-top-links-item': {
      base: '',
      states: {
        horizontal: {
          wide: '',
          short: ''
        },
        menu: {
          true: '',
          false: ''
        }
      }
    },

    'nav-top-btns': {
      base: '',
      states: {}
    }





  }
}