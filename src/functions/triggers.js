export function triggerEvent(context, method, data = null) {
  if((method !== null) && (typeof method !== 'undefined')) {
    context.$logg(context.serial, ': triggerEvent :', method);
    context.$emit('trigger', {
      serial: context.serial, method, data
    })
  }
}