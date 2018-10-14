import Address from '../components/Address'
import LogoSlider from '../components/LogoSlider'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'
import '../static/styles.scss'

export default () => (
  <Layout title="Neem contact op">
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
          <h1>Contact</h1>
          <p>Neem contact op via telefoon of e-mail:</p>
          <Address />
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
