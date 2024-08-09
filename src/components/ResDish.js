import React from 'react'

const ResDish = ({data}) => {
    // console.log(data);
  return (
    //accordian header
    <div>
        <span>{data.info.category}</span>
    </div>
  )
}

export default ResDish;