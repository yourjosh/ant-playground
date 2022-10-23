import React, {FC, useState} from 'react';
import {Button} from 'antd';
import {DatePicker, message} from 'antd';

import './App.css';

const App: FC = () => {

  const [date, setDate] = useState(null);
  // value is implicity any - not strict
  // @ts-ignore
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="text">Text</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>

      <div style={{width: 400, margin: '100px auto'}}>
        <DatePicker onChange={handleChange}/>
        <div style={{marginTop: 16}}>
          {/* @ts-ignore Property 'format' does not exist on type 'never' */}
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
      </div>
    </div>
  )
};

export default App;
