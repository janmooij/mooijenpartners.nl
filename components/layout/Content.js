import Address from '../Address'
import LogoSlider from '../LogoSlider'

export default ({ aside, content }) => (
  <div className="content">
    <aside className="content__aside">
      {aside || <React.Fragment>
        <LogoSlider/>
        <Address/>
      </React.Fragment>}
    </aside>
    <main className="content__content">
      {content}
    </main>
  </div>
)
