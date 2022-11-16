import {firestore as db}  from './firebase' 
import firebase from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {Button} from "react-native"

var nameVar=""

function Database(vars){
    return(
        <div>
            <p>database</p>
            <p id="nameVar">{nameVar}</p>
            <Button onPress={getTest} title="GET"></Button>
        </div>
    )
}

const getTest = async function(){
  let dbFetch = await fetch("https://fetch-almita-api.cyclic.app/get/?name=test", {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      return json
    })
  nameVar=""
  let list=dbFetch.data
  console.log(list)
  for(let reg in list){
    nameVar+=list[reg].test.test
    nameVar+="<input type='button' value='delete' onclick='"
    nameVar+='fetch("https://fetch-almita-api.cyclic.app/del/?id='+list[reg].id+'", {method : "GET",}).then(function(response) {return response.json(); }).then(function(json) {return json})'
    console.log(nameVar)
    nameVar+="' />"
    nameVar+="<br>"
  }
  update()
}

const update = function(){
  document.getElementById("nameVar").innerHTML=nameVar
}

export default Database;