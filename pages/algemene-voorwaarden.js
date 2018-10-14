import Layout from '../components/layout/Layout'
import Address from '../components/Address'
import LogoSlider from '../components/LogoSlider'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'
import '../static/styles.scss'

export default () => (
  <Layout title="Downloads">
    <Header/>
    <Content
      aside={
        <React.Fragment>
          <LogoSlider/>
          <Address/>
        </React.Fragment>
      }
      content={
        <React.Fragment>
          <h1>Algemene voorwaarden</h1>
          <p>Download onze algemene voorwaarden hier als PDF bestand.</p>
          <p>→ <a href="/static/algemene_voorwaarden_mooijenpartners.pdf" target="_blank">Algemene Voorwaarden Mooij en Partners (PDF)</a></p>
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
