import './App.css'
import Header from './components/Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './store/slices/userSlice';
import Email from './components/Email';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error))

  }, []);

  return (
    <>
      <div>
        <Header />
        <Email />
      </div>
    </>
  )
}

export default App
