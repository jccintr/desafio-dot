
import { useState } from 'react';
import './App.css';



function App() {
const [dotList,setDotList] = useState([]);
const [undoDotList,setUndoDotList] = useState([]);


const onPageClick = (event) => {
  
  const newDot = {
    clientX: event.clientX,
    clientY: event.clientY
  }

  const newDotList = [...dotList, newDot];
  setDotList(newDotList);
 
}

const onDesfazerClick = (event) => {
  event.stopPropagation();
  
 
 // const newDotList = dotList.splice(-1);
  //const newDotList = dotList.pop();
  //const newDotList = dotList.slice(0, dotList.length-1);
  if (dotList.length===0){
    return;
  }
 
  // recupera o ultimo ponto da lista de pontos
  const lastDot = dotList[dotList.length-1];
  // insere o ponto recuperado na lista de pontos apagados
  const newUndoDotList = [...undoDotList, lastDot];
  setUndoDotList(newUndoDotList);
  // remove o ultimo item da lista de pontos
  const newDotList = dotList.slice(0, -1);
  setDotList(newDotList);


}

const onRefazerClick = (event) => {

  event.stopPropagation();
  

  if (undoDotList.length===0){
    return;
  }

  const lastUndoDot = undoDotList[undoDotList.length-1];

  const newUndoDotList = undoDotList.slice(0, -1);
  setUndoDotList(newUndoDotList);

  const newDotList = [...dotList, lastUndoDot];
  setDotList(newDotList);

 

}


  return (
    <div className='pagina' onClick={onPageClick}>
      <button className="botao" onClick={onDesfazerClick}>Desfazer</button>
      <button className="botao" onClick={onRefazerClick}>Refazer</button>
      {dotList.map((dot,index)=><div key={index} className='dot' style={{top:dot.clientY,left:dot.clientX}}></div>)}
    </div>
  );
}

export default App;
