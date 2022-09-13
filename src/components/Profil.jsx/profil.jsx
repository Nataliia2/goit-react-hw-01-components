import PropTypes from 'prop-types';
import { Profile, Description, Avatar, Name, UserInfo, Stats, Item, Label, Quantity } from './profile.styled';

export const Profil = ({ username,tag, location, avatar, stats }) => {
return <Profile>
<Description>
  <Avatar
    src={avatar}
    alt="User avatar"
    className="Avatar"
  />
  <Name>{username}</Name>
  <UserInfo>@{tag}</UserInfo>
  <UserInfo>{location}</UserInfo>
</Description>

<Stats>
  <Item>
    <Label>Followers</Label>
    <Quantity>{stats.followers}</Quantity>
  </Item>
  <Item>
    <Label>Views</Label>
    <Quantity>{stats.views}</Quantity>
  </Item>
  <Item>
    <Label>Likes</Label>
    <Quantity>{stats.likes}</Quantity>
  </Item>
</Stats>
</Profile>
};

Profil.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };