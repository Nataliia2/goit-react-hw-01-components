import user from './data/user.json';
import { Profil } from './Profil.jsx/profil';
import statistics from './data/Statistics.json';
import { Statistics } from './Statistics.jsx/Statistics';
import friends from './data/friends.json';
import { FriendList } from './FriendList.jsx/FriendList';
import transactions from './data/transactions.json';
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
