import { CheckCircle } from "@material-ui/icons";
import { ButtonContainedWithoutForm } from "../../../../components";
import { Colors, Texts } from "../../../../config";

export default function TableApproveButton({ onClick }) {
  const text = Texts["pt-BR"].beHome.RequestedReservations;
  return (
    <ButtonContainedWithoutForm
      isForTable={true}
      fontSize={10}
      backgroundColor={Colors.green}
      fullWidth={false}
      loading={false}
      disabled={false}
      endIcon={<CheckCircle />}
      height={"20%"}
      onClick={onClick}
    >
      {text.ApproveButton}
    </ButtonContainedWithoutForm>
  );
}
