import user from './data/user';
import { Profil } from "./Profil.jsx/profil";

export const App = () => {
  return (
    <section>
      <Profil
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </section>
  );
};
