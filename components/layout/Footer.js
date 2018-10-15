import ActiveLink from '../ActiveLink'

export default () => (
  <footer className="footer">
    <div className="footer__navigation">
      <span>&copy; {(new Date()).getFullYear()}</span>
      <ActiveLink type='footer' href='/algemene-voorwaarden'>Algemene Voorwaarden</ActiveLink>
      <ActiveLink type='footer' href='/verzekeringen/dienstverlening'>Dienstverlening</ActiveLink>
      <a href="/static/privacy-statement.pdf" target="_blank" rel="noopener">Privacy</a>
    </div>
  </footer>
)
