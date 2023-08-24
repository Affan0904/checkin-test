"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/material";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

export default function AddCheckin() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNewCheckIn = async () => {
    const currentDate = new Date();
    const doc = await addDoc(collection(db, "checkins"), {
      title: title,
      imageUrl: imageUrl,
      owner: "John Doerr",
      status: "CHECKED IN",
      createdAt: Timestamp.fromDate(currentDate),
    });

    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Check In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            New Checkin
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="title"
            label="Check In Title"
            type="text"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="title"
            label="Image Url"
            type="text"
            fullWidth
            variant="outlined"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={createNewCheckIn}>
            Create CheckIn
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
