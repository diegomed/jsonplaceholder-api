import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/post/Post';

function App() {
  const [posts, setPosts] = useState([]);

  function handleFetch() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log('axios es mucho mejor');
      })
  }

  function handleDelete(id) {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert(err);
      })
  }

  function handleAdd(event) {
    console.log(event.target);
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }

  return (
    <div className="App">
      <div className='form'>
        <label>Titulo</label>
        <input/>
        <label>Contenido</label>
        <textarea/>
        <button onClick={handleAdd}>Agregar</button>
      </div>
      <div className='posts'>
        <button onClick={handleFetch}>Fetch</button>
        {posts.map(p => <Post post={p} key={p.id} onDelete={handleDelete} />)}
      </div>
    </div>
  );
}

export default App;
