import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed !important',
        bottom: '0',
        width: '100%',
        height: '60px' /* Height of the footer */,
        background: '#3f51b5;',
    },
    navi: {
        color: 'white',
    },
});

export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
        >
            <Link to="/">
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon />}
                    className={classes.navi}
                />
            </Link>

            <Link to="/favorites">
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                    className={classes.navi}
                />
            </Link>
            <Link to="/search">
                <BottomNavigationAction
                    label="Map"
                    value="map"
                    icon={<SearchIcon />}
                    className={classes.navi}
                />
            </Link>
            <Link to="/chart">
                <BottomNavigationAction
                    label="Stats"
                    value="stats"
                    icon={<EqualizerIcon />}
                    className={classes.navi}
                />
            </Link>
        </BottomNavigation>
    );
}
