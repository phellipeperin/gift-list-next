import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, ColorPaletteProp } from '@mui/joy';

import { StoreRootState } from '../../store';
import { MessageType } from '../../models/FeedbackMessage';
import { clearMessage } from '../../stores/feedbackStore';

function FeedbackSnackbar() {
  const defaultTimeSnackbar = 5000;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { message, type } = useSelector((state: StoreRootState) => ({
    message: state.feedback.message,
    type: state.feedback.type,
  }));

  const getColorByMessageType = (type: MessageType): ColorPaletteProp => {
    switch (type) {
      case MessageType.INFO:
        return 'primary';
      case MessageType.SUCCESS:
        return 'success';
      case MessageType.WARNING:
        return 'warning';
      case MessageType.ERROR:
        return 'danger';
    }
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(clearMessage());
  };

  useEffect(() => {
    setOpen(!!message);
    if (message) {
      setTimeout(handleClose, defaultTimeSnackbar);
    }
  }, [message, type]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="soft"
      color={getColorByMessageType(type)}
      open={open}
      onClose={handleClose}
    >
      {message}
    </Snackbar>
  );
}

export default FeedbackSnackbar;
