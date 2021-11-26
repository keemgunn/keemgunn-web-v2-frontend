import { setModalState } from '@/functions/modals';


const basicEventListeners = {
  // eventListeners will be attached based on these names,

  _mouseEnter(context) {
    if (typeof context === 'undefined') console.log('!warning!', 'undefined object in param : context');
    return function () {
      try {
        setModalState(context, 'hover', true);
        setModalState(context, 'touched', false);
      } catch (err) {
        console.error('!error!', `@${context.serial || 'unknown'}`);
        console.error(err);
      }
    }
  },

  _mouseMove(context) {
    if (typeof context === 'undefined') console.log('!warning!', 'undefined object in param : context');
    return function () {
    }
  },

  _mouseLeave(context) {
    if (typeof context === 'undefined') console.log('!warning!', 'undefined object in param : context');
    return function () {
      try {
        setModalState(context, 'hover', false);
      } catch (err) {
        console.error('!error!', `@${context.serial || 'unknown'}`);
        console.error(err);
      }
    }
  },

  _touchStart(context) {
    if (typeof context === 'undefined') console.log('!warning!', 'undefined object in param : context');
    return function () {
      try {
        setModalState(context, 'hover', true);
        setModalState(context, 'touched', true);
        setTimeout(context.mouseLeave, 2000);
      } catch (err) {
        console.error('!error!', `@${context.serial || 'unknown'}`);
        console.error(err);
      }
    }
  },

  _click(context) {
    if (typeof context === 'undefined') console.log('!warning!', 'undefined object in param : context');
    return function () {
    }
  },
}


export function injectBasicEventListeners(methods, listenersList) {
  try {
    for ( const [key, value] of Object.entries(basicEventListeners)) {
      methods[key] = value;
      const realName = key.replace('_', '');
      listenersList.push(realName);
      methods[realName] = function () {};
    }
  } catch (err) {
    console.error('!error!');
    console.error(err);
  }
}



export function mergeAttachEventListeners(context, listenersList, injectTriggers) {
  try {
    const extensionMethodsList = Object.keys(injectTriggers);
    for (const listener of listenersList) {
      const basic = context['_' + listener](context);
      if (extensionMethodsList.includes(listener)) {
        const ext = injectTriggers[listener](context);
        context[listener] = function () {
          basic();
          ext();
        }
      } else {
        context[listener] = function () {
          basic();
        }
      }
    }
    context.el = document.querySelector("#" + context.serial);
    for (const listener of listenersList) {
      context.el.addEventListener(listener.toLowerCase(), context[listener], { passive: true });
    }
  } catch (err) {
    console.error('!error!', `@${context.serial || 'unknown'}`);
    console.error(err);
  }
}