/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/followed.scss';
import Skeleton from 'react-loading-skeleton';
import { getFollowedProfiles } from '../../../services/firebase';
import FollowedProfile from './followed-profile';

export default function Followed({ userId, following, loggedInUserDocId, titleSideBar }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function followedProfiles() {
      const response = await getFollowedProfiles(userId, following);
      // const responseCurrentUser = await getFollowedProfiles(currUser, following);
      setProfiles(response);
    }

    // currUser.currentUser.following.map((userItem) => console.log(userItem));

    if (userId) {
      followedProfiles();
    }
  }, [userId]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base subscript">{titleSideBar}</p>
      </div>
      <div className="mt-4 grid gap-5 prokrutka">
        {profiles.map((profile) => (
          <>
            <FollowedProfile
              key={profile.docId}
              profileDocId={profile.docId}
              username={profile.username}
              profileId={profile.userId}
              userId={userId}
              loggedInUserDocId={loggedInUserDocId}
            />
          </>
        ))}
      </div>
    </div>
  ) : null;
}

Followed.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string,
  titleSideBar: PropTypes.string
};
