import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer ClassName="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div ClassName="col-md-4 d-flex align-items-center">
      <Link href="/" ClassName="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
       
      </Link>
      <span ClassName="text-muted">© 2024 GooFood, Inc</span>
    </div>

   
  </footer>
    </>
  )
}

export default Footer