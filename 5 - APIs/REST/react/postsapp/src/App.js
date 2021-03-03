import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Edit from './EditComponent'
import { Link } from 'react-router-dom'
function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    // const article = { title: 'React POST Request Example' };
    axios.get('http://localhost:5000/posts')
      .then(response => {
        setState(prev => {
          return response.data
        })
        // console.log(response.data)
      });

  }, [state])
  const savePost = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const desc = e.target.elements.desc.value;
    try {
      axios.post('http://localhost:5000/posts', { title: title, description: desc })
    }
    catch (err) {
      console.log(err)
    }
    finally {
      e.target.elements.title.value = ''
      e.target.elements.desc.value = ''
    }

  }
  const deletePost = (id) => {
    axios.delete('http://localhost:5000/posts/' + id)
  }
  return (
    <div className="App">
      <Router>
        <Route path="/edit/:id" component={Edit} exact />

        <ol>

          {state.map((post) => {
            return (

              <div>
                <li>
                  <Link to={"/edit/" + post._id}>
                    {post.title}
                  </Link>
                  - {post.description}
                  <button onClick={(e) => {
                    deletePost(post._id)
                  }}>Remove
                  </button>
                </li>

              </div>


            )
          })}

        </ol>
      </Router>


      <form onSubmit={savePost}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="desc" placeholder="Description" />
        <button>Add Post</button>
      </form>
    </div>
  );
}

export default App;
