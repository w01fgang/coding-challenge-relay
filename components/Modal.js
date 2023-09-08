import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@material-ui/core";
import { FC } from "react";
import { FormControl, FormLabel, TextField } from "@mui/material";
import useSound from "use-sound";

type IModal = {
  openModal: boolean,
  onClickEv: () => void,
  closeModal: () => void,
  dataForEdit: Array<Object>,
};

const ModalWindow: FC<IModal> = ({
  openModal,
  onClickEv,
  closeModal,
  dataForEdit,
}) => {
  const [play] = useSound("/error.mp3");

  const handleCloseWindowForButtonSave = () => {
    closeModal();
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-heandler">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            EDIT INFORMATION USER: {dataForEdit[0].id}
          </Typography>
          <Box>
            <Box className="edit-cards">
              <pre>
                id: {dataForEdit[0].id}
                name: {dataForEdit[0].name}
                price: {dataForEdit[0].price}
                created At:
                {new Date(dataForEdit[0].createdAt).toLocaleDateString()}
                <Box className="product-card__footer">
                  <Button type="submit" onClick={play} variant="contained">
                    SAVE
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleCloseWindowForButtonSave}
                  >
                    CLOSE
                  </Button>
                </Box>
              </pre>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
