import styled from "styled-components";
import { useRef } from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { customModal } from "../../components/modals/utils";
import { api } from "../../services";
import { hooks } from "../../utils";
import { IconButton } from "@material-ui/core";
import { fonts } from "../../config";
import useUser from "../../utils/useUser";

interface Props {
  $style?: any;
}

const UserImg = styled.div(({ theme, $img }) => {
  const { spacing } = theme;
  return {
    borderRadius: "243.848px",
    backgroundImage: `url(${$img})`,
    width: "200px",
    height: "200px",
    zIndex: 2,
    backgroundSize: "cover",
    marginBlock: spacing(4),
  };
});

const SendImg = styled(IconButton)(({ theme, $img }) => {
  const { spacing } = theme;
  return {
    "&&.MuiIconButton-root": {
      position: "absolute",
      right: 5,
      backgroundColor: "rgba(26, 32, 36, 0.40)",
      backdropFilter: "blur(5px)",
      bottom: 40,
      border: "1.997px solid #FFF",
      color: "white",
      padding: "11px",
      height: "fit-content",
      "& .MuiIconButton-label": {
        [`@media (max-width:${581 - 1}px)`]: { fontSize: "9px" },
      },
      [`@media (max-width:${1024 - 1}px)`]: {},
      [`@media (max-width:${581 - 1}px)`]: { right: 6, padding: "5px" },
    },
  };
});

const MotalSubtText = styled.p(({ theme, $img }) => {
  const { spacing } = theme;
  return {
    color: "black",
    fontFamily: fonts.medium,
    fontSize: spacing(2),
    marginBottom: 0,
    textAlign: "left",
    width: "100%",
    [`@media (max-width:${1024 - 1}px)`]: {},
    [`@media (max-width:${581 - 1}px)`]: {},
  };
});

const ModalContainer = styled.div(({ theme, $img }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minWidth: "400px",
    paddingInline: spacing(3),
    [`@media (max-width:${1024 - 1}px)`]: {},
    [`@media (max-width:${581 - 1}px)`]: {},
  };
});

function UploadImage({ $style }: Props): JSX.Element {
  const { call } = hooks.useRequest();
  const { userData, updateUser } = useUser();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e?.target?.result as string;
        cropToSquare(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Simula um clique no input de arquivo
    }
  };

  const cropToSquare = (base64Image: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = base64Image;

    image.onload = () => {
      const minSize = Math.min(image.width, image.height);
      const centerX = (image.width - minSize) / 2;
      const centerY = (image.height - minSize) / 2;

      canvas.width = minSize;
      canvas.height = minSize;
      ctx?.drawImage(
        image,
        centerX,
        centerY,
        minSize,
        minSize,
        0,
        0,
        minSize,
        minSize
      );

      const croppedBase64 = canvas.toDataURL("image/jpeg"); // Pode escolher outro formato se preferir

      customModal.setInfos(
        "Salvar",
        [],
        {
          onClick: () => {
            let image = croppedBase64
              .replace("data:image/png;base64,", "")
              .replace("data:image/jpeg;base64,", "");
            call(
              null,
              api.EditUserImage({
                ...userData,
                image: image,
              }),
              (response) => {
                if (response.ok) {
                  updateUser(userData, image);
                } else {
                  fileInputRef?.current?.value === null;
                  const fileInput = fileInputRef.current;

                  if (fileInput && fileInput.value) {
                    fileInput.value = "";
                  }
                }
              }
            );
            customModal.close();
          },
          label: "Enviar",
        },
        {
          onClick: () => {
            customModal.close();
          },
          label: "Cancelar",
        },
        <ModalContainer>
          <MotalSubtText>Nova Imagem:</MotalSubtText>
          <UserImg $img={croppedBase64}></UserImg>
        </ModalContainer>
      );
    };
  };

  return (
    <>
      <SendImg size="small" onClick={handleButtonClick}>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <CameraAltIcon />
      </SendImg>
    </>
  );
}

export default UploadImage;
