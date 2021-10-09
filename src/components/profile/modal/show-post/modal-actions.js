import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../../../context/firebase';
import UserContext from '../../../../context/user';
import TouchLike from '../touch-like/touch-like.js';
import './styles/modal-actions.scss';

export default function ModalActions({
  docId,
  totalLikes,
  likedPhoto,
  handleFocus,
  src,
  caption,
  likeSrc
}) {
  const {
    user: { uid: userId }
  } = useContext(UserContext);
  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  const { firebase, FieldValue } = useContext(FirebaseContext);

  const handleToggleLiked = async () => {
    setToggleLiked((toggleLiked) => !toggleLiked);

    await firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        likes: toggleLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
      });

    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  };

  return (
    <>
      <button
        type="button"
        onDoubleClick={handleToggleLiked}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleToggleLiked();
          }
        }}
      >
        <img
          src={likeSrc}
          alt={caption}
          className={`like-png-modal ${toggleLiked ? 'animate-like' : null}`}
        />
        <img src={src} alt={caption} />
      </button>
      <TouchLike
        handleToggleLiked={handleToggleLiked}
        toggleLiked={toggleLiked}
        handleFocus={handleFocus}
        itemLike={likes}
      />
    </>
  );
}

ModalActions.propTypes = {
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likeSrc: PropTypes.string.isRequired
};
