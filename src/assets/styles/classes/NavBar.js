export default {
  states: {
    horizontal: 'wide', // ['wide', 'short']
    vertical: 'expanded', // ['expanded', 'shrinked'],
    menu: 'hided' // ['showed', 'hided'],
  },
  classKit: {
    'nav-top-links': {
      base: 'links flex f-al-item-start',
      states: {
        horizontal: {
          wide: 'f-dir-row',
          short: 'f-dir-col'
        },
        menu: {
          hided: 'menu-hided',
          showed: 'menu-hided'
        }
      }
    },
  }
}