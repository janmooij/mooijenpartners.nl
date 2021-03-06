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
          <h1>Downloads</h1>
          <p>Hieronder vindt u een aantal nuttige downloads.</p>
          <p>→ <a href="/static/schadeaangifte-algemeen.pdf" target="_blank" rel="noopener">Schadeaangifte algemeen (PDF)</a></p>
          <p>→ <a href="/static/schadeformulier autoverzekering.pdf" target="_blank" rel="noopener">Schadeformulier
            autoverzekering (PDF)</a></p>
          <p>→ <a href="/static/dienstverleningsdocument-risicos-afdekken.pdf" target="_blank" rel="noopener">Dienstverleningsdocument
            Risico's
            afdekken (PDF)</a></p>
          <p>→ <a href="/static/dienstverleningsdocument-vermogen-opbouwen.pdf" target="_blank" rel="noopener">Dienstverleningsdocument
            Vermogen
            opbouwen (PDF)</a></p>
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
