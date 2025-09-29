// AppNavbar.jsx
import { useEffect, useRef } from 'react'

export default function AppNavbar() {
  const collapseRef = useRef(null)

  // Initialize a Collapse instance once
  useEffect(() => {
    if (!collapseRef.current) return
    const inst = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current, { toggle: false })
    return () => inst?.dispose()
  }, [])

  const closeMenu = () => {
    if (!collapseRef.current) return
    const inst = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current, { toggle: false })
    inst.hide()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container px-4 ">
        <a className="navbar-brand" href="#page-top">The Daily Nugget</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about" onClick={closeMenu}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
