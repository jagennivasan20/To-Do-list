import React from 'react'
import {Button} from "@mui/material"
import {Delete} from "@mui/icons-material"
const ToDoItem = ({itemText,deleteItem}) => {
  return (
    <div className='todoitems'>
        <p>{itemText}</p>
        <Button startIcon={<Delete/>}  variant="contained" color="error" onClick={deleteItem}>Delete</Button>
    </div>
  )
}

export default ToDoItem