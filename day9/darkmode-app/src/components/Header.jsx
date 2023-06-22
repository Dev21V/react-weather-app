import React from 'react'

function Header(props) {
  const {darkmode,handleDarkmode} = props;
  // console.log(darkmode);
  return (
    <header>
      <h1>header</h1>
      <button onClick={handleDarkmode}>DarkMode</button>
    </header>
  )
}

export default Header