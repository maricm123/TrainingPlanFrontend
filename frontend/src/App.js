import "./App.css";
import React, {useEffect, useState} from 'react'
import TrainingPlan from './components/TrainingPlan'
import TrainingPlanLoadingComponent from './components/TrainingPlanLoading'


function App() {
  const TrainingPlanLoading = TrainingPlanLoadingComponent(TrainingPlan);
  const [appState, setAppState] = useState({
    loading: false,
    trainingPlans: null
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/plan/`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((trainingPlans) => {
        setAppState({loading: false, trainingPlans:trainingPlans})
      })
  }, [setAppState]);
  return (
    <div className = "App">
      <h1>Training Plans</h1>
      <TrainingPlanLoading isLoading={appState.loading} trainingPlans = {appState.trainingPlans} />
    </div>
  )
} 

export default App;