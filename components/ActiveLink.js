import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, type }) => {
  const isActive = router.pathname === href

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={`${type}__navigation-link${isActive ? ' _is_active' : ''}`}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
