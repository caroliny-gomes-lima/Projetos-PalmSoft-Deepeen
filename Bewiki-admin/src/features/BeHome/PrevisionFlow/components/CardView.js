import React from "react";
import { Texts } from "../../../../config";
import Styles from "../styles/StyledCard";
import { Grid } from "@material-ui/core";
import {
  CardTravel,
  NotificationsActive,
  MeetingRoom,
} from "@material-ui/icons";
import { FormHolder } from "../../../../FormConfig";
import { InputDate } from "../../../../components";
import { isDate } from "date-fns";

function CardView({ dataCard, setStartDate, setEndDate }) {
  const texts = Texts["pt-BR"].beHome.PrevisionFlow;
  const [formRef, setRef] = React.useState();
  const checkValueChange = (form, callback, inputName) => {    
    const value = form?.getFieldValue(inputName);
    if(isDate(value)) {
      return callback(new Date(value).toLocaleDateString("en-CA"))
    } else {
      return;
    }
  }

  const getDate = (date) => {
    const newDateValue = new Date(date);
    const getDay = newDateValue.getDate();
    const getMonth = newDateValue.getMonth();
    const getYear = newDateValue.getFullYear();
    return[getDay, getMonth, getYear];
  }

  const formatDate = (date) => {
    const valueDate = getDate(date);
    let day, month, year;
    if (valueDate[0] <= 9) { day = `0${valueDate[0] + 1}` } 
      else { day = valueDate[0] + 1 }
    if (valueDate[1] <= 9) { month = `0${valueDate[1] + 1}` } 
      else { month = valueDate[1] + 1 }
    year = valueDate[2];
    return (`${day}/${month}/${year}`)
  }

  return (
    <>
      <FormHolder formRef={setRef}>
        <Styles.CardHeader>
          <Styles.Title>{texts.title[0]}</Styles.Title>
          <Styles.CardHeader>
            <Styles.DateText>PERÍODO:</Styles.DateText>
            <InputDate 
              onBlur={() => {checkValueChange(formRef, setStartDate, "startDate")}}
              gray 
              name="startDate" 
              disableError 
            />
            <Styles.DateText $small>até</Styles.DateText>
            <InputDate 
              onBlur={() => {checkValueChange(formRef, setEndDate, "endDate")}}
              gray 
              name="endDate" 
              disableError 
            />
          </Styles.CardHeader>
        </Styles.CardHeader>
        <Styles.BlackLine />

        {dataCard ? (
          <Styles.Container>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Styles.CardContainer $setBorderColor={1}>
                  <Styles.CardContent>
                    <Styles.CardHeader>
                      <Styles.CardTitleGroup>
                        <Styles.CardIcon $setIconColor={1}>
                          <CardTravel />
                        </Styles.CardIcon>
                        <Grid container spacing={0} justify={"space-between"}>
                          <Styles.CardTitle>{texts.cardText.titles[0]}</Styles.CardTitle>
                          <Styles.CardTitle $dateFontSize>
                            {formatDate(dataCard?.reportDate)}
                          </Styles.CardTitle>
                        </Grid>
                      </Styles.CardTitleGroup>
                    </Styles.CardHeader>
                    <Styles.Line $setLineColor={1} />
                    <Styles.CardText>
                      {dataCard?.currentOccupation}
                    </Styles.CardText>
                  </Styles.CardContent>
                </Styles.CardContainer>
              </Grid>

              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Styles.CardContainer $setBorderColor={2}>
                  <Styles.CardContent>
                    <Styles.CardHeader>
                      <Styles.CardTitleGroup>
                        <Styles.CardIcon $setIconColor={2}>
                          <NotificationsActive />
                        </Styles.CardIcon>
                        <Grid container spacing={1} justify={"space-between"}>
                          <Styles.CardTitle>{texts.cardText.titles[1]}</Styles.CardTitle>
                          <Styles.CardTitle $dateFontSize>
                            {formatDate(dataCard?.reportDate)}
                          </Styles.CardTitle>
                        </Grid>
                      </Styles.CardTitleGroup>
                    </Styles.CardHeader>
                    <Styles.Line $setLineColor={2} />
                    <Styles.CardText>
                      {dataCard?.expectedCheckIns}
                    </Styles.CardText>
                  </Styles.CardContent>
                </Styles.CardContainer>
              </Grid>

              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Styles.CardContainer $setBorderColor={3}>
                  <Styles.CardContent>
                    <Styles.CardHeader>
                      <Styles.CardTitleGroup>
                        <Styles.CardIcon $setIconColor={3}>
                          <MeetingRoom />
                        </Styles.CardIcon>
                        <Grid container spacing={1} justify={"space-between"}>
                          <Styles.CardTitle $setFlex>
                            {texts.cardText.titles[2]}
                          </Styles.CardTitle>
                          <Styles.CardTitle $dateFontSize>
                            {formatDate(dataCard?.reportDate)}
                          </Styles.CardTitle>
                        </Grid>
                      </Styles.CardTitleGroup>
                    </Styles.CardHeader>
                    <Styles.Line $setLineColor={3} />
                    <Styles.CardText>
                      {dataCard?.expectedCheckOuts}
                    </Styles.CardText>
                  </Styles.CardContent>
                </Styles.CardContainer>
              </Grid>
            </Grid>
          </Styles.Container>
        ) : null}
      </FormHolder>
    </>
  );
}

export default CardView;
