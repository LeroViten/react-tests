import Comments from './components/Comments';
import './components/Comments/Comments.scss';

export default function App() {
  return (
    <div className="App">
      <a className="hoverBtn" href="https://www.google.com" target="_blank" rel="noreferrer">
        <span>Get Started</span>
      </a>
      <Comments />
    </div>
  );
}
