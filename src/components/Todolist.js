import React from 'react'

function Todolist(props) {
  return (
    <div>
      {props.itemList.map(listofItems=>{
           return <p className="todos">{listofItems.item}</p>;
           
      }

      )}
    </div>
  )
}



export default Todolist