import {
  StatisticsContainer,
  Title,
  StatisticsList,
  Item,
} from './Statistics.styled';

const Statistics = () => {
  return (
    <StatisticsContainer>
      <Title>Statistics</Title>
      <StatisticsList>
        <Item>Good</Item>
        <Item>Neutral</Item>
        <Item>Bad</Item>
      </StatisticsList>
    </StatisticsContainer>
  );
};
export default Statistics;
