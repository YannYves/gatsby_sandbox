import React from "react"
import { Link } from "gatsby"
// import "./header.module.scss"
import * as headerStyles from "./header.module.scss"

function Header() {
  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.title} to="/">
        <h1>my website</h1>
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/contact">
              contact
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/blog">
              blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/">
              home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
