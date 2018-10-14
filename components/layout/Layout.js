import Head from 'next/head'

export default ({ title, children }) => (
  <div className="container">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title} - Assurantiebedrijf Mooij en Partners</title>
    </Head>
    {children}
  </div>
)
