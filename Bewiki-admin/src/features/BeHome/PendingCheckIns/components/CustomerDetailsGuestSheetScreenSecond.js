import { Button, Grid } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Input } from "../../../../components";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { CustomerDetailsModalStyles as Styles } from "../styles";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";

export default function CustomerDetailsGuestSheetScreenSecond({
  goNext,
  goPrevious,
  customerDetailsData,
}) {
  const texts = Texts["pt-BR"].beHome.PendingCheckIns.modalCustomerDetails;

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
                  <Styles.InputTitle>{texts.email}</Styles.InputTitle>
                }
                children={
                  <Input
                    name="location"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={customerDetailsData.email}
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid item xs={10} sm={6} md={2} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{texts.idDocument}</Styles.InputTitle>
                }
                children={
                  <Input
                    name="type"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={customerDetailsData.idDocument.number}
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid container spacing={1} direction="row">
              <Grid item xs={10} sm={6} md={2} lg={2}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>
                      {texts.idDocumentType}
                    </Styles.InputTitle>
                  }
                  children={
                    <Input
                      small
                      marginDefault
                      defaultBorder
                      name="checkInTime"
                      defaultValue={customerDetailsData.idDocument.type}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={10}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.issuingAgency}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      small
                      marginDefault
                      defaultBorder
                      name="checkInDate"
                      defaultValue={
                        customerDetailsData.idDocument.issuingAgency
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
                    <Styles.InputTitle>{texts.cep}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="location"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.address.cep}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={4}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.addressStreet}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="location"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.address.street}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={2}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.addressNumber}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="type"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.address.number}
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
                    <Styles.InputTitle>
                      {texts.addressNeighborhood}
                    </Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="location"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.address.district}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={2}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.state}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="location"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.address.state}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={4}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.city}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="type"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.address.city}
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
                    <Styles.InputTitle>{texts.country}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="sex"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.address.country}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={6}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>{texts.phone}</Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="type"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.phone}
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
                    <Styles.InputTitle>
                      {texts.lastDestination}
                    </Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="sex"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.lastDestination}
                      readOnly
                    />
                  }
                />
              </Grid>
              <Grid item xs={10} sm={6} md={2} lg={6}>
                <ContainerInputs
                  inputLabel={
                    <Styles.InputTitle>
                      {texts.nextDestination}
                    </Styles.InputTitle>
                  }
                  children={
                    <Input
                      name="type"
                      small
                      marginDefault
                      defaultBorder
                      defaultValue={customerDetailsData.nextDestination}
                      readOnly
                    />
                  }
                />
              </Grid>
            </Grid>
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
