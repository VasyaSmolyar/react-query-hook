# react-query-hook
A custom React hook for read/write variables of query string.
## Install
```bash
$ npm i react-query-hook
```
## Usage
```js
...

import useQuery from 'react-query-hook';

...

const Component = (#params) => {
    const [param, setParam] = useQuery(#parameter name);
    
    ...

    return (...)
}
```
## How it works
<ul>
  <li>With query <b>id=1&title=Hello</b> param returned from <b>useQuery('id')</b> will be equal to <b>'1'</b></li>
  <li>On call <b>setParam(5)</b> user will be redirected on <b>id=5&title=Hello</b></li>
</ul> 
