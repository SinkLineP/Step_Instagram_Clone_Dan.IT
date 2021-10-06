/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Modal, Box } from '@material-ui/core';
import { Button, Input, Stack } from '@mui/material';
import './styles/modal-add-post.scss';

export default function ModalAddPost({ modalOpen, closeModal }) {
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
            <p>Add Post: </p>
            <br />
            <form encType="multipart/form-data" method="post">
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
                  <Button variant="contained" color="primary">
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
