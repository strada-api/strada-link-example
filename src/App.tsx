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
    linkAccessToken: document.getElementById("jwt")?.innerText,
    onSuccess
  });


  if (publicToken) {
    return (<h1>
      {publicToken}
    </h1>)

  } else {
    return (
      <div>
        <textarea id="jwt">

        </textarea>
        <button disabled={!isReady} onClick={open}>
          Connect Account
        </button>
      </div>
    );
  }
}

export default App;
