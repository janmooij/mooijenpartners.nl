import Head from 'next/head'
import { Component } from 'react'
import GoogleAnalytics from '../GoogleAnalytics'

export default class Layout extends Component {

  componentDidMount() {
    const dev = process.env.NODE_ENV !== 'production'

    if (window && !window['GA_INITIALIZED']) {
      GoogleAnalytics.initGA('UA-10490941-1', { debug: dev })
      window['GA_INITIALIZED'] = true
    }
    GoogleAnalytics.logPageView()
  }

  render() {
    return (
      <div className="container">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#A29061"/>
          <meta name="keywords" content="Mooij, assurantiebedrijf, assurantie, verzekeringen"/>
          <meta property="og:url" content="https://www.mooijenpartners.nl"/>
          <meta property="og:title" content={`${this.props.title} - Assurantiebedrijf Mooij en Partners`}/>
          <meta property="og:description" content="Assurantiebedrijf Mooij en Partners"/>
          <meta property="og:locale" content="nl_NL"/>
          <meta property="og:site_name" content="Assurantiebedrijf Mooij en Partners"/>
          <link rel="manifest" href="/static/manifest.json"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="shortcut icon" href="/static/favicon.ico"/>
          <title>{this.props.title} - Assurantiebedrijf Mooij en Partners</title>
        </Head>
        {this.props.children}
      </div>
    )
  }
}
