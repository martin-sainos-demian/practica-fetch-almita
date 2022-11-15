import {firestore as db}  from './firebase' 
import firebase from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {Button} from "react-native"

var nameVar=""

function GetPass(vars){
    return(
        <div>
            <p>database</p>
            <p>{nameVar}</p>
            <Button onPress={getTest}></Button>
        </div>
    )
}

const getTest = async function(){
  let list = getDB("test")
  console.log(list)
  nameVar="get"
}

const getDB = async function(col){
  const ram = collection(db, col);
  const get = await getDocs(ram)
  const list = get.docs.map(doc => doc.data());
  return list
}

export default GetPass;