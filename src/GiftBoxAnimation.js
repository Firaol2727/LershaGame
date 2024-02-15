import React, { useReducer, useRef,useEffect } from "react";
import "./styles.css";

import box from "./images/box.png";
import santa2 from "./images/santa2.png"
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";
/* Gift Images */

import Banana from "./images/gifts/Banana.png";
import BicPen from "./images/gifts/BicPen.png";
import Chocolate from "./images/gifts/Chocolate.png";
import abuwalad from "./images/gifts/abuwalad.png";
import bandaid from "./images/gifts/bandaid.png";
import candy from "./images/gifts/candy.png";
import comb from "./images/gifts/comb.png";
import karta from "./images/gifts/karta.png";
import lershamug from "./images/gifts/lershamug.png";
import mask from "./images/gifts/mask.png";
import mobilecard from "./images/gifts/mobilecard.png";
import slippershoe from "./images/gifts/slippershoe.png";
import socks from "./images/gifts/socks.png";
import speciamment from "./images/gifts/speciamment.png";
import spoon from "./images/gifts/spoon.png";
import teapowder from "./images/gifts/teapowder.png";
import hairperm from "./images/gifts/perm.png";
import sugar from "./images/gifts/sugar.png";
import chornakie from "./images/gifts/chornakie.png";
// import {  } from "./images/gifts/Banana.png";
import nogift from "./images/gifts/nogift.png"
import winsound from "./audio/win_audio.wav";
import lossound from "./audio/oo.wav";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};
export default function GiftBoxAnimation(props) {
  const gifts=[
    "G1","G2","G3","G4","G5",
    "G6","G7","G8","G9","G10",
    "G11","G12","G13","G14","G15",
    "G16","G17","G18","G19","G20",
    "",
  ]
  const audioref=useRef(null);

  const handleClose=()=>{
    audioref.current.pause();
    audioref.current.currentTime=0;
    onClose();
  }
  const {onClose,selectedValue}=props;
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );
  setTimeout(() => {
    if(audioref.current){
      audioref.current.play()
    }
    
    animate()
    
    
  }, 4000);

  const { move, rotating, rotated, jump } = state;
 

  
  function animate() {
    
   
    let isDone = false
    // rotated === "rotated" ? true : false;

    if (!isDone) 
    {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
     

      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  return (
    <div className="App">
      {(selectedValue!="") &&<Confetti open={jump === "jump"} />}
      <div className="img-container">
          {(selectedValue=="") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={nogift} alt="kuku" />} 
          {(selectedValue=="G1") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={BicPen} alt="kuku" />}
          {(selectedValue=="G2") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={Chocolate} alt="kuku" />}
          {(selectedValue=="G3") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={abuwalad} alt="kuku" />}
          {(selectedValue=="G4") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={bandaid} alt="kuku" />}
          {(selectedValue=="G5") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={candy} alt="kuku" />}
          {(selectedValue=="G6") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={comb} alt="kuku" />}
          {(selectedValue=="G7") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={karta} alt="kuku" />}
          {(selectedValue=="G8") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={lershamug} alt="kuku" />}
          {(selectedValue=="G9") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={mask} alt="kuku" />}
         { (selectedValue=="G10") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={mobilecard} alt="kuku" />}
          {(selectedValue=="G11") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={slippershoe} alt="kuku" />}
          {(selectedValue=="G12") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={socks} alt="kuku" />}
          {(selectedValue=="G13") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={speciamment} alt="kuku" />}
         { (selectedValue=="G14") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={spoon} alt="kuku" />}
        {  (selectedValue=="G15") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={teapowder} alt="kuku" />}
         { (selectedValue=="G16") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={hairperm} alt="kuku" />}
          {(selectedValue=="G17") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={sugar} alt="kuku" />}
         { (selectedValue=="G18") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={chornakie} alt="kuku" />}
         { (selectedValue=="G19") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={mobilecard} alt="kuku" />}
         { (selectedValue=="G20") && <img className={`kuku ${jump}`} width={"120px"} height={"120px"}  src={Banana} alt="kuku" />}
         
          {/* selectedValue ?
          <img className={`kuku ${jump}`} width={"120px"} height={"140px"}  src={santa2} alt="kuku" />
          :<img className={`kuku ${jump}`} width={"140px"} height={"140px"}  src={kuku} alt="kuku" />
          } */}
        <button className="box" onClick={() => animate()}>
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
      <button style={{
        backgroundColor:"red",
        width:"60px",
        height:"60px",
        textAlign:"center",
        position:"absolute",
        color:"white",
        right:"4%",
        top:"2%",
        fontSize:"40px",
        border:"3px solid ",
        borderRadius:"60px",
        borderColor:"white"
      }} onClick={()=>{
        handleClose()
      }}>x</button>
      { selectedValue==""?
            <audio style={{
            
            display: "none"
          
        }} src= {lossound} ref={audioref} typeof="audio/wav"controls>
      Your browser does not support the audio element.
          </audio> :
          <audio style={{
                  
                  display: "none"
                
              }} src= {winsound} ref={audioref} typeof="audio/wav"controls>
            Your browser does not support the audio element.
          </audio>
      }
        {/* <audio style={{
            
            display: "none"
          
        }} src= {winsound} ref={audioref} typeof="audio/wav"controls>
      Your browser does not support the audio element.
    </audio> */}
    </div>
  );
}
