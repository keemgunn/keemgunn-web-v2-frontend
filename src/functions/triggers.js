export function triggerEvent(context, method, data = null) {
  if((method !== null) && (typeof method !== 'undefined')) {
    context.$logg(context.serial, ': triggerEvent :', method);
    context.$emit('trigger', {
      serial: context.serial, method, data
    })
  }
}


export function goToLink(link) {
  if(link.split(':')[0] === 'mailto') {
    window.open(link, '_blank');
  } else {
    window.location = link
  }
}