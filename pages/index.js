import Address from '../components/Address'
import LogoSlider from '../components/LogoSlider'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'
import '../assets/styles.scss'

export default () => (
  <Layout title="Home">
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
          <h1>Kantoorprofiel Assurantiebedrijf Mooij en Partners</h1>
          <p>Assurantiebedrijf Mooij en Partners is actief op het gebied van verzekeren. In 2004 is de inschrijving verkregen in
            het personenregister Registeradviseur in Assurantiën (RAIA).</p>
          <p>Door jarenlange praktijkervaring en het stellen van hoge eisen aan opleidingen (scholing en permanente educatie)
            kunnen wij u van up-to-date advies voorzien over zowel persoonlijke- als bedrijfsmatige situaties. Hierbij achten wij
            het van belang dat uw risico’s zodanig in beeld gebracht worden dat u in geval van calamiteiten precies weet waar u
            aan toe bent.</p>
          <h2>Persoonlijke situatie</h2>
          <p>Met betrekking tot uw persoonlijke situatie kunt u denken aan financiële verplichtingen (hypotheek, financieringen),
            maar ook arbeidsongeschiktheid, overlijden/uitvaart en pensioen. Daarnaast is het van belang de materiële zaken en
            aansprakelijkheden in kaart te brengen. Denk hierbij aan uw auto, huis en inboedel, aansprakelijkheid, rechtsbijstand
            etc.</p>
          <h2>Bedrijfssituatie</h2>
          <p>In een bedrijfssituatie zijn de risico’s vele malen complexer, vooral nu de overheid zich steeds verder terugtrekt en
            de risico’s bij de ondernemer neerlegt. Op het gebied van personeelsvoorzieningen, zoals verzuim en langdurige
            arbeidsongeschiktheid is het inzichtelijk maken van de risico’s hierdoor nog belangrijker geworden. En ook hier
            verdienen de risico’s met betrekking tot beroepsaansprakelijkheden en werkgeversaansprakelijkheid de nodige
            aandacht.</p>
          <p>Assurantiebedrijf Mooij en Partners werkt samen met een groot aantal marktpartijen waar alle verzekerbare risico’s
            ondergebracht kunnen worden. Dit betreft een scala aan verzekeringsmaatschappijen en assurantiemakelaars die werken op
            de assurantiebeurzen.</p>
          <p>Om u beter van dienst te kunnen zijn hebben wij in ons dienstverleningsdocument en de algemene voorwaarden vastgelegd
            wat u van ons mag verwachten. Voor complexe zaken maken wij gebruik van zogenaamde opdrachtformulieren zodat gemaakte
            afspraken duidelijk zijn vastgelegd.</p>
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
