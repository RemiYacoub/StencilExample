
//import * as data from '../../../assets/visualJsonData.json';

import { JsonFile } from './Json_readFile';
const JsonFileRead = await JsonFile('../../../assets/visualJsonData.json');

/*

function parseJsonToVisual(){
    var visualData = JSON.parse(JsonFileRead);
    var visualDataString = JSON.stringify(visualData);
    return visualDataString;
}

const visualDataString = parseJsonToVisual();

*/

function iterateJsonObject(jsonObject) {
    var visualDataObject = JSON.parse(jsonObject);
    var visualData = visualDataObject.visualData;
    for(var i = 0; i < visualData.length; i++){
        var visualDataItem = visualData[i];
        var visualDataItemString = JSON.stringify(visualDataItem);
        var visualDataItemObject = JSON.parse(visualDataItemString);
        var visualDataItemType = visualDataItemObject.name;
        var visualDataItemValue = visualDataItemObject.valeur;
        var visualDataItemName = visualDataItemObject.type;
        var visualDataItemTaille = visualDataItemObject.taille;
    var jsonObjectString = JSON.stringify(jsonObject);
    return jsonObjectString;
}

/*
function getType(any){
    var jsonObjectString = JSON.stringify(any);
    var jsonObjectObject = JSON.parse(jsonObjectString);
    var jsonObjectType = jsonObjectObject.type;
    return jsonObjectType;
}
console.log(Object.getType("string"));
*/

console.log(iterateJsonObject(JsonFileRead));

}

/*

alert(visualDataString["person1"]);
alert(visualDataString.person1);

// alert(visualDataString["address"].city);

*/

