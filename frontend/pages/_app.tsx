import App from 'next/app';
import '../components/app.css';

class defaultApp extends App {
  render() {
    if (process.browser && process.env.NODE_ENV !== 'development') {
      setTimeout(
        console.log.bind(
          console,
          '%c%s',
          'font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;',
          'Stop!',
        ),
      );
      setTimeout(
        console.log.bind(
          console,
          '%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.\n%cDo not enter or paste code that you do not understand.',
          'font-family:helvetica; font-size:20px;',
          'font-family:helvetica; font-size:20px; font-weight:bold',
        ),
      );
    }
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default defaultApp;
