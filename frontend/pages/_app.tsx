import App from 'next/app';
import "../components/app.css"

class defaultApp extends App {
  render() {
    if (process.browser && process.env.NODE_ENV !== 'development') {
      console.log('%c%s', 'color: red; background: yellow; font-size: 24px;', 'WARNING!');
      console.log(
        '%c%s',
        'color: black; font-size: 18px;',
        'Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.\nDo not enter or paste code that you do not understand.',
      );
    }
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default defaultApp;
