export default {

  url: (arr) => {
    try {
      return '/' + arr.join('/')
    }
    catch (err) {
      console.error('!error!', err);
      console.log('param:', arr);
      return '!error'
    }
  },
  
  params: (arr) => {
    try {
      return arr.join('||')
    }
    catch (err) {
      console.error('!error!', err);
      console.log('param:', arr);
      return '!error'
    }
  }

}
  
  
  