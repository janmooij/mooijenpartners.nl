const withSass = require('@zeit/next-sass')
module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/algemene-voorwaarden': { page: '/algemene-voorwaarden' },
      '/contact': { page: '/contact' },
      '/downloads': { page: '/downloads' },
      '/verzekeringen': { page: '/verzekeringen' },
      '/verzekeringen/dienstverlening': { page: '/verzekeringen/dienstverlening' },
      '/verzekeringen/particulier': { page: '/verzekeringen/particulier' },
      '/verzekeringen/zakelijk': { page: '/verzekeringen/zakelijk' }
    }
  }
})
