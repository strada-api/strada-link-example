import React, { useCallback, useEffect, useState } from "react";
import { useStradaLink } from '@stradahq/strada-link-react';
import './App.css';

function App() {

  const [publicToken, setPublicToken] = useState<string | null>(null)
  const onSuccess = useCallback((public_token: string) => {
    setPublicToken(public_token)
  }, []);

  const [input, setInput] = useState<string>('Enter Link Access Token')

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const { open, isReady } = useStradaLink({
    env: 'sandbox',
    linkAccessToken: input,
    onSuccess
  });


  if (publicToken) {
    return (<h1>
      {publicToken}
    </h1>)

  } else {
    return (
      <div>
        <textarea id="jwt" value={input} onChange={handleChange}></textarea>
        <button disabled={!isReady} onClick={open}>
          Connect Account
        </button>
      </div>
    );
  }
}

export default App;
