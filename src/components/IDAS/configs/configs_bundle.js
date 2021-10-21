console.log("============= configs_bundle =============");
import * as fields_XS from '@/components/IDAS/configs/fields/fields_0_XS';
import * as fields_S from '@/components/IDAS/configs/fields/fields_1_S';
import * as fields_M from '@/components/IDAS/configs/fields/fields_2_M';
import * as fields_L from '@/components/IDAS/configs/fields/fields_3_L';
// import * as articles_XS from '@/components/IDAS/configs/articles/articles_0_XS';
// import * as articles_S from '@/components/IDAS/configs/articles/articles_1_S';
// import * as articles_M from '@/components/IDAS/configs/articles/articles_2_M';
// import * as articles_L from '@/components/IDAS/configs/articles/articles_3_L';


// const ArticlesRaw = [ articles_XS, articles_S, articles_M, articles_L ];
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

    // Check and Make Object in wholeBundle - by session
    const section = getParentName(field.serial);
    if (!wholeBundle[section]) { wholeBundle[section] = {}; }
    
    // Make bindAssets by Scales
    const bindAssets = {};
    const { sensors, classKit, styleKit } = field;
    classKit.base.push(fieldType(field.container.type));
    styleKit.base.push({
      "margin": field.self.margin,
      "padding": field.self.padding,
      "grid-template-columns": `repeat(${field.container.columns}, 1fr)`,
      "gap": field.container.gap,
      "width": field.container.widthOverride
    });
    for (const scale of field.scale) {
      bindAssets[scale] = { sensors, classKit, styleKit };
    }
    
    // Make Bundle by field or only assign bindAssets.
    if (!wholeBundle[section][field.serial]) {
      wholeBundle[section][field.serial] = {
        _type: field._type,
        serial: field.serial,
        name: field.name,
        bindAssets,
        nested: []
      };
    } else {
      Object.assign(wholeBundle[section][field.serial]['bindAssets'], bindAssets);
    }
  }
}







// for (const [key, value] of Object.entries(this.sensors.position)) {
  //   this["states"]["position"][key] = value ? this.getElementScrollProgress(this["doms"][key]) : 1
  // }
  
  
  
console.log('wholeBundle:', wholeBundle);