import { Component } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Router from 'next/router'

export default class extends Component {
  render() {
    return (
      <div>
        <Header/>
        <p>This path({Router.pathname}) should not be rendered via SSR</p>
        <Footer/>
      </div>
    )
  }
}
