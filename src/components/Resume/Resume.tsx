import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'; 

const useStyles = makeStyles({
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    navigation: {
        display: 'flex',
        listStyle: 'none'
    }
})







export const Resume = () =>{
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Sami's Portfolio
          </Typography>
          <ul className={classes.navigation}>
              <li>
                <Link to="/contact" className={classes.nav_a}>Contact</Link>
              </li>
              <li>
                <Link to="/portfolio" className={classes.nav_a}>Portfolio</Link>
              </li>
              <li>
                <Link to="/resume" className={classes.nav_a}>Resume</Link>
              </li>
              
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
    )
}