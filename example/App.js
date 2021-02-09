import { useState } from 'react';
import useQuery from 'react-query-hook';

function App() {
  const [param, setParam] = useQuery('id');
  const [value, setValue] = useState(param);

  return (
    <div>
      <h1>ID: {param}</h1>
      <form>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter ID" />
        <input type="button" value="Go" onClick={() => setParam(value)}/>
      </form>
    </div>
  );
}

export default App;
