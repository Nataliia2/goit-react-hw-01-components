import user from './data/user';
import { Profil } from './Profil/profil';
import statistics from './data/statistics';
import { Statistics } from './Statistics/Statistics';
import friends from './data/friends';
import { FriendList } from './FriendList/FriendList';
import transactions from './data/transactions';
import { TransactionHistory } from './TransactionHistory.jsx/TransactionHistory';


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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </section>
    
  );
};
