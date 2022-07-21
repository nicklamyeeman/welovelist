import './App.css';
import FirebaseDatabase from './app/firebase.config';
import { ref, child, get } from "firebase/database";

function App() {
  const dbRef = ref(FirebaseDatabase);
  get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


  return (
    <div className="App">
      <header>
      </header>
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>
    </div>
  );
}

export default App;
