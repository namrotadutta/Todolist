import React from 'react'
import './todo.css'

function Todolist(props) {
  const deleteItemFromList =key => {
    const newList =props.itemList.filter(listofItems => {
      return listofItems.key!==key;
    
  });
   props.updateItemList(newList);
};
  return (
    <div>
      {props.itemList.map(listofItems=>{
           return (

             <div key={ listofItems.key} className="display">
             <p className="todos">{listofItems.item}</p>
             <button onClick={() => deleteItemFromList(listofItems.key)}>x</button>
             </div>
            
            ) 
           
      }

      )}
    </div>
  )
    }




export default Todolist