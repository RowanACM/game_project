import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

interface Props {
  name: string;
}

export default class PageContainer extends React.Component<Props> {
  private name: string;

  constructor(props: Props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <div>
        <Head>
          <title>React Game - {this.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <style global jsx>{`
          body,
          html {
            background: #85e7ff;
          }
          #pageContainer {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }
          canvas {
            width: 100% !important;
            height: auto !important;
          }
        `}</style>
        <div id={'pageContainer'}>
          <Header active={this.name} />
          <Container data-testid={'container'} className={'mt-5 px-5 mb-1'}>
            {this.props.children}
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}
