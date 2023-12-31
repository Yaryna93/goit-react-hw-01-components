import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"
// import { FriendsList} from "./"
// import { TransactionHistory} from "./"


import data from '../data/data.json';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>

<Statistics title="Upload stats" stats={data} />
{/* <FriendsList friends={friends} />
<TransactionHistory items={transactions} /> */}
      React homework template
    </>
  );
};
