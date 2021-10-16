export default {

  url: (arr) => {
    return '/' + arr.join('/')
  },
  
  params: (arr) => {
    return arr.join('||')
  }

}
  
  
  