import Layout from '../../components/layout/Layout'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Content from '../../components/layout/Content'
import '../../assets/styles.scss'

export default () => (
  <Layout title="Particuliere verzekeringen">
    <Header/>
    <Content
      content={
        <React.Fragment>
          <h1>Particuliere verzekeringen</h1>
          <p>Ook al kennen we in Nederland miljoenen huishoudens, ieder mens en ieder gezin is uniek. Het is van groot belang in
            dat perspectief de rol van assurantieadviseur voor particulieren invulling te geven. De adviseurs van
            assurantiebedrijf Mooij en Partners hebben daartoe niet alleen de deskundigheid, maar ook vele soorten
            verzekeringsproducten in huis.</p>
          <p>Stel dat er iets gebeurt in of rond uw huis, of met uw auto, of u heeft een pensioengat. Assurantiebedrijf Mooij
            en Partners vindt het belangrijk dat u zich goed heeft ingedekt tegen de gevolgen daarvan. Hoe? Gewoon door ons in
            te schakelen. Prettig omdat u uw verzekeringen onder kunt brengen bij één tussenpersoon die met u
            meedenkt en u onafhankelijk adviseert.</p>
          <p>In allerlei voorkomende gevallen krijgt men te maken met vragen waar niet altijd een antwoord op is.
          </p>
          <ul>
            <li>Is uw inboedel nog tegen de juiste waarde verzekerd?</li>
            <li>Welke ziektekostenverzekering is voor u geschikt?</li>
            <li>Is uw pensioenopbouw naar tevredenheid?</li>
            <li>U heeft net een huis gekocht en wilt een opstalverzekering?</li>
            <li>Welke autoverzekering is voor u het meest voordelig?</li>
            <li>U gaat op reis en heeft u wel een reisverzekering?</li>
          </ul>
        </React.Fragment>
      }
    />
    <Footer/>
  </Layout>
)
