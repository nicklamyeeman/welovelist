import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJob } from './app/slices/jobsSlice';

import FirebaseDatabase from './app/firebase.config';
import { ref, child, get } from "firebase/database";

function App() {
  const { jobs } = useSelector(state => state.jobs);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const dbRef = ref(FirebaseDatabase);
    get(child(dbRef, '/jobs')).then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const job = childSnapshot.val();
        dispatch(addJob(job));
      });
    }).catch(error => {
      console.log(error);
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , []);

  return (
    <div className="App">
      <header>
      </header>
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>
      {jobs && jobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
        </div>
      ))}
   </div>
  );
}

export default App;
