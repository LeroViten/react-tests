import { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PostForm.scss';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { title, body } = this.state;

    if (!title.trim() && !body.trim()) {
      toast.error('All fields are required!');
      return;
    }

    const newPost = {
      title,
      body,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ title: '', body: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Type in post title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Post Body</label>
            <textarea
              type="textarea"
              name="body"
              className="form-control"
              id="body"
              placeholder="Type in post text"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Create
          </button>
        </form>
        <ToastContainer
          transition={Zoom}
          autoClose={4000}
          toastStyle={{ backgroundColor: '#c0c0c0' }}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
