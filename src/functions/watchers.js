export function watchPosition(value, context) {
  const position = Object.keys(context['sensorConfigs'][context.getScale]['position']).includes('self') ?
    context['sensorConfigs'][context.getScale]['position']['self'] :
    context['sensorConfigs'][context.getScale]['position'] ;
  // 만약 포지션 센서 사용하지 않는 컨테이너이면 이 오브젝트는 비어있다.

  if ((Object.keys(position).length !== 0)
   && (position['watchKit']['breakpoints'][0] !== 999)) {
    const breakpoints = position['watchKit']['breakpoints'];
    const emits = position['watchKit']['emits'];
    const trigger = context.triggerEvent;
    
    if (breakpoints[8] < value) {
      trigger(context, emits[8]);
      context.states.modals.position = breakpoints[8];
    } else if (breakpoints[7] < value) {
      trigger(context, emits[7]);
      context.states.modals.position = breakpoints[7];
    } else if (breakpoints[6] < value) {
      trigger(context, emits[6]);
      context.states.modals.position = breakpoints[6];
    } else if (breakpoints[5] < value) {
      trigger(context, emits[5]);
      context.states.modals.position = breakpoints[5];
    } else if (breakpoints[4] < value) {
      trigger(context, emits[4]);
      context.states.modals.position = breakpoints[4];
    } else if (breakpoints[3] < value) {
      trigger(context, emits[3]);
      context.states.modals.position = breakpoints[3];
    } else if (breakpoints[2] < value) {
      trigger(context, emits[2]);
      context.states.modals.position = breakpoints[2];
    } else if (breakpoints[1] < value) {
      trigger(context, emits[1]);
      context.states.modals.position = breakpoints[1];
    } else if (breakpoints[0] < value) {
      trigger(context, emits[0]);
      context.states.position = breakpoints[0];
    }
  }
}