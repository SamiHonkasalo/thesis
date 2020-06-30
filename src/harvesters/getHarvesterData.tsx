import { useContext, useEffect } from 'react';

import { HarvesterContext } from '../store/harvester/harvesterContext';
import HARVESTER_DATA from './harvesterData';

function useHarvesters() {
  const harvContext = useContext(HarvesterContext);
  const { harvesters, setHarvesters } = harvContext;

  useEffect(() => {
    setHarvesters(HARVESTER_DATA);
  }, [setHarvesters]);

  useEffect(() => {
    const randomCoord = () => {
      const min = 0.002;
      const max = 0.005;
      const rand = parseFloat((Math.random() * (max - min) + min).toFixed(4));
      const fct = Math.round(Math.random()) ? 1 : -1;
      return rand * fct;
    };

    const interval = setInterval(() => {
      const newHarvesters = harvesters.map((h) => {
        const curLocation = h.location;
        const curRoute = [...h.route];
        if (curRoute.length >= 20) {
          curRoute.length = 19;
        }
        curRoute.push(curLocation);
        return {
          ...h,
          location: {
            lat: h.location.lat + randomCoord(),
            lng: h.location.lng + randomCoord(),
          },
          route: [...curRoute],
        };
      });
      setHarvesters(newHarvesters);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [harvesters, setHarvesters]);
}

export default useHarvesters;
