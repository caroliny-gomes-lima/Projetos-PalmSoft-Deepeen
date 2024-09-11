import React from "react";
import Styles from "../styles/AmenitiesStyle";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { Switch } from "../../../../components";
import { FitnessCenter, Language, Pool, Videocam } from "@material-ui/icons";
import {
  AutoStories,
  Countertops,
  DeviceThermostat,
} from "@mui/icons-material";

function AmenitiesInputs() {
  const texts = Texts["pt-BR"].beHome.RegisterApartment;

  const data = [
    {
      icon: <Language />,
      name: "INTERNET RÁPIDA",
    },
    {
      icon: <Countertops />,
      name: "COZINHA COMPARTILHADA",
    },
    {
      icon: <DeviceThermostat />,
      name: "SAUNA",
    },
    {
      icon: <Videocam />,
      name: "SEGURANÇA",
    },
    {
      icon: <FitnessCenter />,
      name: "ACADEMIA",
    },
    { icon: <Pool />, name: "PISCINA" },
    {
      icon: <AutoStories />,
      name: "SALA DE LEITURA",
    },
  ];

  const drawList = (data) => {
    return data.map((item) => {
      return (
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Styles.Box key={`idAmenities_${item.id}`}>
            <Styles.BoxContent>
              <Styles.SwitchBox>
                <Styles.SwitchLabel>
                  <Styles.ImageIcon>{item.icon}</Styles.ImageIcon>
                  {item?.name}
                </Styles.SwitchLabel>

                <Switch defaulValue={false} disableError />
              </Styles.SwitchBox>
            </Styles.BoxContent>
          </Styles.Box>
        </Grid>
      );
    });
  };

  return (
    <>
      <Styles.HeaderContant>
        <Styles.Title>{texts.Amenities.title}</Styles.Title>
      </Styles.HeaderContant>

      <Grid container spacing={1} direction="row">
        {data && drawList(data)}
      </Grid>
    </>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesInputs);
