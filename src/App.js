import {useState} from 'react'

import './App.css'
import Todolist from './components/Todolist';

  function App() {
    const [currentItem, setCurrentItem] = useState(null);
    const [itemList ,updateItemList] =useState([]);

    const onChangehandler = e =>{
      setCurrentItem(e.target.value);
    };
    const addItem =() =>{
      updateItemList([...itemList , {item:currentItem ,key:Date.now()}]);
      setCurrentItem("");
    };
   
  
    return (
      <div className="App">
        
        <header className='appHeader'>
          <h1>Todo List</h1>
          <div className='wrapper'>
            <div className='inputWrapper'>
              <input value={currentItem} onChange={onChangehandler} placeholder="Please enter anything to add in todolist"/>
              <button onClick={addItem}>+</button>
              
            </div>
            
            <Todolist itemList={itemList} updateItemList={updateItemList}/>
    
          </div>

        </header>
      </div>
    )
  
}
export default App
