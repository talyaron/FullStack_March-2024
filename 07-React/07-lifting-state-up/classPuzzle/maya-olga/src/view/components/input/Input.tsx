import React from 'react'
import "./Input.scss"

interface InputProps {
    value: number;
    onChange: (value: number) => void;
}

const Input: React.FC<InputProps> = ({value, onChange}) => {


  return (
    <div>
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(event.target.valueAsNumber)}
        />
    </div>
  )
}

export default Input