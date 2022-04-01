
//import * as data from '../../../assets/visualJsonData.json';

import { JsonFile } from './Json_readFile';
import * as fs from 'fs';

const JsonFileRead = await JsonFile('../../../assets/visualJsonData.json');

/*

function parseJsonToVisual(){
    var visualData = JSON.parse(JsonFileRead);
    var visualDataString = JSON.stringify(visualData);
    return visualDataString;
}

const visualDataString = parseJsonToVisual();

*/

function jsonMakePromise(file: fs.PathOrFileDescriptor) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

var jsonObjectString = JSON.stringify(jsonObject);
jsonMakePromise(jsonObjectString);

function iterateJsonObject(jsonObject) {
    var visualDataObject = JSON.parse(jsonObject);
    var visualData = visualDataObject.visualData;
    for(var i = 0; i < visualData.length; i++) {
        var visualDataItem = visualData[i];
        var visualDataItemString = JSON.stringify(visualDataItem);
        var visualDataItemObject = JSON.parse(visualDataItemString);
        visualDataItemName = visualDataItemObject.name;
        var visualDataItemName = visualDataItemObject.name;
        var visualDataItemValue = visualDataItemObject.valeur;
        var visualDataItemType = visualDataItemObject.type;
        var visualDataItemTaille = visualDataItemObject.taille;
        var jsonObjectString = JSON.stringify(jsonObject);
      return jsonObjectString;
}

var jsonNotes = iterateJsonObject(JsonFileRead);
console.log(jsonNotes);
alert(jsonNotes["name"]);

/*
function getType(any){
    var jsonObjectString = JSON.stringify(any);
    var jsonObjectObject = JSON.parse(jsonObjectString);
    var jsonObjectType = jsonObjectObject.type;
    return jsonObjectType;
}
console.log(Object.getType("string"));
*/



}


function jsonObject(_jsonObject: any) {
  throw new Error('Function not implemented.');
}
/*

alert(visualDataString["person1"]);
alert(visualDataString.person1);

// alert(visualDataString["address"].city);

*/

