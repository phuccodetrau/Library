import React from "react";
import {useNavigate} from 'react-router-dom'

function App() {
  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate('/list');
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's your name?"
        />
        <input
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
