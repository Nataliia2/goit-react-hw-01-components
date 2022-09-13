import PropTypes from 'prop-types';
import { StatisticTitle } from './StatisticsTitle';
import {SectionStatistic, StatList, Item, Label, Percentage} from './StyledStatistics.styled'


export const Statistics = ({title, stats}) => {
    return <SectionStatistic>
    <StatisticTitle title={title} />
  
    <StatList>
    {stats.map(({ id, label, percentage }) => (
      <Item key={id}>
        <Label>{label}</Label>
        <Percentage>{percentage}</Percentage>
      </Item>
    ))}
    </StatList>
  </SectionStatistic>
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };


