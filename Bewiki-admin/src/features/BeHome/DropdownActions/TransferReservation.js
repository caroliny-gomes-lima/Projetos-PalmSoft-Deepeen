import { ArrowRightAltRounded } from "@material-ui/icons";
import ptBr from "../../../config/texts/pt-br";

const texts = ptBr.beHome?.DropdownActions;

export const TransferReservation = {
  action: () => console.log("Transferencia"),
  icon: (data) => <ArrowRightAltRounded classes={data} />,
  name: texts?.transferReservation,
};
