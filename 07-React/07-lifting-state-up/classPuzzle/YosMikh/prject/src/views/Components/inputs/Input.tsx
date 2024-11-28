import React from 'react'
import { FC } from 'react';

interface Props{
   number:number[]
    setNumber:(number :any)=>void
}


const Input:FC<Props> = ({setNumber,number}) => {
    function handleChange(e :any){
        const {valueAsNumber} = e.target;
        setNumber([...number,valueAsNumber]);
    }
    
  return (
    <div><input type="number"  onChange={handleChange}/></div>
  )
}

export default Input