import React from 'react'

interface OutputProps {
    highestNumber: number
}

const Output: React.FC<OutputProps> = ({highestNumber}) => {
  return (
    <div>
        <span>Highest Number: </span>
        {highestNumber}
    </div>
  )
}

export default Output