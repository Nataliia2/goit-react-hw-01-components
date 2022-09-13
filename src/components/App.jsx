import user from './data/user';
import { Profil } from './Profil.jsx/profil';
import statistics from './data/statistics';
import { Statistics } from './Statistics.jsx/Statistics'

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
      <Statistics title="Upload stats" stats={statistics} />
    </section>
    
  );
};
