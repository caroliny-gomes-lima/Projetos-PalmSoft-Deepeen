import { Cancel } from "@material-ui/icons";
import { ButtonContainedWithoutForm } from "../../../../components";
import { Colors, Texts } from "../../../../config";

export default function TableCancelButton({ onClick }) {
  const text = Texts["pt-BR"].beHome.RequestedReservations;
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
      {text.cancelButton}
    </ButtonContainedWithoutForm>
  );
}
