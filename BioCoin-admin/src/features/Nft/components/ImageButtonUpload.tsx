import { Button, ButtonProps, FormControl } from "@material-ui/core";
import React, { useRef } from "react";
import styled from "styled-components";
import { IconsBase64 } from "../../../components";
import { FieldProps } from "form-full";
import Styles from "../styles/Styles";
import { Close } from "@material-ui/icons";

const ImageInputButton = (props: ButtonProps<"label">) => {
  return <Button style={{}} {...props} component="label" />;
};

const Container = styled.div(({ theme, $defaultSize }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0),
  borderRadius: $defaultSize ? "23px" : "36px",
  height: $defaultSize ? "123px" : "262px",
  width: "296px",
  backgroundColor: "#616161",
}));

const ImageButton = styled(ImageInputButton)(({ theme, $defaultSize }) => ({
  height: $defaultSize ? "123px" : "262px",
  width: "296px",
  "&:hover": {
    background: "none",
    borderRadius: $defaultSize ? "23px" : "36px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    borderRadius: $defaultSize ? "23px" : "36px",
    "& .MuiImageBackdrop-root": {
      opacity: 0.4,
      borderRadius: $defaultSize ? "23px" : "36px",
    },
    "& .MuiImageMarked-root": {
      opacity: 0.8,
      borderRadius: $defaultSize ? "23px" : "36px",
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
  borderRadius: $defaultSize ? "23px" : "36px",
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
  borderRadius: $defaultSize ? "23px" : "36px",
  color: theme.palette.common.white,
}));

export interface Props extends FieldProps<any> {
  name: string;
  defaultSize?: boolean;
  Base64ImageData?: any;
  defaultImage?: any;
  ImageInputTargetValue?: any;
}

function ImageButtonUpload(props: Props) {
  const {
    name,
    defaultSize,
    Base64ImageData,
    defaultImage,
    ImageInputTargetValue,
  } = props;
  const [image, _setImage] = React.useState("");
  const [hasImage, setHasImage] = React.useState(false);
  const [updateImage, setUpdatedimage] = React.useState<boolean>(false);
  const fileInputRef = React.useRef<any>();
  //const fileInputRef = useRef<HTMLInputElement | null>(null);

  // const handleButtonClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click(); // Simula um clique no input de arquivo
  //   }
  // };

  const handleImageChange = (event) => {
    setHasImage(true)
    ImageInputTargetValue.current = event;
    const file = event.target?.files?.[0];
    let reader = new FileReader();
    if (file) {
      setUpdatedimage(true);
      _setImage(URL.createObjectURL(file));
      reader.onload = (e) => {
        const base64Image = e?.target?.result as string;
        Base64ImageData.current = base64Image
          .replace("data:image/png;base64,", "")
          .replace("data:image/jpeg;base64,", "");
      };
      reader.readAsDataURL(file);
    }
  };

  // function handleDeleteImageButton() {
  //   setHasImage(false)
  //   _setImage("noImage");
  //   fileInputRef.current.value = "";
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
            id={name}
            style={{
              backgroundImage: `url(${updateImage ? image : defaultImage})`,
              borderRadius: defaultSize ? "23px" : "36px",
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <img
              alt=""
              src={IconsBase64.image}
              style={{
                maxHeight: defaultSize ? "48px" : "50vh",
                maxWidth: defaultSize ? "54px" : "100%",
                objectFit: "cover",
              }}
            />
            <input
              ref={fileInputRef}
              type="file"
              name={name}
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </Image>
        </ImageButton>
      </Container>
      {/* {hasImage === true ? (
        <Styles.StyledIconButton onClick={handleDeleteImageButton}>
          <Close />
        </Styles.StyledIconButton>
      ) : null} */}
    </FormControl>
  );
}

export default ImageButtonUpload;
