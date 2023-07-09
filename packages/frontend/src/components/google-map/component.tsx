import { useGoogleMap } from 'hooks';
import classes from './styles.module.css';

export const GoogleMap = () => {
  const [ref] = useGoogleMap();

  return (
    <div className={classes.map__wrapper}>
      <div ref={ref} id="map" className={classes.map}></div>
    </div>
  );
};
