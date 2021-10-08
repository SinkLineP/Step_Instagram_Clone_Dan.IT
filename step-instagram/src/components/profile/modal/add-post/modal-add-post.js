/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Modal, Box } from '@material-ui/core';
import { Button, Input, Stack } from '@mui/material';
import { useState, useContext } from 'react';
import FirebaseContext from '../../../../context/firebase';
import UserContext from '../../../../context/user';
import './styles/modal-add-post.scss';

export default function ModalAddPost({ modalOpen, closeModal, profileUserId, profileUsername }) {
  const [postImage, setPostImage] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName }
  } = useContext(UserContext);
  const submitPost = (event) => {
    event.preventDefault();

    console.log([postImage]);
    console.log([postDescription]);

    return firebase
      .firestore()
      .collection('photos')
      .add({
        userId: `${profileUserId}`,
        imageSrc: `${postImage}`,
        caption: `Sorry, heroku deleted image`,
        likes: [],
        comments: [
          {
            displayName: `${displayName}`,
            comment: `${postDescription}`
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now(),
        username: `${profileUsername}`
      });
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal_add_post">
          <div>
            <div>
              <p className="text-2xl">Add Post: </p>
              <br />
              <form encType="multipart/form-data" method="post">
                <p>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={({ target }) => setPostImage(target.value)}
                    />
                    <Button className="fileUploadBtn" variant="contained" component="span">
                      Upload
                    </Button>
                  </Stack>
                  <p>
                    <br />
                    <br />
                    Description:
                    <br />
                    <br />
                    <textarea
                      name="comment"
                      cols="40"
                      rows="3"
                      className="description"
                      onChange={({ target }) => setPostDescription(target.value)}
                    />
                  </p>
                  <br />
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" color="error" onClick={closeModal}>
                      Decline
                    </Button>
                    <Button variant="contained" color="primary" onClick={submitPost}>
                      Submit
                    </Button>
                  </Stack>
                </p>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

ModalAddPost.propTypes = {
  modalOpen: PropTypes.string,
  closeModal: PropTypes.func,
  profileUserId: PropTypes.string,
  profileUsername: PropTypes.string
};
