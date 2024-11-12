import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'

function Termek(props) {
    const {kosarba}=useContext(KosarContext)

  return (
    <div className='card col-lg-4'>
        <div class="card-header">{props.elem.title}</div>
        <img class="card-body" src={props.elem.image}/>
        <div class="card-footer">
            {props.elem.price}$
            <br />
            <button onClick={()=>kosarba(props.elem)}>Kosárba</button>
        </div>
    </div>
  )
}

export default Termek