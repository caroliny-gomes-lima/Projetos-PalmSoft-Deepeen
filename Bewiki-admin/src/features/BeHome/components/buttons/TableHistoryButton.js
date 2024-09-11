import { Description } from "@material-ui/icons";
import { ButtonContainedWithoutForm } from "../../../../components";
import { Colors, Texts } from "../../../../config";

export default function TableHistoryButton({ onClick }) {
  const text = Texts["pt-BR"].beHome.Signatures;
  return (
    <ButtonContainedWithoutForm
      isForTable={true}
      fontSize={10}
      backgroundColor={Colors.green}
      fullWidth={false}
      loading={false}
      disabled={false}
      endIcon={<Description />}
      height={"20%"}
      onClick={onClick}
    >
      {text.historicButton}
    </ButtonContainedWithoutForm>
  );
}
