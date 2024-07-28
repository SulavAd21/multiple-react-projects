import { useState } from "react";
import data from './data.js';
import './style.css'

export default function Accordion(){

    const [selected,setSelected]=useState(null);
    const [enableMultiSelection, setenableMultiSelection] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
setSelected(getCurrentId === selected ? null : getCurrentId);
    }

   function handleMultipleSelection(getId){
   let copyMultiple = [...multiple];
   const findIndexOfCurrentId = copyMultiple.indexOf(getId);
   
   if(findIndexOfCurrentId === -1){
    copyMultiple.push(getId)
   }else{
    copyMultiple.splice(findIndexOfCurrentId , 1)
   }
   setMultiple(copyMultiple);
   console.log(multiple)
   }
    return <div>
        <div className="wrapper">
            <button onClick={()=>setenableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 
                    ? data.map((dataItem)=>{
                       return <div className="item">
                            <div onClick={enableMultiSelection ?()=>handleMultipleSelection(dataItem.id) :()=>handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id || multiple.indexOf(dataItem.id)!== -1
                                ? <div className="content">{dataItem.answer}</div>
                                : null
                            }
                        </div>
                    })
                    :<div>No data found</div>
                } 
            </div>
        </div>
    </div>
}