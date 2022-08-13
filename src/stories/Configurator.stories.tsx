import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {Planet} from '../components';
import {withTheme} from './index.stories';
import {generateSatellites} from './storybook_utils.tsx/generateSatellites';
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {SatelliteOrientation} from "./WeirdSatellites.stories";

enum BounceDirection {
    unset = 'undefined',
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

storiesOf('Planet', module).add('-> configure', () => {
    const classes = useStyles();

    const open = true;
    const autoClose = true;
    const orbitRadius = 120
    const satelliteCount = 3
    const weirdSatellites = false
    const satelliteOrientation = SatelliteOrientation.DEFAULT;
    const dragableSatellites = false
    const dragRadiusSatellites = 12
    const dragablePlanet = false
    const dragRadiusPlanet = 12
    const hideOrbit = false
    const bounce = false
    const bounceOnOpen = false
    const bounceOnClose = false
    const bounceRadius = 3
    const bounceDirection = BounceDirection.TOP

    const rotation = 0;
    const mass = 1;
    const tension = 500;
    const friction = 17;

    return withTheme(
        <div className={classes.root}>
            <Planet
                orbitRadius={orbitRadius}
                centerContent={<div className={classes.planet}/>}
                open={open}
                autoClose={autoClose}
                dragableSatellites={dragableSatellites}
                dragRadiusSatellites={dragRadiusSatellites}
                dragablePlanet={dragablePlanet}
                dragRadiusPlanet={dragRadiusPlanet}
                hideOrbit={hideOrbit}
                rotation={rotation}
                mass={mass}
                tension={tension}
                friction={friction}
                bounce={bounce}
                bounceOnOpen={bounceOnOpen}
                bounceOnClose={bounceOnClose}
                bounceRadius={bounceRadius}
                bounceDirection={bounceDirection}
                satelliteOrientation={satelliteOrientation}
            >
                {generateSatellites(satelliteCount, weirdSatellites, !!satelliteOrientation)}
            </Planet>
        </div>
    );
});

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 600,
    },

    planet: {
        height: 100,
        width: 100,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            borderWidth: 10,
            boxShadow: '0px 0px 15px 10px ' + theme.palette.secondary.light,
            cursor: 'pointer',
        },
    },
}));
