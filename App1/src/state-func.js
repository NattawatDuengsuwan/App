import React,{useState} from "react";

export default function MessageBox() {
    let [text,setText] = useState('Hello World')
    let[size,setSize] = React.useState(16)

    const onClickSetText = () => {
        let t = prompt('กำหนดข้อความ')
        if (t) {
            setText(t)
        }
    }

    const onClickZoomln = () => {
        let newSize = size + 
        setSize(newSize)
    }
    
    let msgboxSyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgroundColor:'#ccc',
        padding: 5,
        textAlign: 'left'

    }

    return(
        < div stylr={{textAlign:'center',marginTop:20}}>
            <div stylr={msgboxSyle}>{text}</div><br></br>
            <button onClick={onClickSetText}>ข้อความ</button>&nbsp;
            <button onClick={onClickZoomln}></button>&nbsp;
            <button onClick={() => setSize(size -1)}>เพิ่มขนาด</button>
        </div>
    )

}