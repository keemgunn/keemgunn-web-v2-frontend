function Controller(page) {
  return {
    pageName: page.pageName,
    states: page.states, 
    classKit: page.classKit,
    Fetcher: (id) => {
      return function () {
        let assembled = [];
        assembled.push([id])
        assembled.push(this['classKit'][id]['base'])
        for (let state of Object.keys(this['classKit'][id]['states'])) {
          assembled.push(this['classKit'][id]['states'][state][this['states'][state]])
        }
        return assembled
      }
    }
  }
}

export function createFetchers(computed, cls) {
  if (process.env.NODE_ENV === 'development') {
    console.log("== Created Fetchers ========");
    console.log(`page: ${cls.pageName}`);
  }
  for (let id of Object.keys(cls['classKit'])) {
    const classifyName = id.replace(/-/g, '_');
    if (process.env.NODE_ENV === 'development') {
      console.log(classifyName);
    }
    computed[classifyName] = cls.Fetcher(id)
  }
}




import bundle_NavBar from '@/assets/styles/classes/cls-NavBar';
export const NavBar = Controller(bundle_NavBar)

