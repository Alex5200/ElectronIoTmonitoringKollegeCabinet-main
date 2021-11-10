import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Fab from '@mui/material/Fab';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import WindowIcon from '@mui/icons-material/Window';
import { spacing } from '@mui/system';


export default function FixedBottomNavigation() {
  const [kabinet, setKabinets] = React.useState(0);
  const [showList, setShowList] = React.useState(true);
  const [showIcon, setShowIcon] = React.useState(false);
  const setKabinetinList = () => {
    messageExamples[0] = { primary: 'Кабинет', secondary: kabinet };
  };
  function ButtonSub() {
    return (
      <Button
        sx={{  mx: "auto", width: 200 }}
        variant="contained"
        onClick={(setKabinetinList(), onClickFalse)}
      >
        Выбрать
      </Button>
    );
  }
  function setKabinet() {
    return (
      <TextField
        id="filled-basic"
        label="Введите кабинет"
        variant="filled"
        sx={{ mx: "auto", width: 200 }}
        onChange={(e) => setKabinets(e.target.value)}
      />
    );
  }
  const onClickTrue = () => {
    setShowList(true);
    setShowIcon(false);
  };
  const onClickFalse = () => {
    if (kabinet != 0) {
      setShowList(false);
      setShowIcon(true);
    } else {
      setShowList(true);
      setShowIcon(false);
    }
  };

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      {showList ? (
        <Box sx={{display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
          <Box sx={{ padding: 0, mx: 'auto', pt: '20%'}}>
            {setKabinet()}
          
          </Box>
          <Box sx={{ padding: 5, mx: 'auto'}}>
              {ButtonSub()}
          </Box>
        </Box>
      ) : null}
      <List>
        {showIcon
          ? messageExamples.map(({ primary, secondary, person }, index) => (
              <ListItem   button key={index + person}>
                <ListItemAvatar >{person}</ListItemAvatar>
                <ListItemText itemSize={46} sx={{fontSize: 21}} primary={primary} secondary={secondary} />
              </ListItem>
            ))
          : null}
      </List>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={2}
      >
        <BottomNavigation
          showLabels
          onChange={(event, newValue) => {
            if (newValue == 0) {
            }
          }}
        >
          <BottomNavigationAction
            variant="contained"
            label="Выбор Кабинета"
            onClick={onClickTrue}
            icon={showList ? <HomeIcon color="primary" /> : <HomeIcon />}
          />

          <BottomNavigationAction
            variant="contained"
            label="Кабинет"
            onClick={onClickFalse}
            icon={
              showIcon ? (
                <MeetingRoomIcon color="primary" />
              ) : (
                <MeetingRoomIcon />
              )
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  { primary: 'Кабинет' },
  {
    primary: 'Door',
    secondary: 'on',
    person: <MeetingRoomIcon color="info" />,
  },
  {
    primary: 'Window 1',
    secondary: 'on',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Window 2',
    secondary: 'on',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Window 3',
    secondary: 'off',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Window 4',
    secondary: 'off',
    person: <WindowIcon color="info" />,
  },
];
