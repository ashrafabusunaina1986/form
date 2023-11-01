import { useEffect } from 'react'
import './App.css';

function App() {
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const res = await fetch(process.env.REACT_APP_URL)
    if (!res.ok) console.log('Error')
    console.log(await res.json())
  }
  const postH = async (e) => {
    
    e.preventDefault()
    const fd=new FormData(e.target)
    const data={
      name:fd.get('name'),
      age:fd.get('age')
    }
    const res = await fetch(`${process.env.REACT_APP_URL}/post`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!res.ok) return console.log({ message: 'error' })
    console.log(await res.json())
  }
  return (
    <div className="App">
      <form id='form' onSubmit={postH}>
        <p>
          <input type="text" name='name' placeholder='name' />
        </p>
        <p>
          <input type="number" name='age' placeholder='age'/>
        </p>

        <button >save</button>
      </form>
    </div>
  );
}

export default App;
