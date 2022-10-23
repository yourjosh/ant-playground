import React, {FC, useState} from 'react';
import {Button} from 'antd';
import DatePicker from './components/DatePicker/DatePicker'

import './App.css';

const App: FC = () => {

  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="text">Text</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>

      <DatePicker
        styles={
          {width: 600, margin: '120px auto'}
        }
      />

    </div>
  )
};

export default App;
