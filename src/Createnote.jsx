import React , {useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
//import { toUnitless } from '@mui/material/styles/cssUtils';
//import IconButton from '@mui/material/IconButton';


const Createnote = (props) => {

  const [expand , setExpand] = useState(false);
  
  const [note , setNote] = useState({
    title: "",
    content: ""
  })

  
  const InputEvent = (event) =>{
    // const value = event.target.value ;
  // const name = event.target.name ;
    const {name , value} = event.target;
    setNote((prev) =>{
      return {
        ...prev,
          [name]:value,
      }
    })
    console.log(note)
  }

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title:"",
      content:"",
    })
  };

    const expandIt = () =>{
      
        setExpand(true);
      
    }

    const btoNormal = () =>{
      setExpand(false)
    }

  

  return (
    <>
      <div className="main_note" onDoubleClick={btoNormal} style={{height:expand? "230px" : "75px" }}>
        <form>

        {expand?(
            <input type='text'
            value={note.title}
            name="title"
            onChange={InputEvent} 
            placeholder='Title' 
            autoComplete='off'/>
        ) : null}


            <textarea rows="" 
            column="" 
            value={note.content} 
            name="content"
            onChange={InputEvent} 
            placeholder="Write a note..."
            onClick={expandIt}
            />


          {expand?
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign"/>
              </Button> : null}
           
           
            
        </form>
      </div>
    </>
  )
}

export default Createnote;
