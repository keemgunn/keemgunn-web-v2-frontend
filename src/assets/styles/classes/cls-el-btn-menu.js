export default {
  pageName: 'btn_menu',
  states: {
    modal: false, // [true, false],
  },
  classKit: {

    'menu-btn': {
      base: '',
      states: {
        modal: {
          true: '',
          false: ''
        }
      }
    },

    'icon-menu': {
      base: '',
      states: {
        modal: {
          true: '',
          false: ''
        }
      }
    },

    'g-line': {
      base: '',
      states: {
        modal: {
          true: '',
          false: ''
        }
      }
    },

    'p-line': {
      base: '',
      states: {
        modal: {
          true: 'p-line--on',
          false: 'p-line--off'
        }
      }
    },

  }
}