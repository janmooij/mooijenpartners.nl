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
          <title>{this.props.title} - Assurantiebedrijf Mooij en Partners</title>
        </Head>
        {this.props.children}
      </div>
    )
  }
}
