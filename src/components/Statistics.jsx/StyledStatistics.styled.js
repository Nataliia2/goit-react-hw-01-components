import styled from '@emotion/styled';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

export const SectionStatistic = styled.section`
    text-align: center;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    border:2px solid #000000;
`;

export const Title = styled.h2`
    font-size: 35px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const StatList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 4);
    padding: 10px;
    background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
    font-weight: bold;
`;

export const Percentage = styled.span`
    padding-top: 5px;
`;