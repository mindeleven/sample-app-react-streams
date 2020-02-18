import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '87094440826-u3a3or1t2966fmem4cvdn1o15u4u0g3n.apps.googleusercontent.com',
        scope: 'enail'
      })
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
