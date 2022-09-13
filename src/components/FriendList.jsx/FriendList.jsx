import PropTypes from 'prop-types';
import {Section, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends}) => {
    return <Section>
         {friends.map(({avatar, name, isOnline, id}) =>(
      <Item key={id}>
        <Status status={isOnline} />
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </Item>))}
      </Section>
    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          })
    ),
};