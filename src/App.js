import React from 'react';
import ReposTable from "./components/table/ReposTable";
import Select from "./components/Select";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

  return (
    <div className={classes.root}>
      <div className={classes.select}>
        <Select />
      </div>
      <ReposTable/>
    </div>
  );
}

export default App;
