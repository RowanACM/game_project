import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageContainer from '../components/PageContainer';
import game from "../components/p5/sketch";
import dynamic from 'next/dynamic';

const P5DynamicLoader = dynamic(import('../components/p5/wrapper'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <PageContainer name={'Play'}>
          <P5DynamicLoader sketch={game}/>
        </PageContainer>
      </div>
    );
  }
}
