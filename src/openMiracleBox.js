import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import GiftBoxAnimation from "./GiftBoxAnimation";

export function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    
    const handleClose = () => {
      onClose();
    };
    return (
      
        <div > 
          {open && <GiftBoxAnimation onClose={onClose} selectedValue={selectedValue}/> }
        </div>
    );
  }