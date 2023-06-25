import type { IToast } from 'common/interfaces';
import { useAppSelector } from 'hooks';
import { toastStack } from 'store/selectors/toast';
import classes from './styles.module.css';

const Toast = ({ id, level, description }: IToast) => (
  <div className={classes.toast} id={'toast' + id} data-variant={level}>
    <span className={classes.level}>
      {level.charAt(0).toUpperCase() + level.substring(1)}
    </span>
    <span className={classes.toast__description}>{description}</span>
  </div>
);

export const ToastStack = () => {
  const toastList = useAppSelector(toastStack);

  return (
    <div className={classes.toast__tack}>
      {toastList.map(({ id, level, description }) => (
        <Toast key={id} id={id} description={description} level={level} />
      ))}
    </div>
  );
};
