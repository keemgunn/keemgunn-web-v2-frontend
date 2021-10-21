console.log("============= configs_bundle =============");
import * as fields_XS from '@/components/IDAS/configs/fields/fields_0_XS';
import * as fields_S from '@/components/IDAS/configs/fields/fields_1_S';
import * as fields_M from '@/components/IDAS/configs/fields/fields_2_M';
import * as fields_L from '@/components/IDAS/configs/fields/fields_3_L';
import * as articles_XS from '@/components/IDAS/configs/articles/articles_0_XS';
import * as articles_S from '@/components/IDAS/configs/articles/articles_1_S';
import * as articles_M from '@/components/IDAS/configs/articles/articles_2_M';
import * as articles_L from '@/components/IDAS/configs/articles/articles_3_L';



// import * as BlocksRow from '@/components/IDAS/configs/blocks/blocks_All';

function getParentName(serial) {
  return serial.slice(0, -3)
}

function fieldType(type) {
  return `field-type-${type.toLowerCase()}`
}

// function seatCheck(obj, key) {
//   if (!obj[key]) {
//     obj[key] = {};
//     return false
//   } else {
//     return true
//   }
// }



const wholeBundle = {};


const FieldsRaw = [ fields_XS, fields_S, fields_M, fields_L ];
for (const fieldsByScale of FieldsRaw) {
  for (const field of Object.values(fieldsByScale)) {

    // Check and Make Section Object in wholeBundle
    const section = getParentName(field.serial);
    if (!wholeBundle[section]) { wholeBundle[section] = {}; }
    
    // Make bindAssets by Scales
    const bindAssets = {};
    const { classKit, styleKit } = field;
    classKit.base.push(fieldType(field.container.type));
    styleKit.base.push({
      "margin": field.self.margin,
      "padding": field.self.padding,
      "grid-template-columns": `repeat(${field.container.columns}, 1fr)`,
      "gap": field.container.gap,
      "width": field.container.widthOverride
    });
    for (const scale of field.scale) {
      bindAssets[scale] = { classKit, styleKit };
    }
    
    // Make Bundle by field or only assign bindAssets.
    if (!wholeBundle[section][field.serial]) {
      wholeBundle[section][field.serial] = {
        _type: field._type,
        serial: field.serial,
        name: field.name,
        bindAssets,
        sensorConfigs: field.sensorConfigs,
        nested: []
      };
    } else {
      Object.assign(wholeBundle[section][field.serial]['bindAssets'], bindAssets);
    }
  }
}


const ArticlesRaw = [ articles_XS, articles_S, articles_M, articles_L ];
for (const articlesByScale of ArticlesRaw) {
  for (const article of Object.values(articlesByScale)) {
    const field = getParentName(article.serial);
    const section = getParentName(field);

    // Make bindAssets by Scales
    const bindAssets = {};
    const { sensors, classKit, styleKit } = article;
    styleKit.base.push({
      "grid-area": article.self.gridArea,
      "width": article.self.width,
      "place-self": article.self.place,
      "margin": article.self.margin,
      "flex-direction": article.container.direction,
      "justify-content": article.container.justify,
      "align-items": article.container.align
    })
    for (const scale of article.scale) {
      // bindAssets by Scales
      bindAssets[scale] = { sensors, classKit, styleKit };
      // sensorConfigs in Fields Objects
      if (!wholeBundle[section][field]['sensorConfigs']['position'][scale]) {
        wholeBundle[section][field]['sensorConfigs']['position'][scale] = { self: true };
      }
      wholeBundle[section][field]['sensorConfigs']['position'][scale][article.serial] = article.sensors.position;
    }

    // Make Bundle by article
    if (!wholeBundle[section][field]["nested"][article.serial]) {
      wholeBundle[section][field]["nested"][article.serial] = {
        _type: article._type,
        serial: article.serial,
        name: article.name,
        customArticle: article.customArticle,
        bindAssets,
        eventReactors: article.eventReactors,
        nested: []
      };
    } else {
      Object.assign(wholeBundle[section][field]["nested"][article.serial]['bindAssets'], bindAssets);
    }
  }
}














// for (const [key, value] of Object.entries(this.sensors.position)) {
  //   this["states"]["position"][key] = value ? this.getElementScrollProgress(this["doms"][key]) : 1
  // }
  
  
  

export default wholeBundle