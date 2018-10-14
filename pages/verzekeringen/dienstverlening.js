import Layout from '../../components/layout/Layout'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Content from '../../components/layout/Content'
import '../../static/styles.scss'

export default () => (
  <Layout title="Dienstverlening">
    <Header/>
    <Content
      content={
        <React.Fragment>
          <h1>Dienstverlening</h1>
          <p>In het <a href="/static/dienstverleningsdocument_mooijenpartners.pdf">dienstverleningsdocument</a> van Assurantiebedrijf Mooij en Partners vindt u, kort en bondig, onze algemene
            gegevens, openingstijden, informatie over aspecten van onze dienstverlening en waar u terecht kunt met klachten.
          </p>
          <p>→ <a href="/static/dienstverleningsdocument_mooijenpartners.pdf">Download het dienstverleningsdocument (PDF)</a></p>
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
