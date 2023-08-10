import React from 'react'

export default function IconsDiv({img,text,iconNo}) {
  return (
    <div className={`icons-div icon-div-${iconNo}`}>
    <img src={img } alt='icon' />
    <h6>{text}</h6>
</div>
  )
}
