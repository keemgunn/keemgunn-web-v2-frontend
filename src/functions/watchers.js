import { getConfigsByScale } from "@/functions/modals";
import { triggerEvent } from "@/functions/triggers";


export function watchPosition(value, context) {
  try {
    const sensorConfig = getConfigsByScale(context.sensorConfigs, context.getScale);
    const position = Object.keys(sensorConfig['position']).includes('self') ? sensorConfig['position']['self'] : sensorConfig['position'] ;
    // 만약 포지션 센서 사용하지 않는 컨테이너이면 이 오브젝트는 비어있다.
  
    if ((Object.keys(position).length !== 0)
     && (position['watchKit']['breakpoints'][0] !== 999)) {
      const breakpoints = position['watchKit']['breakpoints'];
      if (breakpoints[8] < value) {
        context.states.modals.position = breakpoints[8];
        return 8
      } else if (breakpoints[7] < value) {
        context.states.modals.position = breakpoints[7];
        return 7
      } else if (breakpoints[6] < value) {
        context.states.modals.position = breakpoints[6];
        return 6
      } else if (breakpoints[5] < value) {
        context.states.modals.position = breakpoints[5];
        return 5
      } else if (breakpoints[4] < value) {
        context.states.modals.position = breakpoints[4];
        return 4
      } else if (breakpoints[3] < value) {
        context.states.modals.position = breakpoints[3];
        return 3
      } else if (breakpoints[2] < value) {
        context.states.modals.position = breakpoints[2];
        return 2
      } else if (breakpoints[1] < value) {
        context.states.modals.position = breakpoints[1];
        return 1
      } else if (breakpoints[0] < value) {
        context.states.position = breakpoints[0];
        return 0
      }
    }
  } catch(err) {
    console.log(`!error! ${context.serial}`);
    console.error(err);
  }
}


export function positionTrigger(value, context) {
  try {
    const sensorConfig = getConfigsByScale(context.sensorConfigs, context.getScale);
    const position = Object.keys(sensorConfig['position']).includes('self') ? sensorConfig['position']['self'] : sensorConfig['position'] ;
    const fullfilled = (typeof position.watchKit !== 'undefined') && (typeof position.watchKit.emits !== 'undefined');
    if (fullfilled) {
      const emits = position.watchKit.emits
      triggerEvent(context, emits[value]);
    }
  }
  catch (err) {
    console.log(`!error! ${context.serial}`);
    console.error(err);
  }
}