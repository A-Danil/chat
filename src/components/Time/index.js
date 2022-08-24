// import { Button as BaseButton} from 'antd';
// import classNames from 'classnames';
import { formatDistanceToNow, parseISO } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import PropTypes from 'prop-types';


const Time = ({ date }) => (
  formatDistanceToNow(parseISO(date), {includeSeconds: true, addSuffix: true, locale: ruLocale})
);

Time.propTypes = {
  date: PropTypes.string
}



export default Time;