import PropTypes from 'prop-types';
import style from './Profile.module.css';

export const Profile = ({username,tag,location,avatar,stats}) =>{
  return (
  <div className={style.profile}>
<div className={style.description}>
  <img
    src={avatar}
    alt="User avatar"
    className={style.avatar}
  />
  <p className={style.descItem}>{username}</p>
  <p className={style.descItem}>@{tag}</p>
  <p className={style.descItem}>{location}</p>
</div>

<ul className={style.stats}>
  <li className={style.list}>
    <span className={style.label}>Followers</span>
    <span className={style.quantity}>1000</span>
  </li>
  <li className={style.list}>
    <span className={style.label}>Views</span>
    <span className={style.quantity}>2000</span>
  </li>
  <li className={style.list}>
    <span className={style.label}>Likes</span>
    <span className={style.quantity}>3000</span>
  </li>
</ul>
</div>)}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};