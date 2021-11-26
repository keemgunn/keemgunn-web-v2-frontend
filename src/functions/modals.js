const scaleEntry = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XL'];

export function getConfigsByScale(configs, scale) {
  try {
    if (typeof configs[scale] === 'undefined') {
      for (const searchScale of scaleEntry) {
        if (typeof configs[searchScale] !== 'undefined') {
          return configs[searchScale]
        }
      }
      return {}
    } else {
      return configs[scale]
    }
  } catch (err) {
    console.error(err);
  }
}


export function getCSSbyModal(context) {
  try {
    const configs = context.serial.split('-').length === 4 ? context.modalConfigs : getConfigsByScale(context.modalConfigs, context.getScale);
    const states = context.states;
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
  catch (err) {
    console.error('!error!', `@${context.serial || 'unknown'}`);
    console.error(err);
  }
}



export function setModalState(context, modalName, payload) {
  try {
    console.log(context.serial, ': setModalState :', modalName, payload);
    context['states']['modals'][modalName] = (payload === 'toggle') ? !context['states']['modals'][modalName] : payload;
  } catch (err) {
    console.error('!error!', `@${context.serial || 'unknown'}`);
    console.error(err);
  }
}