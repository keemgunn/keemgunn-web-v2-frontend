console.log("============= configs_bundle =============");
import * as fields_XS from '@/components/IDAS/configs/fields/fields_0_XS';
import * as fields_S from '@/components/IDAS/configs/fields/fields_1_S';
import * as fields_M from '@/components/IDAS/configs/fields/fields_2_M';
import * as fields_L from '@/components/IDAS/configs/fields/fields_3_L';
import * as articlesBasics from '@/components/IDAS/configs/articles/articles_basics';
import * as articles_XS from '@/components/IDAS/configs/articles/articles_0_XS';
import * as articles_S from '@/components/IDAS/configs/articles/articles_1_S';
import * as articles_M from '@/components/IDAS/configs/articles/articles_2_M';
import * as articles_L from '@/components/IDAS/configs/articles/articles_3_L';
const BlocksAll = require('@/components/IDAS/configs/blocks/blocks_All');
console.log('BlocksAll:', BlocksAll);

import { dashToUnder } from '@/functions/stringMod';


function getParentName(serial) {
  return serial.slice(0, -3)
}

function fieldType(type) {
  return `field-type-${type.toLowerCase()}`
}

function TriggerCallback(obj) {
  return function (context) {
    return function () {
      context.triggerEvent(obj.method, obj.data);
    }
  }
}

function SensorConfigs(sensors, containerType) {
  const output = {};

  for (const [ key, value ] of Object.entries(sensors)) {
    const StyleCalc =
      Object.keys(value).includes('StyleCalc') ?
      value.StyleCalc :
      () => { return {} };
    const watchKit = {
      breakpoints: [],
      emits: []
    };

    let breakpoints = [];
    const emits = [];
    let reactorLength = 0;

    // Make breakpoints and emits in Array.
    if (Object.keys(value).includes('reactors')) {
      for (const point of Object.keys(value.reactors)) {
        breakpoints.push(Number(point));
        reactorLength += 1;
      }
      breakpoints.sort((a, b) => a - b );
      for (const i of breakpoints) {
        emits.push(value['reactors'][i]);
      }
    }

    const dummyPoints = Array(9 - reactorLength);
    const dummyEmits = Array(9 - reactorLength);
    dummyPoints.fill(999, 0, 8);
    dummyEmits.fill(null, 0, 8);
    watchKit.breakpoints = [...breakpoints, ...dummyPoints];
    watchKit.emits = [...emits, ...dummyEmits];

    if (containerType === 'field') {
      output[key] = { self: { watchKit, StyleCalc } };
    } else {
      output[key] = { watchKit, StyleCalc };
    }
  }

  // Safety Catch 
  // position 센서 아예 사용 안 하더라도 position {} Object는
  // 빈 것이라도 내장하고 있도록. 
  if (containerType === 'field' && !Object.keys(output).includes('position')) {
    output.position = { self: {} };
  }
  else if (containerType === 'article' && !Object.keys(output).includes('position')) {
    output.position = {};
  }


  return output
}

const modalDefaults = {
  hover: false,
  touched: false,
  shown: 0
}

const sensorDefaults = {
  position: 1,
}


const wholeBundle = {};


