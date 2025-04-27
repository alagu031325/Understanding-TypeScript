import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import CourseGoals from './components/CourseGoals';
import { useState } from 'react';
import NewGoal from './components/NewGoal';

function App() {
  const [goals, setGoals] = useState([{id: 1, title: 'Learn TypeScript', description: 'Learn TS from the ground up'}, {id: 2, title: 'Learn React + Typescript', description: 'Practice working with React + TS'}]);

  function handleDelete(id: number) {
    setGoals((prevGoals) => prevGoals.filter(
      goal => goal.id != id
    ))
  }

  //concat returns a new array 
  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) => prevGoals.concat({id: Math.random(), title: text, description: summary}));
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: 'Image showing list of goals'}}>
        <h2>Your Course Goals</h2>
      </Header>
      <NewGoal onAdd={handleAddGoal}/>
      <CourseGoals goals={goals} onDelete={handleDelete}/>
    </main>
  )
}

export default App
