import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import 'firebase/auth';
import 'firebase/firestore';
import firebase from "firebase";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [Input, setInput] = useState('');

  // <firebase database code
  // when the app loads, we need to listen database and fetch todos added/removed
  useEffect(() => {
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo: doc.data().todo})))
    });
  }, []);
  // </firebase database code end

  const addTodo = (event) => {
    // this will fire when clicked the button
    // console.log('👦','I am working now' )
    event.preventDefault(); // will stop refresh

    db.collection('todos').add({
      todo: Input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(""); //clear up the Input after clicking add button
    console.log(todos);
  };

  // for seconds counter


  // const seconds = new Date().toLocaleString();  'full date format available'

  return (
    <>
      <div className="App">
        <h1>Todo-list</h1>

        <div className="instaput">
          <input
            type="text"
            placeholder="Add your work"
            onChange={(event) => setInput(event.target.value)} //for set input using react hook
            value={Input}
          />
          <button disabled={!Input} type={"submit"} onClick={addTodo}>
            Add
          </button>
        </div>
        <div className="tododev">
          <ul>
            {todos.map((todo) => (
              <li disabled={!todo}>
                {" "}
                <p className="icon">💇</p>
                 {todo.todo}
                <p className="delete" onClick={event =>db.collection(todos).doc(todo.id).delete()}>❌ </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
