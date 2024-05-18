import './App.css';
import ParentForm from './component/Parent/ParentForm';
import ParentList from './component/Parent/ParentList'
import TeacherForm from './component/Teacher/TeacherForm'
import TeacherList from './component/Teacher/TeacherList'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/parentform' element={<ParentForm />}/>
          <Route path='/parent' element={<ParentList />}/>
          <Route path='/teacherform' element={<TeacherForm />} />
          <Route path='/teacher' element={<TeacherList />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
