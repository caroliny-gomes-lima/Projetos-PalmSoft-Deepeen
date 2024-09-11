import { Button, ButtonProps } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IconsBase64 } from "../../../components";
import { FieldProps } from "form-full";
import Styles from "../styles/Styles";
import { Close } from "@material-ui/icons";

const VideoInputButton = (props: ButtonProps<"label">) => {
  return <Button style={{}} {...props} component="label" />;
};

const Container = styled.div(({ theme, $defaultSize }) => ({
  display: "flex",
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0),
  borderRadius: $defaultSize ? "5px" : "36px",
  width: "296px",
  height: "262px",
  backgroundColor: "#616161",
}));

const VideoButton = styled(VideoInputButton)(({ theme, $defaultSize }) => ({
  width: "296px",
  height: "262px",
  "&:hover": {
    background: "none",
    borderRadius: $defaultSize ? "8.507px" : "36px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    borderRadius: $defaultSize ? "8.507px" : "36px",
    "& .MuiImageBackdrop-root": {
      opacity: 0.4,
      borderRadius: $defaultSize ? "8.507px" : "36px",
    },
    "& .MuiImageMarked-root": {
      opacity: 0.8,
      borderRadius: $defaultSize ? "8.507px" : "36px",
    },
  },
}));

const VideoBackdrop = styled.span(({ theme, $defaultSize }) => ({
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
  defaultVideo?: any;
  VideoInputTargetValue?: any;
}

function VideoButtonUpload(props: Props) {
  const {
    name,
    defaultSize,
    VideoInputTargetValue,
    defaultVideo,
  } = props;
  const [video, setVideo] = React.useState("");
  const [updateVideo, setToUpdateVideo] = React.useState<boolean>(false);
  //const [hasVideo, setHasVideo] = React.useState(false);
  const videoRef = React.useRef<any>();

  //const fileInputRef = useRef<HTMLInputElement | null>(null);

  //   const handleButtonClick = () => {
  //     if (fileInputRef.current) {
  //       fileInputRef.current.click(); // Simula um clique no input de arquivo
  //     }
  //   };
  //console.log(videoRef);

  const handleOnChangeVideo = (event) => {
    //setHasVideo(true);
    VideoInputTargetValue.current = event;
    const file = event.target?.files?.[0];
    let reader = new FileReader();
    if (file) {
      setToUpdateVideo(true);
      setVideo(URL.createObjectURL(file));
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    videoRef.current?.load();
  }, [video, defaultVideo]);

  // function handleDeleteImageButton() {
  //   setHasVideo(false);
  //   setVideo("noVideo");
  //   setToUpdateVideo(true);
  // }

  return (
    <>
      <Container $defaultSize={defaultSize ? defaultSize : null}>
        <VideoButton
          focusRipple
          key={"random"}
          $defaultSize={defaultSize ? defaultSize : null}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              width: "296px",
              height: "262px",
              objectFit: "cover",
              borderRadius: "36px",
            }}
            ref={videoRef}
            controls
          >
            <source src={updateVideo ? video : defaultVideo} />
          </video>
          <VideoBackdrop className="MuiImageBackdrop-root" />
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
              type="file"
              name={name}
              accept="video/*"
              hidden
              onChange={handleOnChangeVideo}
            />
          </Image>
        </VideoButton>
      </Container>
      {/* {hasVideo === true || defaultVideo ? (
        <Styles.StyledIconButton onClick={handleDeleteImageButton}>
          <Close />
        </Styles.StyledIconButton>
      ) : null} */}
    </>
  );
}

export default VideoButtonUpload;
