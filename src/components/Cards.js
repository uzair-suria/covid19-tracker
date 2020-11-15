import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { red, indigo, green, orange, grey } from '@material-ui/core/colors';

import classNames from 'classnames';

const baseCard = makeStyles({
	root: {
		backgroundColor: 'rgba(255,255,255,0.8)',
		minWidth: 275,
		maxWidth: 350,
		margin: '10px 5px',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// flexDirection: 'column',
	},
});

const deathCard = makeStyles({
	root: {
		borderBottom: `5px solid ${red[500]}`,
	},
});

const infectedCard = makeStyles({
	root: {
		borderBottom: `5px solid ${indigo[500]}`,
	},
});

const recoveredCard = makeStyles({
	root: {
		borderBottom: `5px solid ${green[500]}`,
	},
});

const activeCard = makeStyles({
	root: {
		borderBottom: `5px solid ${orange[200]}`,
	},
});

const useStyles = makeStyles({
	title: {
		color: grey[700],
	},
});

const Cards = () => {
	const baseClass = baseCard();
	const deathClass = deathCard();
	const infectedClass = infectedCard();
	const recoveredClass = recoveredCard();
	const activeClass = activeCard();
	const classes = useStyles();

	return (
		<Paper>
			<Typography variant="h4" className={classes.title}>
				Global Cases
			</Typography>
			<div className={baseClass.container}>
				<Card className={classNames(baseClass.root, infectedClass.root)}>
					<CardContent>
						<Typography variant="p">Infected</Typography>
						<Typography variant="h6">53M</Typography>
					</CardContent>
				</Card>
				<Card className={classNames(baseClass.root, recoveredClass.root)}>
					<CardContent>Recovered</CardContent>
				</Card>
				<Card className={classNames(baseClass.root, activeClass.root)}>
					<CardContent>Active</CardContent>
				</Card>
				<Card className={classNames(baseClass.root, deathClass.root)}>
					<CardContent>Deaths</CardContent>
				</Card>
			</div>
		</Paper>
	);
};

export default Cards;
