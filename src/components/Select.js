import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Select() {
  const classes = useStyles();
  const row = [
    {
      id: "5e9defb7ee60264c95dc1e3",
      text: "dropbox/dropbox-sdk-js",
      url: "https://github.com/dropbox/dropbox-sdk-js"
    },
    {
      id: "5e9defb7ee60264c95dc1e37",
      text: "dropbox",
      url: "https://github.com/dropbox/dropbox"
    }
  ];

  function showItem(item) {
    console.log(item);
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {row.map((col, j) => (
          <>
            <ListItem button onClick={() => showItem(col)}>
              <ListItemText primary={col.text} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
}

export default Select;
