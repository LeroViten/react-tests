import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Comments from './components/Comments';

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
      {loading && <h2>LOADING...</h2>}
      {error && <h2>{error}</h2>}
      {comments && <Comments comments={comments} />}
    </div>
  );
}

export default App;
