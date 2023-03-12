import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

function Form() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const HandleformSubmit = (event) => {
        event.preventDefault();
        const dataSubmit = {name, dob, email, mobile};
        fetch('http://localhost:8000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataSubmit)
        }).then(navigate('/final'));
      }

      return(
        <div className="App">
      <header className="App-header">
        <h1> Hello, please fill the form to proceed!! </h1>
        <form action='' method='POST' className='formData' onSubmit={HandleformSubmit}>
          <input type="text" placeholder='Enter your name' name='name' value={name} onChange={(event) => setName(event.target.value)}></input>
          <input type="date" name="dob" value={dob} onChange={(event) => setDob(event.target.value)}></input>
          <input type="email" placeholder='Enter your Email' name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
          <input type="number" placeholder='Enter your Number' name="mobile" value={mobile} onChange={(event) => setMobile(event.target.value)}></input>
          <input type="submit"></input>
        </form>
        </header>
    </div>
    )
}

export default Form;