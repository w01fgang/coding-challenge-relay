import React from "react";
import MainContainer from "./MainContainer";
import NavigateComponent from "./NavigateComponent";
import { Box, Card, CardContent } from "@mui/material";

type IInfoCard = {
  props: Array<Object>,
};

const InfoCard = (props: IInfoCard) => {
  const arrayInfoUser = [...props.props];
  return (
    <>
      <MainContainer>
        {arrayInfoUser.map((el, idx) => {
          return (
            <Box key={idx} className="product-card">
              <Card>
                <CardContent className="product-card__cards">
                  <pre>
                    <NavigateComponent
                      path={`infoCard/${el.id}`}
                      text={el.name + "\n"}
                    >
                      id: {el.id} <br />
                    </NavigateComponent>
                    name: {el.name} <br />
                    price: {el.price} <br />
                    created At: {new Date(el.createdAt).toLocaleDateString()}
                  </pre>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </MainContainer>
    </>
  );
};

export default InfoCard;
