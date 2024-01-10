import React from 'react'

const StyledButton = ({heading}:{heading:string}) => {
  return (
    <>
    <button className=' text-center rounded text-white py-[18px] px-10 mb-10' style={{
        background:"linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
    }}>
        {heading}
    </button>
    </>
  )
}

export default StyledButton