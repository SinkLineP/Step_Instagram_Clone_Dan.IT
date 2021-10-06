/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Modal, Box } from '@material-ui/core';
import { Stack } from '@mui/material';
import './styles/modal-show-template.scss';
import ModalActions from './modal-actions.js';
import ModalComments from './modal-comments.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function ModalShowTemplate({
  openOption,
  closeModal,
  focusInput,
  modalComment,
  item
}) {
  return (
    <Modal
      open={openOption}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-options">
        <div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <div>
              <ModalActions
                docId={item.docId}
                totalLikes={item.likes.length}
                likedPhoto={item.userLikedPhoto}
                handleFocus={focusInput}
                src={item.imageSrc}
                caption={item.caption}
                likeSrc={item.likeImg}
              />
            </div>
            <div>
              <ModalComments
                docId={item.docId}
                comments={item.comments}
                posted={item.dateCreated}
                commentInput={modalComment}
              />
            </div>
          </Stack>
        </div>
      </Box>
    </Modal>
  );
}

ModalShowTemplate.propTypes = {
  openOption: PropTypes.string,
  closeModal: PropTypes.func,
  focusInput: PropTypes.func,
  modalComment: PropTypes.func,
  item: PropTypes.string
};
