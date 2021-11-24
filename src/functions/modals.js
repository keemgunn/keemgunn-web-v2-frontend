const scaleEntry = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XL'];

export function getConfigsByScale(configs, scale) {
  if (typeof configs[scale] === 'undefined') {
    for (const searchScale of scaleEntry) {
      if (typeof configs[searchScale] !== 'undefined') {
        return configs[searchScale]
      }
    }
  } else {
    return configs[scale]
  }
}


export function getCSSbyModal(configs, states) {
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



export function setModalState(context, modalName, payload) {
  context.$logg(context.serial, ': setModalState :', modalName, payload);
  if (typeof context['states']['modals'][modalName] !== 'undefined') {
    context['states']['modals'][modalName] = (payload === 'toggle') ? !context['states']['modals'][modalName] : payload;
  }
}