import React, { useState } from 'react';
import './App.css'
import MySelect from './components/MySelect/MySelect';
const App = () => {

  const [currentCity, setCurrentCity] = useState('')

  return (
    <div className='app'>
      <MySelect
        onChange={setCurrentCity}
        placeholder='Выберите город'
        options={[
          { label: 'Москва', value: 'Москва' },
          { label: 'Сочи', value: 'Сочи' },
          { label: 'Питер', value: 'Питер' },
          { label: 'Челябинск', value: 'Челябинск' },
        ]}
      />
    </div>
  );
};

export default App;