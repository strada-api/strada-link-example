import React, { useCallback, useEffect, useState } from "react";
import { useStradaLink } from '@stradahq/strada-link-react';
import './App.css';

function App() {

  const [publicToken, setPublicToken] = useState<string | null>(null)
  const onSuccess = useCallback((public_token: string) => {
    setPublicToken(public_token)
  }, []);

  const { open, isReady } = useStradaLink({
    env: 'sandbox',
    linkAccessToken: "<INSERT YOUR LINK ACCESS TOKEN HERE>",
    onSuccess
  });


  if (publicToken) {
    return (<h1>
      {publicToken}
    </h1>)

  } else {
    return (
      <button disabled={!isReady} onClick={open}>
        Connect Account
      </button>
    );
  }
}

export default App;
