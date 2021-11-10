import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import WindowIcon from '@mui/icons-material/Window';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import LightIcon from '@mui/icons-material/Light';

export default function FixedBottomNavigation() {
  const [kabinet, setKabinets] = React.useState(0);
  const [showList, setShowList] = React.useState(true);
  const [showIcon, setShowIcon] = React.useState(false);
  function ButtonSub() {
    return (
      <Button
        sx={{ mx: 'auto', width: 200 }}
        variant="contained"
        onClick={onClickFalse}
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
        sx={{ mx: 'auto', width: 200 }}
        onChange={(e) => setKabinets(e.target.value)}
      />
    );
  }
  function renderList() {
    return messageExamples.map(
      ({ primary, secondary, person, swither }, index) => (
        <ListItem key={index + person} sx={{}}>
          <ListItemAvatar>{person}</ListItemAvatar>
          {swither ? (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              {' '}
              <Box sx={{ order: 1 }}>
                <ListItemText
                  sx={{}}
                  itemSize={46}
                  primary={primary}
                  secondary={secondary}
                />{' '}
              </Box>
              <Box sx={{ order: 3, pl: '5em', m: 'auto' }}>
                <Button
                  sx={{
                    m: 'auto',
                    p: 'auto',
                    border: 1,
                    borderColor: 'primary.main',
                  }}
                >
                  Switch status
                </Button>
              </Box>
            </Box>
          ) : (
            <ListItemText
              itemSize={46}
              sx={{ fontSize: 21 }}
              primary={primary}
              secondary={secondary}
            />
          )}
        </ListItem>
      )
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ padding: 0, mx: 'auto', pt: '20%' }}>{setKabinet()}</Box>
          <Box sx={{ padding: 5, mx: 'auto' }}>{ButtonSub()}</Box>
        </Box>
      ) : null}
      <List>
        {showIcon ? (
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: '2em',
                pb: '2em',
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Кабинет {kabinet}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Это маниторинг кабинета с возможностью переключения
                      сосояний
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>

            <Box>{renderList()}</Box>
          </Box>
        ) : null}
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
  {
    primary: 'Дверь',
    secondary: 'Закрыта',
    person: <MeetingRoomIcon color="info" />,
  },
  {
    primary: 'Окно 1',
    secondary: 'Открыто',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Окно 2',
    secondary: 'Открыто',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Окно 3',
    secondary: 'Закрыто',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Окно 4',
    secondary: 'Закрыто',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Свет',
    secondary: 'выключен',
    swither: true,
    person: <LightIcon color="info" />,
  },
  {
    primary: 'Свет 2',
    secondary: 'включен',
    swither: true,
    person: <LightIcon color="info" />,
  },
];
