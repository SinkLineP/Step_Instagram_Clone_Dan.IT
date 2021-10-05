/* eslint-disable no-nested-ternary */
<<<<<<< HEAD
import { useState, useRef } from 'react';
import { Button, Modal, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Actions from '../post/actions';
import Comments from '../post/comments';
// import Modal from 'react-modal';

=======
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
>>>>>>> f28434ebac3016eaf0c5fd16468ee2ba8a7f0234
import './styles/photos.scss';

const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 14,
  p: 4
};
export default function Photos({ photos }) {
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div> </div>
      <button type="button" onClick={handleOpen}>
        <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
          {!photos
            ? new Array(12).fill(0).map((_, i) => <Skeleton key={i} width={320} height={400} />)
            : photos.length > 0
            ? photos.map((photo) => (
                <>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
                        <Actions
                          docId={photo.docId}
                          totalLikes={photo.likes.length}
                          likedPhoto={photo.userLikedPhoto}
                          handleFocus={handleFocus}
                          src={photo.imageSrc}
                          caption={photo.caption}
                          likeSrc={photo.likeImg}
=======
  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos
          ? new Array(12).fill(0).map((_, i) => <Skeleton key={i} width={320} height={400} />)
          : photos.length > 0
          ? photos.map((photo) => (
              <button type="button">
                <div key={photo.docId} className="relative group">
                  <img src={photo.imageSrc} alt={photo.caption} />

                  <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden">
                    <p className="flex items-center text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
>>>>>>> f28434ebac3016eaf0c5fd16468ee2ba8a7f0234
                        />
                        <Comments
                          docId={photo.docId}
                          comments={photo.comments}
                          posted={photo.dateCreated}
                          commentInput={commentInput}
                        />
                      </div>
                    </Box>
                  </Modal>
                  <button type="button">
                    <div key={photo.docId} className="relative group">
                      <img src={photo.imageSrc} alt={photo.caption} />
                      <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden">
                        <p className="flex items-center text-white font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-8 mr-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {photo.likes.length}
                        </p>

                        <p className="flex items-center text-white font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-8 mr-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {photo.comments.length}
                        </p>
                      </div>
                    </div>
                  </button>
                </>
              ))
            : null}
        </div>
      </button>
      {!photos || (photos.length === 0 && <p className="text-center text-2xl">No Posts Yet</p>)}
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array
};
