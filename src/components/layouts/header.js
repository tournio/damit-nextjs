import Head from 'next/head';

export const siteTitle = 'DAMIT 2023';

const Header = () => (
  <Head>
    <title>{siteTitle}</title>
    <meta httpEquiv={"Content-Type"} content={"text/html; charset=utf-8"} />
    <meta name={"title"} content={siteTitle} />
    <meta name={"viewport"} content={"width=device-width, initial-scale=1.0, shrink-to-fit=no"} />
    <meta name={'description'} content={'DAMIT is the Dallas Area MAsters Invitational Tournament, an IGBO-affiliated bowling tournament'} />
    <meta name={'twitter:card'} content={'summary_large_image'} />
    {/*<link rel="icon" type="image/x-icon" href="/tournio/tournio-favicon.png" />*/}
  </Head>
);

export default Header;