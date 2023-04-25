import React, { useState } from 'react'
import {Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
const InputArea = ({addItems}) => {

    const [inputText,SetInputText] = useState("")

const handleChange = (event)=>{
    SetInputText(event.target.value)
}

const addItem = ()=>{
    addItems(inputText)
SetInputText("")
}

  return (
    <div className='inputfield'>
        <input onChange={handleChange} value={inputText} placeholder='what is do you mind'/>
        <Button variant="outlined" startIcon={<AddIcon/>} onClick={addItem}> Add Item</Button>
    </div>
  )
}

export default InputArea