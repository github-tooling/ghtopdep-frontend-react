import React, {useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function Select({ onRepoSelect }) {
  const classes = useStyles();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchAllRepos().then(allRepos => setRepos(allRepos));
  }, []);


  function fetchAllRepos() {
     return fetch(`${process.env.REACT_APP_BASE_URL}/all`).then(response => response.json());
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {repos.map((repo, j) => (
          <div key={repo.id}>
            <ListItem button onClick={() => onRepoSelect(repo)}>
              <ListItemText primary={repo.text} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default Select;
