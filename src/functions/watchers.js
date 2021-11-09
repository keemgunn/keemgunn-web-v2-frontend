export function watchPosition(value, context) {
  if (typeof context['sensorConfigs'][context.getScale]['position'] !== 'undefined') {
    if (context['sensorConfigs'][context.getScale]['position']['watchKit']['breakpoints'][0] !== 999) {

      const breakpoints = context['sensorConfigs'][context.getScale]['position']['watchKit']['breakpoints'];
      const emits = context['sensorConfigs'][context.getScale]['position']['watchKit']['emits'];
      
      if (breakpoints[8] < value) {
        context.triggerEvent(emits[8]);
        context.states.modals.position = breakpoints[8];
      } else if (breakpoints[7] < value) {
        context.triggerEvent(emits[7]);
        context.states.modals.position = breakpoints[7];
      } else if (breakpoints[6] < value) {
        context.triggerEvent(emits[6]);
        context.states.modals.position = breakpoints[6];
      } else if (breakpoints[5] < value) {
        context.triggerEvent(emits[5]);
        context.states.modals.position = breakpoints[5];
      } else if (breakpoints[4] < value) {
        context.triggerEvent(emits[4]);
        context.states.modals.position = breakpoints[4];
      } else if (breakpoints[3] < value) {
        context.triggerEvent(emits[3]);
        context.states.modals.position = breakpoints[3];
      } else if (breakpoints[2] < value) {
        context.triggerEvent(emits[2]);
        context.states.modals.position = breakpoints[2];
      } else if (breakpoints[1] < value) {
        context.triggerEvent(emits[1]);
        context.states.modals.position = breakpoints[1];
      } else if (breakpoints[0] < value) {
        context.triggerEvent(emits[0]);
        context.states.position = breakpoints[0];
      }
    }
  }
}