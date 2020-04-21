import React, {useState} from 'react';

import {makeStyles} from "@material-ui/core/styles";

import Select from "./components/Select";
import ReposTable from "./components/table/ReposTable";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    margin: '30px'
  },
  select: {
    marginRight: '30px'
  },
}));

function App() {
  const classes = useStyles();
  const [result, setResult] = useState([]);

  function onRepoSelect(item) {
    fetchResultByRepo(item.url).then(res => setResult(res.deps));
  }

  function fetchResultByRepo(url) {
     return fetch(`${process.env.REACT_APP_BASE_URL}/repos?url=${url}`).then(response => response.json());
  }

  return (
    <div className={classes.root}>
      <div className={classes.select}>
        <Select onRepoSelect={onRepoSelect}/>
      </div>
      <ReposTable rowData={result}/>
    </div>
  );
}

export default App;
