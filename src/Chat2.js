import {useState} from 'react'
import"./Chat2.css"

function Chat2(){
    const [Size, setSize] = useState("small")

    function ChangeSize(){
        if(Size === "small"){
            setSize("middle");
        } else if (Size === "middle"){
            setSize("large");
        } else if (Size === "large"){
            setSize("small");
        
    }

    return (
        <div>
            <input type="button" value="Size" onClick={changeSize}/>
            <div className={"circle" +Size }/>
        </div>
    )
 }

export default Chat;