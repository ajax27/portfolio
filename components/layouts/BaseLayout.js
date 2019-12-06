import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    cannonical
  } = props;
  const headerType = props.headerType || "default";
  const title = props.title || "Shaun Collins Portfolio";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My name is Shaun Collins and I am an experienced software engineer and freelance developer. I am totally a self-taught developer and have several years of experience working on a wide range of technologies and projects from PHP and Laravel for large E-Commerce platforms to modern mobile and web applications in JavaScript Node, React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to get in touch if you would like to collaborate on a project or need a free quote for a project you would like built."
        />
        <meta
          name="keywords"
          content="ajax27 full-stack developer, collins portfolio, collins developer, collins freelancig, collins programming"
        />
        <meta
          property="og:title"
          content="Shaun Collins - programmer, developer, blogger and lover of all things Code!"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Shaun Collins and I am an experienced software engineer and freelance developer."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
