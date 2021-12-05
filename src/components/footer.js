import React from "react"

function Footer() {
  const currentYEar = new Date().getFullYear()

  return (
    <div>
      <footer>Create by Yann, © {currentYEar} </footer>
    </div>
  )
}

export default Footer
