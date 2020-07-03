import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';

const useStyles = makeStyles(() => ({
  tableRow: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

interface Props {
  harvesters: HarvesterType[];
  handleRowClick: (event: React.MouseEvent<unknown>, id: string) => void;
  handleButtonClick: (id: string) => void;
}

const HarvesterTable = ({
  harvesters,
  handleRowClick,
  handleButtonClick,
}: Props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="harvester table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Oil Level</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {harvesters.map((h) => (
            <TableRow
              key={h.id}
              hover
              onClick={(event) => handleRowClick(event, h.id)}
              className={classes.tableRow}
            >
              <TableCell component="th" scope="row">
                {h.id}
              </TableCell>
              <TableCell>{h.name}</TableCell>
              <TableCell>
                lat: {h.location.lat.toFixed(4)} lng:{' '}
                {h.location.lng.toFixed(4)}
              </TableCell>
              <TableCell>Unknown region</TableCell>
              <TableCell>{h.oilLevel} %</TableCell>
              <TableCell>
                <IconButton
                  title="Show on map"
                  aria-label="show on map"
                  onClick={() => handleButtonClick(h.id)}
                  color="secondary"
                >
                  <MapIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HarvesterTable;
