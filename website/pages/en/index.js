/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_docs.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="https://kryptokrona.se">Official Website</Button>
            <Button href="https://github.com/kryptokrona">GitHub Org</Button>
            <Button href="https://discord.gg/v8duNZ6">Discord Chat</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {

  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const QuickNav = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Learn more about Kryptokrona and the community	',
            image: `${baseUrl}img/undraw_community.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("about/About-Kryptokrona")}>About Kryptokrona</a>`,
          },
          {
            content: 'A guide on setting up a Kryptokrona wallet to start receiving some XKR!',
            image: `${baseUrl}img/undraw_wallet.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("guides/wallets/Making-a-Wallet")}>Make a Wallet</a>`,
          },
          {
            content: 'A step-by-step guide to start mining Kryptokrona',
            image: `${baseUrl}img/undraw_monitor.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("guides/mining/Mining")}>Mine Kryptokrona</a>`,
          },
          {
            content: 'Information on contributing to Kryptokrona',
            image: `${baseUrl}img/undraw_contribute.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("about/Contributing")}>Contributing</a>`,
          }
        ]}
      </Block>
    );
    
    const About1 = () => (
      <Block background="">
        {[
          {
            content: '',
            image: `${baseUrl}img/undraw_money.svg`,
            imageAlign: 'right',
            title: 'Kryptokrona is a fast, easy and private cryptocurrency which allows you to send money to friends and businesses.',
          },
        ]}
      </Block>
    );

    const About2 = () => (
      <Block>
        {[
          {
            content: '',
            image: `${baseUrl}img/undraw_fun.svg`,
            imageAlign: 'left',
            title: "One of Kryptokrona's main goals is to make things as simple and as accessible as possible for everyday people, creating a cryptocurrency which is inviting, fun, and friendly.",
          },
        ]}
      </Block>
    );

    const About3 = () => (
      <Block>
        {[
          {
            content:
              `<MarkdownBlock> Come join us on [Discord](https://discord.gg/v8duNZ6)</MarkdownBlock>`,
            image: `${baseUrl}img/undraw_questions.svg`,
            imageAlign: 'right',
            title: `Have Questions or Need Help?`,
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <QuickNav />
          <About1 />
          <About2 />
          <About3 />
        </div>
      </div>
    );
  }
}

module.exports = Index;