import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, LinearProgress } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';

const useStyles = makeStyles((theme) => ({
  cardTitleContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContent: theme.typography.body1,
  cardContentRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.5rem 0',
  },
}));

interface Props {
  harvester: HarvesterType;
  index: number;
  loading: boolean;
  handleCardClick: (event: React.MouseEvent<unknown>, id: string) => void;
  handleButtonClick: (id: string) => void;
}

const HarvesterCard = ({
  harvester,
  index,
  loading,
  handleCardClick,
  handleButtonClick,
}: Props) => {
  const classes = useStyles();
  return (
    <Card onClick={(event) => handleCardClick(event, harvester.id)}>
      <CardHeader
        title={
          <div className={classes.cardTitleContent}>
            <span id={`id-${index}`}>ID: {harvester.id}</span>
            <IconButton
              title="Show on map"
              onClick={() => handleButtonClick(harvester.id)}
              aria-label="show on map"
              color="secondary"
            >
              <MapIcon />
            </IconButton>
          </div>
        }
      />
      <CardContent className={classes.cardContent}>
        <span className={classes.cardContentRow} id={`name-${index}`}>
          Name: {harvester.name}
        </span>
        <span className={classes.cardContentRow} id={`location-${index}`}>
          Location: lng: {harvester.location.lng.toFixed(4)} lat:{' '}
          {harvester.location.lat.toFixed(4)}
        </span>
        <span className={classes.cardContentRow} id={`region-${index}`}>
          Region:{' '}
          {loading ? (
            <LinearProgress style={{ width: '30%', marginLeft: 5 }} />
          ) : (
            harvester.region
          )}
        </span>
        <span className={classes.cardContentRow} id={`oil-level-${index}`}>
          Oil level: {harvester.oilLevel} %
        </span>
      </CardContent>
    </Card>
  );
};

export default HarvesterCard;