for (const fieldsByScale of [ fields_XS, fields_S, fields_M, fields_L ]) {
  for (const field of Object.values(fieldsByScale)) {
    const { modals, sensors } = field;

    // Check and Make Section Object in wholeBundle
    const section = getParentName(field.serial);
    if (!wholeBundle[section]) { wholeBundle[section] = {}; }
    
    // Make sensorConfigs, modalConfigs by its Scale
    const modalConfigs = {};
    const sensorConfigs = {};
    modals.base.class.push(field.serial);
    modals.base.class.push(fieldType(field.container.type));
    modals.base.style.push({
      "margin": field.self.margin,
      "padding": field.self.padding,
      "grid-template-columns": `repeat(${field.container.columns}, 1fr)`,
      "gap": field.container.gap,
      "width": field.container.widthOverride
    });
    for (const scale of field.scale) {
      modalConfigs[scale] = modals;
      sensorConfigs[scale] = SensorConfigs(sensors, 'field');
    }

    // Make states Object from modalConfigs -------
    // default modal states: [ Boolean || Int ]
    // default sensor states: [ 1 ]
    const states = { modals: {}, sensors: {} };
    for (const key of Object.keys(modals)) {
      if (key !== 'base') {
        states.modals[key] = Object.keys(modalDefaults).includes(key) ? modalDefaults[key] : 0;
      }
    }
    for (const key of Object.keys(sensors)) {
      states.sensors[key] = {};
      states.sensors[key]['self'] = Object.keys(sensorDefaults).includes(key) ? sensorDefaults[key] : 1;
    }
    // Safety Catch : Field Containers must have position sensor objects...
    if (!Object.keys(sensors).includes('position')) {
      states.sensors.position = { self: 1 };
    }

    // Make Bundle by field or only assign modalConfigs and sensorConfigs.
    if (!wholeBundle[section][field.serial]) {
      wholeBundle[section][field.serial] = {
        _type: field._type,
        serial: field.serial,
        name: field.name,
        modalConfigs, sensorConfigs, states,
        nested: {}
      };
    } else {
      Object.assign(wholeBundle[section][field.serial]['states']['modals'], states.modals);
      Object.assign(wholeBundle[section][field.serial]['modalConfigs'], modalConfigs);
      Object.assign(wholeBundle[section][field.serial]['sensorConfigs'], sensorConfigs);
    }
  }
}




for (const articlesByScale of [ articles_XS, articles_S, articles_M, articles_L ]) {
  for (const article of Object.values(articlesByScale)) {
    const field = getParentName(article.serial);
    const section = getParentName(field);
    const { sensors, modals } = article;

    // Make sensorConfigs, modalConfigs by Scales
    const modalConfigs = {};
    const sensorConfigs = {};
    modals.base.class.push(article.serial);
    modals.base.style.push({
      "grid-area": article.self.gridArea,
      "width": article.self.width,
      "place-self": article.self.place,
      "margin": article.self.margin,
      "flex-direction": article.container.direction,
      "justify-content": article.container.justify,
      "align-items": article.container.align
    })
    for (const scale of article.scale) {
      // Configs by Scales
      modalConfigs[scale] = modals;
      sensorConfigs[scale] = SensorConfigs(sensors, 'article');

      // Inject position sensorConfig to Fields Objects
      wholeBundle[section][field]['sensorConfigs'][scale]['position'][article.serial] = (typeof sensors.position !== 'undefined');
      // Inject position defualt state to Fields Objects
      wholeBundle[section][field]['states']['sensors']['position'][article.serial] = sensors.position ? 0 : 1;
    }

    // Make states Object from modalConfigs
    // default modal states: [ Boolean || Int ]
    // default sensor states: [ 1 ]
    const states = { modals: {} };
    for (const key of Object.keys(modals)) {
      if (key !== 'base') {
        states.modals[key] = Object.keys(modalDefaults).includes(key) ? modalDefaults[key] : 0;
      }
    }

    // Make Bundle by article or only assign modalConfigs and sensorConfigs.
    if (!wholeBundle[section][field]["nested"][article.serial]) {
      const basics = articlesBasics[dashToUnder(article.serial)];
      const injectTriggers = {};
      for (const [key, value] of Object.entries(basics.eventTriggers)) {
        injectTriggers[key] = TriggerCallback(value);
      }
      wholeBundle[section][field]["nested"][article.serial] = {
        modalConfigs, sensorConfigs, states,
        _type: basics._type,
        serial: basics.serial,
        name: basics.name,
        customArticle: basics.customArticle,
        injectTriggers,
        nested: {}
      };
    } else {
      Object.assign(wholeBundle[section][field]["nested"][article.serial]['states']['modals'], states.modals);
      Object.assign(wholeBundle[section][field]["nested"][article.serial]['modalConfigs'], modalConfigs);
      Object.assign(wholeBundle[section][field]["nested"][article.serial]['sensorConfigs'], sensorConfigs);
    }
  }
}














// for (const [key, value] of Object.entries(this.sensors.position)) {
  //   this["states"]["position"][key] = value ? this.getElementScrollProgress(this["doms"][key]) : 1
  // }
  
  
  

export default wholeBundle