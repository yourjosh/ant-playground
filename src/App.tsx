import React, { FC } from 'react';
import { Button } from 'antd';

import './App.css';

const App: FC = () => (
  <div className="App">
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="text">Text</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </div>
);

export default App;
