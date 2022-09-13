import styled from '@emotion/styled';

export const Profile = styled.div`
  width: 300px ;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  text-align: center;
  background-color: #ccf0f0;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserInfo = styled.p`
  color: #636363;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  border-right: 1px solid #f6f6f6;
`;

export const Label = styled.span`
 color: #636363;
 margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;