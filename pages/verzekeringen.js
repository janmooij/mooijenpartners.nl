import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'
import ActiveLink from '../components/ActiveLink'
import '../static/styles.scss'

export default () => (
  <Layout title="Verzekeringen">
    <Header/>
    <Content
      content={
        <React.Fragment>
          <h1>Verzekeringen</h1>
          <h2>Particulier</h2>
          <p>Assurantiebedrijf Mooij en Partners biedt een compleet pakket verzekeringen. Deze verzekeringen hebben een
            uitstekende dekking voor een scherpe premie. Assurantiebedrijf Mooij en Partners werkt volledig onafhankelijk en heeft
            geen enkele binding met welke maatschappij dan ook. Deze onafhankelijkheid staat garant voor een objectief advies en
            stelt ons in staat de juiste premies en voorwaarden voor u uit te zoeken.</p>
          <p><ActiveLink href="/verzekeringen/particulier">Lees verder over particulier..</ActiveLink></p>
          <p>&nbsp;</p>
          <h2>Zakelijk</h2>
          <p>Als ondernemer loopt u risico’s. Natuurlijk loopt u deze als particulier ook, maar bij een eigen zaak ligt dit toch
            anders. Als directeur kunt u behalve persoonlijk, ook als bedrijf aansprakelijk gesteld worden. En bij brand
            bijvoorbeeld, ligt wel uw hele bedrijf plat. Het is dan ook zaak om de risico’s die u loopt niet te onderschatten.
            Verzekeraars zijn meer dan bereid uw risico’s te verzekeren. Hier moet echter wel voor worden betaald, terwijl een
            dure verzekering in bepaalde gevallen helemaal niet nodig is. Aan de andere kant bieden verzekeringsmaatschappijen
            tegenwoordig meer dan alleen een polis. Zo kunt u door het treffen van schadepreventiemaatregelen belangrijke risico’s
            terugbrengen en daarmee de schadekans verlagen. Assurantiebedrijf Mooij en Partners denkt graag met u mee om schade te
            voorkomen.</p>
          <p><ActiveLink href="/verzekeringen/zakelijk">Lees verder over zakelijk..</ActiveLink></p>
          <p>Voor een volledig overzicht, raadpleeg het <ActiveLink href="/verzekeringen/dienstverlening">dienstverleningsdocument</ActiveLink>.</p>
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
