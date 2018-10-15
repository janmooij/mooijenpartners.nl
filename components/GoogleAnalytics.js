import ReactGA from 'react-ga'

const initGA = (trackerID, options) => {
  ReactGA.initialize(trackerID, options)
}

const logPageView = (pathName) => {
  if (pathName) {
    ReactGA.set({ page: pathName })
    ReactGA.pageview(pathName)
  } else {
    let location = window.location.pathname
    const href = window.location.href.split('?')[1]
    if (href) {
      location = location + '?' + href
    }
    ReactGA.set({ page: location })
    ReactGA.pageview(location)
  }
}

const GoogleAnalytics = {
  initGA,
  logPageView,
}

export default GoogleAnalytics
