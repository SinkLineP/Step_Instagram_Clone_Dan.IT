/* eslint-disable no-nested-ternary */
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal, Box } from '@material-ui/core';
import { Button, Input, Stack } from '@mui/material';
import FirebaseContext from '../../../../context/firebase';
import UserContext from '../../../../context/user';
import './styles/modal-add-post.scss';

export default function ModalAddPost({ modalOpen, closeModal }) {
  const [comment, setComment] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName }
  } = useContext(UserContext);

  const handleSubmitComment = (event) => {
    event.preventDefault();

    return firebase
      .firestore()
      .collection('photos')
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment })
      });
  };

  return (
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
            <form
              encType="multipart/form-data"
              method="post"
              onSubmit={(event) =>
                comment.length >= 1 ? handleSubmitComment(event) : event.preventDefault()
              }
            >
              <p>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Input accept="image/*" id="contained-button-file" multiple type="file" />
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
                  <textarea name="comment" cols="40" rows="3" className="description" />
                </p>
                <br />
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button variant="contained" color="error" onClick={closeModal}>
                    Decline
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleSubmitComment}>
                    Submit
                  </Button>
                </Stack>
              </p>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

ModalAddPost.propTypes = {
  modalOpen: PropTypes.string,
  closeModal: PropTypes.func
};
