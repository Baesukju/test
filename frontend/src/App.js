import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
  setImageUrl('/api/animal'); // nginx에서 /api -> backend로 프록시됨
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {imageUrl ? (
          <img src={imageUrl} alt="animal" style={{ width: '300px' }} />
        ) : (
          <p>Loading image........</p>
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
