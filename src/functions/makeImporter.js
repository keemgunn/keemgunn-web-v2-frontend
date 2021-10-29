// Returns Function that imports a module.
// [isAsync] option determines its function type.

export default function (basePath, isAsync) {
  if (isAsync) {
    return async function (filename) {
      try {
        return await import(basePath + filename)
      } catch (err) {
        console.error(err)
      }
    }
  } else {
    return function (filename) {
      return import(basePath + filename)
    }
  }
}


// this module throws an error
// makeImporter.js?e044:10 Error: Cannot find module '@/components/IDAS/configs/configs_bundle.js' at eval (eval at ./src/functions lazy recursive (6.js:618), <anonymous>:5:11)
// 이 모듈을 사용하는 컴포넌트에서 경로를 탐색하지 않고 
// 이 모듈을 기준으로 찾는다