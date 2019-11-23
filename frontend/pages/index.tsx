import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageContainer from '../components/PageContainer';
import dynamic from 'next/dynamic';

const PhaserGameWrapper = dynamic(import('../components/PhaserGame'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <PageContainer name={'Play'}>
          <PhaserGameWrapper />
        </PageContainer>
      </div>
    );
  }
}
