import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello, please fill the form to proceed!! </h1>
        <form action='' method='POST' className='formData'>
          <input type="text" placeholder='Enter your name'></input>
          <input type="date"></input>
          <input type="email" placeholder='Enter your Email'></input>
          <input type="number" placeholder='Enter your Number'></input>
        </form>
      </header>
    </div>
  );
}

export default App;
