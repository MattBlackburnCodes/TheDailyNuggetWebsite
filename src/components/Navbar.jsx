// AppNavbar.jsx
import { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/useAuth.js'

export default function AppNavbar() {
  const navRef = useRef(null)
  const collapseRef = useRef(null)
  const { currentUser } = useAuth()

  // Initialize a Collapse instance once
  useEffect(() => {
    if (!collapseRef.current) return
    const inst = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current, { toggle: false })
    return () => inst?.dispose()
  }, [])

  const closeMenu = useCallback(() => {
    if (!collapseRef.current) return
    const inst = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current, { toggle: false })
    inst.hide()
  }, [])

  useEffect(() => {
    const closeOnOutsideTap = (event) => {
      if (!navRef.current || !collapseRef.current?.classList.contains('show')) return
      if (!navRef.current.contains(event.target)) closeMenu()
    }

    const closeOnScroll = () => {
      if (collapseRef.current?.classList.contains('show')) closeMenu()
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('pointerdown', closeOnOutsideTap)
    window.addEventListener('scroll', closeOnScroll, { passive: true })
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideTap)
      window.removeEventListener('scroll', closeOnScroll)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [closeMenu])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blackburn-black fixed-top" id="mainNav" ref={navRef}>
      <div className="container px-4 ">
        <Link className="navbar-brand text-gold fw-bold" to="/">The Daily Nugget</Link>

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

        <div className="collapse navbar-collapse " id="navbarResponsive" ref={collapseRef}>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item"><Link className="nav-link text-gold fw-bold" to="/about" onClick={closeMenu}>About</Link></li>
            <li className="nav-item"><Link className="nav-link text-gold fw-bold" to="/contact" onClick={closeMenu}>Contact</Link></li>
            {/*<li className="nav-item"><Link className="nav-link text-gold fw-bold" to={{ pathname: "/", hash: "#contact" }} onClick={closeMenu}>Contact</Link></li>*/}
            <li className="nav-item"><Link className="nav-link text-gold fw-bold" to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></li>
            <li className="nav-item"><Link className="nav-link text-gold fw-bold" to="/merch" onClick={closeMenu}>Merch</Link></li>
            <li className="nav-item"><Link className="nav-link text-gold fw-bold" to="/games" onClick={closeMenu}>Games</Link></li>
            <li className="nav-item"><Link className="nav-link text-gold fw-bold" to="/submit" onClick={closeMenu}>Submit</Link></li>
            <li className="nav-item"><Link className="nav-link text-gold fw-bold" to="/account" onClick={closeMenu}>{currentUser ? 'Account' : 'Sign Up'}</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
