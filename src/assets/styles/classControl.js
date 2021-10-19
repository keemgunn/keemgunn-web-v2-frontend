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
  const logOutput = {}; logOutput[cls.pageName] = [];
  for (let id of Object.keys(cls['classKit'])) {
    const classifyName = id.replace(/-/g, '_');
    if (process.env.NODE_ENV === 'development') {
      logOutput[cls.pageName].push(classifyName);
    }
    computed[classifyName] = cls.Fetcher(id)
  }
  if (process.env.NODE_ENV === 'development') {
    console.log("== Created Fetchers", logOutput);
  }
}




import _NavBar from '@/assets/styles/classes/cls-com-NavBar';
export const NavBar = Controller(_NavBar)

import _btn_darkmode from '@/assets/styles/classes/cls-el-btn-darkmode';
export const btn_darkmode = Controller(_btn_darkmode)

import _btn_menu from '@/assets/styles/classes/cls-el-btn-menu';
export const btn_menu = Controller(_btn_menu)

