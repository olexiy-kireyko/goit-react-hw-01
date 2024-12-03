import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile__container}>
      <div className={css.profile__main}>
        <img className={css.profile__main_img} src={image} alt="User avatar" />
        <p className={css.profile__main_name}>{name}</p>
        <p className={css.profile__main_text}>{tag}</p>
        <p className={css.profile__main_text}>{location}</p>
      </div>

      <ul className={css.profile__info_list}>
        <li className={css.profile__info_item}>
          <span className={css.profile__info_header}>Followers</span>
          <span className={css.profile__info_text}>{stats.followers}</span>
        </li>

        <li className={css.profile__info_item}>
          <span className={css.profile__info_header}>Views</span>
          <span className={css.profile__info_text}>{stats.views}</span>
        </li>

        <li className={css.profile__info_item}>
          <span className={css.profile__info_header}>Likes</span>
          <span className={css.profile__info_text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
