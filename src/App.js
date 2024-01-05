import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useReducer } from 'react'
import './list.css'

import { SimpleDialog } from './openMiracleBox';
import { generateCards } from './generateCards';
import LershaLogo from './images/lersha.png';
const App=()=>{
  let cardds=generateCards();
  const [cards, setCards]=useState(cardds);
  console.log("card  ",cardds)
  console.log("card  ",cards)
  const handleListUpdate = (index) => {
    let updatedList = [...cards]; // Create a copy of the list array
    updatedList[index].is_selected = true; // Modify the copy
    setCards(updatedList); // Update the state with the modified copy
  };
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleClickOpen = (index) => {
    if(!cards[index].is_selected){
      setOpen(true);
      handleListUpdate(index)
      setSelectedValue(cards[index].gift);
      
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    { !open &&  <div >
      <div style={{
        position:"absolute",
        top:"7%",
        right:"2%",
        color:"white"
      }}>Powered by Lersha Dev team</div>
      <div className="flex-indicator">
           <div className="sel_indicator" 
            >
            </div>
            <p className='word' >Selected</p>
            <div className="un_indicator" >
            </div>
            <p className='word'>Not selected</p>
      </div>
      <hr style={{
        color:"#DABC58",
        width:"90%",
        height: "6.426px",
        flexShrink: "0"
      }} />
    <div className="flex-container">
        {
        
          cards.map(
            obj=>{
              return <div
              key={obj.no}
              className={obj.is_selected ? "selected" : "unselected"}
              onClick={() => handleClickOpen(obj.no-1)}
            >
               { obj.is_selected ? 
                 <img src={LershaLogo} style={{
                    width:"50px",
                    height:"50px",
                    marginTop:"10px",
                    alignSelf:"center",
                    justifySelf:"center"
                 }} width={"50px"} height={"50px"} alt="Lersha"/>:
                 <p className='word'>{obj.no}
                  </p> 
                  }
             
            </div>
            }
          )
        }
      </div>
    </div>}
    
        <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    
    </div>
  );
}

export default App;
