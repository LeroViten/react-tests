import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Comments from './components/Comments';
import Loader from './components/Loader';
import './components/Comments/Comments.scss';

function App() {
  const [comments, setComments] = useState([]);
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/comments?_page=0&_limit=50',
  );

  useEffect(() => {
    setComments(data);
  }, [data]);

  return (
    <div className="App">
      {loading && <Loader/>}
      {error && <h2>{error}</h2>}
      <a className="hoverBtn" href="https://www.google.com" target="_blank" rel="noreferrer">
        <span>Get Started</span>
      </a>
      {comments && <Comments comments={comments} />}
    </div>
  );
}

export default App;
