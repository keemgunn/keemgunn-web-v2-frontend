const basicEventListeners = {
  // eventListeners will be attached based on these names,

  _mouseEnter(context) {
    return function () {
      context.setModalState(context, 'hover', true);
      context.setModalState(context, 'touched', false);
    }
  },

  _mouseMove() {
    return function () {
    }
  },

  _mouseLeave(context) {
    return function () {
      context.setModalState(context, 'hover', false);
    }
  },

  _touchStart(context) {
    return function () {
      context.setModalState(context, 'hover', true);
      context.setModalState(context, 'touched', true);
      setTimeout(context.mouseLeave, 2000);
    }
  },

  _click() {
    return function () {
    }
  },
}


export function injectBasicEventListeners(methods, listenersList) {
  for ( const [key, value] of Object.entries(basicEventListeners)) {
    methods[key] = value;
    const realName = key.replace('_', '');
    listenersList.push(realName);
    methods[realName] = function () {};
  }
}


export function injectListnerCallbacks(context, listenersList, injectTriggers) {
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
}


export function attachEventListeners(context, serial, listenersList) {
  context.el = document.querySelector("#" + serial);
  for (const listener of listenersList) {
    context.el.addEventListener(listener.toLowerCase(), context[listener], { passive: true });
  }
}