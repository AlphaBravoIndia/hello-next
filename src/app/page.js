import React from 'react';

function Home() {
  const timestamp = new Date().toLocaleString();
  return (
    <>
    <main>
      <h1>Hello Next!</h1>
    </main>
    <footer>{timestamp}</footer>
    </>
  );
}

export default Home;
