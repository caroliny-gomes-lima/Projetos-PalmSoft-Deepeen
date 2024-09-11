import { Cancel } from "@material-ui/icons";
import { ButtonContainedWithoutForm } from "../../../../components";
import { Colors } from "../../../../config";

export default function TableTransferButton({ onClick }) {
  return (
    <ButtonContainedWithoutForm
      isForTable={true}
      fontSize={10}
      defaultColor={Colors.black}
      fullWidth={false}
      loading={false}
      disabled={false}
      endIcon={<Cancel />}
      height={"20%"}
      onClick={onClick}
    >
      Cancelar
    </ButtonContainedWithoutForm>
  );
}
