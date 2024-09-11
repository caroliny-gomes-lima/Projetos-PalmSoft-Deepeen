import { Filters } from "../../lib";
import Input from "./Input";

export default function InputCPF({ ...props }) {
  return (
    <Input
      {...props}
      mask={Filters.cpfMask}
      maskToSubmit={Filters.clearStringOnlyNumbers}
    />
  );
}
