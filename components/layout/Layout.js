import Head from 'next/head'

export default ({ title, children }) => (
  <div className="container">
    <Head>
      <title>{title} - Assurantiebedrijf Mooij en Partners</title>
    </Head>
    {children}
  </div>
)
