import React from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button } from "@mui/material";

export default function Property(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  return (
    <div className="property-card">
      <div className={`header ${props.color}`} />
      <h2 className="property-name">{props.name}</h2>
      <div className="price">
        <img className="monopoly-symbol" src="./src/assets/MonopolySymbol.svg" />
        <p>{props.price}</p>
      </div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"How are you?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I am Good, Hope the same for you!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose}
            color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}