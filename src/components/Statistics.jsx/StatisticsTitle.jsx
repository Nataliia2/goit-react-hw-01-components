import PropTypes from 'prop-types';
import { Title } from './StyledStatistics.styled';


export const StatisticTitle = ({ title }) => {
    return <>{title && <Title>{title}</Title>}</>;
  };

  StatisticTitle.propTypes = {
    title: PropTypes.string
};