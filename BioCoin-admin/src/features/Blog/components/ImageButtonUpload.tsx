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

const Container = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0),
  borderRadius: "62px",
  height: "262px",
  width: "300px",
  backgroundColor: "#616161",
}));

const ImageButton = styled(ImageInputButton)(({ theme }) => ({
  height: "262px",
  width: "296px",
  "&:hover": {
    background: "none",
    borderRadius: "62px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    borderRadius: "62px",
    "& .MuiImageBackdrop-root": {
      opacity: 0.4,
      borderRadius: "62px",
    },
    "& .MuiImageMarked-root": {
      opacity: 0.8,
      borderRadius: "62px",
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

const ImageBackdrop = styled.span(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "black",
  borderRadius: "62px",
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opactiy: 0,
  borderRadius: "62px",
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
<>
      {/* {hasImage === true ? (
        <Styles.StyledIconButton onClick={handleDeleteImageButton}>
          <Close />
        </Styles.StyledIconButton>
      ) : null} */}
      <Container>
        <ImageButton focusRipple key={"random"}>
          <ImageSrc
            style={{
              backgroundImage: `url(${updateImage ? image : defaultImage})`,
              borderRadius: "62px",
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <img
              alt=""
              src={IconsBase64.image}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
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
 </>
  );
}

export default ImageButtonUpload;
