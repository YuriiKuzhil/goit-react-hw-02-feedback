import {
  StatisticsContainer,
  Title,
  StatisticsList,
} from './Statistics.styled';

const Statistics = () => {
  return (
    <StatisticsContainer>
      <Title>Statistics</Title>
      <StatisticsList>
        <li>Good</li>
        <li>Neutral</li>
        <li>Bad</li>
      </StatisticsList>
    </StatisticsContainer>
  );
};
export default Statistics;
