import React, { useEffect, useState } from 'react'
const MIN = 0;
 const MAX = 100;

function Progress({ value = 0, }) {

const [percent, setPercent] = useState(value);

useEffect(() => {
    setPercent(Math.min(Math.max(value,MIN)),MAX)
}, [value]);

    return (
    <div className='progress'>
    <span style={{color: percent > 49 ? "white" : "black"}}>{percent.toFixed()}%</span>
    <div style={{
        transform:`ScaleX(${percent / MAX})`,
        transformOrigin: "left"
    }}
    // style={{width:`${percent}%`}}
    role="progressbar" 
    aria-valuemin={MIN}
    aria-valuemax={MAX}
    aria-valuenow={percent.toFixed()}></div>
    </div>
  )
}

export default Progress;
