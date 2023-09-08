import MainContainer from "../../components/MainContainer";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { products } from "../api/products";
import { Box, Button, Card, CardContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useSound from "use-sound";
import ModalWindow from "../../components/Modal";

export default function InfoId({ data }) {
  const [play] = useSound("/openClose.mp3");
  const [playError] = useSound("/error.mp3");

  const [open, setOpenModal] = useState(false);

  const router = useRouter();
  const { query } = router;

  const findElement = +query.id;
  const infoGeneralInfo = products.filter((el, idx) => el.id === findElement);

  const openHandler = () => {
    setOpenModal(true);
    play();
  };
  const handleClose = () => {
    setOpenModal(false);
    play();
  };

  return (
    <>
      <MainContainer>
        <Box>
          <Card>
            <CardContent className="product-card">
              <pre>
                id: {infoGeneralInfo[0].id} <br />
                name: {infoGeneralInfo[0].name} <br />
                price: {infoGeneralInfo[0].price} <br />
                created At:
                {new Date(infoGeneralInfo[0].createdAt).toLocaleDateString()}
                <br />
                <Box className="product-card__footer">
                  <Button variant="contained" onClick={playError}>
                    Create
                  </Button>
                  <EditIcon onClick={openHandler} />
                </Box>
              </pre>
            </CardContent>
          </Card>
        </Box>

        <ModalWindow
          openModal={open}
          closeModal={handleClose}
          onClick={handleClose}
          dataForEdit={infoGeneralInfo}
        />
      </MainContainer>
    </>
  );
}
