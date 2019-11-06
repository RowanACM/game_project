import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <style jsx>{`
          text-align: center;
          background-color: #78d7ee;
          color: #cdf5ff;
          margin-top: auto;
        `}</style>
        <footer className={'mt-auto py-3'}>
          <div>
            <span>Rowan Association for Computing Machinery</span>
          </div>
        </footer>
      </div>
    );
  }
}
