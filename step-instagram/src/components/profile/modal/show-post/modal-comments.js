import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import ModalAddComments from './modal-add-comments';
import './styles/modal-comments.scss';

export default function ModalComments({ docId, comments: allComments, posted, commentInput }) {
  const [comments, setComments] = useState(allComments);
  const [commentsSlice, setCommentsSlice] = useState(1);

  const showNextComments = () => {
    setCommentsSlice(commentsSlice + 10);
  };

  return (
    <>
      <div className="p-4 pt-1 pb-4 pos-all-comments">
        <div className="scroll-comments">
          {comments.slice(0, commentsSlice).map((item) => (
            <p key={`${item.comment}-${item.displayName}`} className="mb-1">
              <Link to={`/p/${item.displayName}`}>
                <span className="mr-1 font-bold">{item.displayName}</span>
              </Link>
              <span>{item.comment}</span>
            </p>
          ))}
          {comments.length >= 1 && commentsSlice < comments.length && (
            <button
              className="text-sm text-gray-base mb-1 cursor-pointer focus:outline-none"
              type="button"
              onClick={showNextComments}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  showNextComments();
                }
              }}
            >
              View more comments
            </button>
          )}
        </div>
        <p className="text-gray-base uppercase text-xs mt-2">
          {formatDistance(posted, new Date())} ago
        </p>
      </div>
      <ModalAddComments
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </>
  );
}

ModalComments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired
};
