import React from 'react'

const Button = ({ styles }) => {
  return (
<button
  type="button"
  className={`text-white py-4 px-6 font-poppins font-medium text-[18px] rounded-[10px] outline-none`}
  style={{ background: 'var(--black-gradient)' }}
>
  Get Started
</button>


  )
}

export default Button
