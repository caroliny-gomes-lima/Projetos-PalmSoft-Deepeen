import { Button, Grid } from "@material-ui/core";
import { Input } from "../../../../components";
import { Texts } from "../../../../config";
import getAgeFromBirthDate from "../../../../services/helpers/getAgeFromBirthDate";
import displayFormattedDate from "../../../../services/helpers/displayFormattedDate";
import getTimeFromDateTimeString from "../../../../services/helpers/getTimeFromDateTimeString";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { CustomerDetailsModalStyles as Styles } from "../styles";
import { FormHolder } from "../../../../FormConfig";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import displayCpf from "../../../../services/helpers/displayCpf";

export default function CustomerDetailsGuestSheetScreenFirst({
  goNext,
  goPrevious,
  customerDetailsData,
  pendingCheckInData,
}) {
  const texts = Texts["pt-BR"].beHome.PendingCheckIns.modalCustomerDetails;
  const { sexes, nationalities } = Texts["pt-BR"];

  return (
    <FormHolder>
      <Styles.ModalContent>
        <Grid container spacing={1} direction="row">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            item
            xs={1}
            sm={1}
            md={5}
            lg={1}
          >
            <Button onClick={goPrevious}>
              <ChevronLeft />
            </Button>
          </Grid>
          <Grid
            item
            container
            spacing={1}
            direction="row"
            xs={12}
            sm={6}
            md={2}
            lg={10}
          >
            <Grid item xs={10} sm={6} md={2} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{texts.location}</Styles.InputTitle>
                }
                children={
                  <Input
                    name="location"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={pendingCheckInData.stay.name}
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid item xs={10} sm={6} md={2} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{texts.numberOfExtras}</Styles.InputTitle>
                }
                children={
                  <Input
                    name="type"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={"0"}
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid container spacing={1} direction="row">
              <Grid item xs={10} sm={6} md={2} lg={10}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.checkInDate}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      small
                      marginDefault
                      defaultBorder
                      name="checkInDate"
                      defaultValue={displayFormattedDate(
                        pendingCheckInData.stay.dateCheckIn
                      )}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={2}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.time}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      small
                      marginDefault
                      defaultBorder
                      name="checkInTime"
                      defaultValue={getTimeFromDateTimeString(
                        pendingCheckInData.checkIn.checkDateTime
                      )}
                      readOnly
                    />
                  }
                />
              </Grid>
            </Grid>
            <Grid item xs={10} sm={6} md={2} lg={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{texts.checkOutdate}</Styles.InputTitle>
                }
                children={
                  <Input
                    small
                    marginDefault
                    defaultBorder
                    name="checkInDate"
                    defaultValue={displayFormattedDate(
                      pendingCheckInData.stay.dateCheckOut
                    )}
                    readOnly
                  />
                }
              />
            </Grid>
            <Styles.HeaderContainer>
              <Styles.Title $defaultColor $defaultFonts>
                {texts.customerInformations}
              </Styles.Title>
            </Styles.HeaderContainer>
            <Styles.ModalContent>
              <Grid container spacing={1}>
                <Grid item xs={10} sm={6} md={2} lg={6}>
                  <ContainerInputs
                    inputLabel={
                      <Styles.InputTitle>{texts.fullName}</Styles.InputTitle>
                    }
                    children={
                      <Input
                        name="location"
                        small
                        marginDefault
                        defaultBorder
                        defaultValue={pendingCheckInData.stay.name}
                        readOnly
                      />
                    }
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={2} lg={3}>
                  <ContainerInputs
                    inputLabel={
                      <Styles.InputTitle>{texts.birthDate}</Styles.InputTitle>
                    }
                    children={
                      <Input
                        name="type"
                        small
                        marginDefault
                        defaultBorder
                        defaultValue={displayFormattedDate(
                          customerDetailsData.birthDate
                        )}
                        readOnly
                      />
                    }
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={2} lg={3}>
                  <ContainerInputs
                    inputLabel={
                      <Styles.InputTitle>{texts.age}</Styles.InputTitle>
                    }
                    children={
                      <Input
                        name="type"
                        small
                        marginDefault
                        defaultBorder
                        defaultValue={getAgeFromBirthDate(
                          customerDetailsData.birthDate
                        )}
                        readOnly
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={10} sm={6} md={2} lg={6}>
                  <ContainerInputs
                    inputLabel={
                      <Styles.InputTitle>{texts.job}</Styles.InputTitle>
                    }
                    children={
                      <Input
                        name="job"
                        small
                        marginDefault
                        defaultBorder
                        defaultValue={customerDetailsData.job}
                        readOnly
                      />
                    }
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={2} lg={6}>
                  <ContainerInputs
                    inputLabel={
                      <Styles.InputTitle>{texts.nationality}</Styles.InputTitle>
                    }
                    children={
                      <Input
                        name="nationality"
                        small
                        marginDefault
                        defaultBorder
                        defaultValue={
                          nationalities[customerDetailsData.nationality]
                        }
                        readOnly
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={10} sm={6} md={2} lg={6}>
                  <ContainerInputs
                    inputLabel={
                      <Styles.InputTitle>{texts.sex}</Styles.InputTitle>
                    }
                    children={
                      <Input
                        name="sex"
                        small
                        marginDefault
                        defaultBorder
                        defaultValue={sexes[customerDetailsData.sex]}
                        readOnly
                      />
                    }
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={2} lg={6}>
                  <ContainerInputs
                    inputLabel={
                      <Styles.InputTitle>{texts.cpf}</Styles.InputTitle>
                    }
                    children={
                      <Input
                        name="type"
                        small
                        marginDefault
                        defaultBorder
                        defaultValue={displayCpf(customerDetailsData.cpf)}
                        readOnly
                      />
                    }
                  />
                </Grid>
              </Grid>
            </Styles.ModalContent>
          </Grid>
          <Grid item xs={1} sm={1} md={5} lg={1}>
            <Button onClick={goNext}>
              <ChevronRight />
            </Button>
          </Grid>
        </Grid>
      </Styles.ModalContent>
    </FormHolder>
  );
}
