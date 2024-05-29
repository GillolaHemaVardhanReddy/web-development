import React, { memo } from 'react'
const Name = ({tag,name,handleName}) => {
  console.log('name rendered')
  return (
    <div>
      <input type='text' name={tag} value={name[tag]} onChange={handleName}/>
    </div>
  )
}
export default memo(Name)