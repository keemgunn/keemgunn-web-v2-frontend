
// function makeModes(pageName) {
//   let result = {};
//   for (let id of pageName) {
//     let modesBundled = [];
//     for (let modes of id.modes) {
//       let bundleCandidates = [];
//       for (let m of modes) {
//         bundleCandidates.push(id['elements'][m]);
//       }
//       bundleCandidates.push(id['elements']['base']);
//       modesBundled.push(bundleCandidates.join(' '))
//     }
//     result[id.name] = modesBundled;
//   }
//   return result
// }



// Page : NavBar ------------------------------
// const NavBar = [

//   {
//     name: 'nav-top-links',
//     elements: {
//       base: 'links flex f-al-item-start',
//       wide: 'f-dir-row',
//       short: 'f-dir-col'
//     },
    
//     modes: [
//       ['wide'], // mode-0
//       ['short'] // mode-1
//     ]
//   }


// ]


function Controller(page) {
  return {
    states: page.states, 
    classKit: page.classKit,
    Fetcher: (id) => {
      return function () {
        let assembled = [];
        assembled.push(this['classKit'][id]['base'])
        for (let state of Object.keys(this['classKit'][id]['states'])) {
          assembled.push(this['classKit'][id]['states'][state][this['states'][state]])
        }
        return assembled
      }
    }
  }
}




import bundle_NavBar from '@/assets/styles/classes/NavBar';
export const NavBar = Controller(bundle_NavBar)

