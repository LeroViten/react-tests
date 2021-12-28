import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { fetchPosts, showAlert } from '../../redux/actions';
import Alert from '../Alert/Alert';
import Post from '../Post/Post';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const FetchedPosts = ({ alert }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  const handleClick = () => {
    dispatch(fetchPosts());
  };

  return (
    <div>
      {!posts.length && (
        <button className="btn btn-primary" onClick={handleClick} disabled={loading || alert}>
          Load Posts
        </button>
      )}
      {alert && <Alert text={alert} />}
      {loading && (
        <Loader className="Loader" type="Puff" color="#b00b6960" height={200} width={200} />
      )}
      {posts && posts.map(post => <Post post={post} key={post.id} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  alert: state.app.alert,
});

const mapDispatchToProps = {
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);
