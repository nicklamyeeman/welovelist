import './App.css';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addJob } from './app/slices/jobsSlice';

import FirebaseDatabase from './app/firebase.config';
import { ref, child, get } from "firebase/database";

import AppView from './components/View/App/AppView';
import AppHeader from './components/Header/App/AppHeader';

function App() {
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
    <div className="">
      <AppHeader/>
      <AppView/>
   </div>
  );
}

export default App;
