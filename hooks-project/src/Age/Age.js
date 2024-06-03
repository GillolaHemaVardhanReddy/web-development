import React, { memo } from 'react'

const Age = ({handleAge,age}) => {
    console.log('age rendered');
  return (
    <div>
      <button onClick={handleAge}>-</button>{age}<button onClick={handleAge}>+</button>
    </div>
  )
}

export default memo(Age)
