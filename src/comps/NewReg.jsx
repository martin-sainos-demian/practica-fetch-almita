import {Button} from "react-native"

function NewReg(vars){
    return(
        <div>
            <input type="text" id="newRegIn"></input>
            <Button onPress={saveReg} title="SAVE"></Button>
        </div>
    )
}

const saveReg = async function(){
    let value = document.getElementById("newRegIn").value
    let url="https://fetch-almita-api.cyclic.app/new/?value="+value
    url = encodeURI(url)   
    await fetch(url, {method : 'GET',})
    .then(function(response) {
       return response.json(); })
      .then(function(json) {
        console.log(json)
        return json
      })
      console.log("new reg")
}
export default NewReg;