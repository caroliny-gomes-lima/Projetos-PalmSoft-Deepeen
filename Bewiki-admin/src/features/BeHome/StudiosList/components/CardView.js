import React from "react";
import { dateTimeFormatter } from "../../../../services";
import Styles from "../styles/StyledCard";

export default function CardView({
  TitleCard,
  IconCard,
  IconColor,
  borderColor,
  lineHeaderColor,
  occupation,
  isFetching,
}) {
  const today = new Date();
  return (
    <Styles.CardContainer $defaultColor={borderColor}>
      {isFetching ? (
        <Styles.LoadingContainer>
          <Styles.CircleLoading
            style={{ width: "10%", height: "10%", margin: "50px" }}
          />
        </Styles.LoadingContainer>
      ) : (
        <Styles.CardContent>
          <Styles.CardHeader>
            <Styles.CardTitleGroup>
              <Styles.CardIcon $defaultColor={IconColor}>
                {IconCard}
              </Styles.CardIcon>
              <Styles.CardTitle>{TitleCard}</Styles.CardTitle>
            </Styles.CardTitleGroup>
            <Styles.CardTitle $dateFontSize>
              {dateTimeFormatter.format(today)}
            </Styles.CardTitle>
          </Styles.CardHeader>
          <Styles.Line $defaultColor={lineHeaderColor} />
          <Styles.CardText>{occupation}</Styles.CardText>
        </Styles.CardContent>
      )}
    </Styles.CardContainer>
  );
}
