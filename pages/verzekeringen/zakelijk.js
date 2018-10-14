import Layout from '../../components/layout/Layout'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Content from '../../components/layout/Content'
import '../../assets/styles.scss'

export default () => (
  <Layout title="Zakelijke verzekeringen">
    <Header/>
    <Content
      content={
        <React.Fragment>
          <h1>Zakelijke verzekeringen</h1>
          <p>Uit ervaring weten wij dat u als ondernemer unieke uitdagingen beantwoordt met onderscheidende producten en
            diensten. De adviseurs van Assurantiebedrijf Mooij en Partners kennen de uitdaging die u als ondernemer in het
            midden- en kleinbedrijf op uw pad tegenkomt.
          </p>
          <p>Als ondernemer wilt u exact weten welke verzekeringen voor uw bedrijf zinvol of overbodig zijn. Bovendien wilt u
            in één oogopslag zien hoe compleet uw verzekeringen zijn.
          </p>
          <p>Ondernemers lopen uiteenlopende risico's, waardoor schade kan ontstaan aan hun middelen, personeel
            en organisatie. Naast de gebruikelijke schade- en aansprakelijkheidsverzekeringen zijn er vele
            verzekeringsvormen
            die betrekking hebben op de risico's op het gebied van financiën, arbeidsomstandigheden, reputatie
            etc.
            Verzekeringen dekken weliswaar de eventuele financiële schade, maar schade en calamiteiten kunnen er niet
            mee
            worden voorkomen.<br/> Ook hier geldt dus: "voorkomen is beter dan genezen".
          </p>
          <p>Assurantiebedrijf Mooij en Partners analyseert, adviseert en bemiddelt voor u. Als specialist en
            onafhankelijk
            tussenpersoon kennen wij de maatschappijen en verzekeringsmogelijkheden.
          </p>
          <p>Meer weten? Neem dan <a href="/contact">contact</a> met ons op.
          </p>
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
