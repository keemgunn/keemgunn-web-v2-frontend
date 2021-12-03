export function triggerEvent(context, method, data = null) {
  try {
    if((method !== null) && (typeof method !== 'undefined')) {
      context.$logg(context.serial, ': triggerEvent :', method);
      context.$emit('trigger', {
        serial: context.serial, method, data
      })
    }
  } catch (err) {
    console.error('!error!', `@${context.serial || 'unknown'}`);
    console.error(err);
  }
}


export function goToLink(link) {
  if(link.split(':')[0] === 'mailto') {
    window.open(link, '_blank');
  } else {
    window.location = link
  }
}


export function childMounted(context) {
  try {
    context.childrenMounted += 1;
  } catch (err) {
    console.error('!error!', `@${context.serial || 'unknown'}`);
    console.error(err);
  }
}