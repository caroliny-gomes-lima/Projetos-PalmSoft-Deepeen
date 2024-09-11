import {
  Button,
  ButtonProps,
  FormControl,
  IconButton,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { IconsBase64 } from "../../../components";
import { FieldProps } from "form-full";
import { Close } from "@material-ui/icons";
import Styles from "../styles/Styles";

const ImageInputButton = (props: ButtonProps<"label">) => {
  return <Button style={{}} {...props} component="label" />;
};

const Container = styled.div(({ theme, $defaultSize }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0),
  borderRadius: "8.507px",
  height: "54.347px",
  width: "69.943px",
  backgroundColor: "#616161",
}));

const ImageButton = styled(ImageInputButton)(({ theme, $defaultSize }) => ({
  height: $defaultSize ? "54.347px" : "50vh",
  width: $defaultSize ? " 69.943px" : "100%",
  "&:hover": {
    background: "none",
    borderRadius: "8.507px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    borderRadius: "8.507px",
    "& .MuiImageBackdrop-root": {
      opacity: 0.4,
      borderRadius: "8.507px",
    },
    "& .MuiImageMarked-root": {
      opacity: 0.8,
      borderRadius: "8.507px",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const ImageBackdrop = styled.span(({ theme, $defaultSize }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "black",
  borderRadius: $defaultSize ? "8.507px" : "36px",
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

const Image = styled("span")(({ theme, $defaultSize }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opactiy: 0,
  borderRadius: $defaultSize ? "8.507px" : "36px",
  color: theme.palette.common.white,
}));

export interface Props extends FieldProps<any> {
  name: string;
  defaultSize?: boolean;
  Base64ImageData: any;
  defaultImage?: any;
  ImageInputTargetValue?: any;
  ref?: any;
}

function ImageButtonUpload(props: Props) {
  const {
    name,
    defaultSize,
    Base64ImageData,
    defaultImage,
    ImageInputTargetValue,
    ref
  } = props;
  const [image, _setImage] = React.useState("");
  const [updateImage, setToUpdateImage] = React.useState<boolean>(false);
  //const [hasImage, setHasImage] = React.useState(false);

  const handleImageChange = (event) => {
    //setHasImage(true)
    ImageInputTargetValue.current = event;
    const file = event.target?.files?.[0];
    let reader = new FileReader();
    if (file) {
      setToUpdateImage(true);
      _setImage(URL.createObjectURL(file));
      reader.readAsDataURL(file);
    }
  };

  // function handleDeleteImageButton() {
  //   _setImage("noImage");
  //   setHasImage(false)
  //   setToUpdateImage(true);
  // }

  return (
    <FormControl>
      <Container $defaultSize={defaultSize ? defaultSize : null}>
        <ImageButton
          focusRipple
          key={"random"}
          $defaultSize={defaultSize ? defaultSize : null}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${updateImage ? image : defaultImage})`,
              borderRadius: defaultSize ? "8.507px" : "36px",
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <img
              alt=""
              src={IconsBase64.image}
              style={{
                maxHeight: defaultSize ? "28.965px" : "50vh",
                maxWidth: defaultSize ? "25.746px" : "100%",
                objectFit: "cover",
              }}
            />
            <input
              ref={ref}
              type="file"
              name={name}
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </Image>
        </ImageButton>
      </Container>
      {/* {hasImage === true || defaultImage ? (
        <Styles.StyledIconButton onClick={handleDeleteImageButton}>
          <Close />
        </Styles.StyledIconButton>
      ) : null} */}
    </FormControl>
  );
}

export default ImageButtonUpload;
