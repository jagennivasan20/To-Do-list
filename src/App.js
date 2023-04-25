import React, { useState } from 'react'
import InputArea from './InputArea'
import ToDoItem from './ToDoItem';
import "./App.css"
const App = () => {

const [items,setItems] =useState([])

console.log(items);

const addItems=(item)=>{
  setItems((preValue)=>{
    return [...preValue,item]
    })
}
const deleteItem = (id)=>{
  setItems((preValue)=>{
    let removedItem = preValue.filter((item,index)=>{
      return index!==id
    })
    return removedItem
  })
}
  return (
    <div className='app'>
      <h1 className='app__title'>To-Do List</h1>
      <InputArea addItems={addItems}/>
      <div className='itemscontainer'>
        {items.length ===0? (<h1 style={{textAlign:"center"}}>No items Added</h1>):(items.map((item,index)=>{
            return(
              <ToDoItem 
              key={index}
              itemText={item}
              deleteItem={()=>deleteItem(index)}
              />
            )
          })
          )}
      </div>
    </div>
  )
}

export default App