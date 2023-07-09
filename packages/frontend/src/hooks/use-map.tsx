import { useState, useEffect, useRef } from 'react';
import { geoPosition } from 'store/selectors/geo';
import { useAppSelector } from './store';

export const useGoogleMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const position = useAppSelector(geoPosition);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { ...position }));
    }
  }, [ref, map, position]);

  return [ref];
};
