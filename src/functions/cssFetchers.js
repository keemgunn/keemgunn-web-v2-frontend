export function modalFetcher () {
  return function (configs, states) {
    let classBundle = [];
    let styleBundle = [];
    for (const modal of Object.keys(configs)) {
      if (modal === 'base') {
        classBundle = [...configs[modal]['class']];
        styleBundle = [...configs[modal]['style']];
      } else {
        if (configs[modal][states[modal]]) {
          if (configs[modal][states[modal]]['class']) {
            classBundle.push(configs[modal][states[modal]]['class']);
          }
          if (configs[modal][states[modal]]['style']) {
            styleBundle.push(configs[modal][states[modal]]['style']);
          }
        }
      }
    }
    return { class: classBundle, style: styleBundle }
  }
}

