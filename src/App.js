import React, { useState } from 'react';
import {createUseStyles} from 'react-jss'

import './App.css';

const useStyles = createUseStyles({
  myInput: {
    color: ({color}) => color,
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
    }
  }
})

const Input = ({value, onChange, theme}) => {
  const classes = useStyles(theme)
  return (
    <input value={value} onChange={onChange} className={classes.myInput} /> 
  )
}

function App() {
  const [value, setValue] = useState('')
  const [color, setColor] = useState('blue')

  const handleColor = (event) => {
    event.preventDefault()
    setColor('pink')
  }
  return (
    <div className="App">
      <div>
        <button onClick={handleColor}>Change color</button>
      </div>
      <div>
        <Input theme={{color}} value={value} onChange={e => setValue(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
