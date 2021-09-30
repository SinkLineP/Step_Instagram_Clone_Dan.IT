import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestions/suggestions';
import Followed from './followed/followed';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  const {
    user: {
      docId = '',
      fullName,
      username,
      userId,
      following,
      title = ['Suggestions for you', 'Your subscriptions']
    } = {}
  } = useContext(LoggedInUserContext);

  console.log(useContext(LoggedInUserContext));

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
        titleSideBar={title[0]}
      />
      <Followed
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
        titleSideBar={title[1]}
        // currUser={currentUser}
      />
    </div>
  );
}
