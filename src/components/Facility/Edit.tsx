import { useEffect, useState } from "react";
import { CustomDialog, CustomDialogProps } from "components/Dialog";
import { Facility } from "./facility.types";
import { TextField } from "@material-ui/core";

const emptyFacility: Facility = {
  id: 0,
  name: "",
  address: "",
  createdAt: "",
  type: "indoor"
};

type EditFacilityProps = {
  initial?: Facility;
  onSave: (data: Facility) => void;
} & Omit<CustomDialogProps, "title" | "onSave">;

export function EditFacilityDialog(props: EditFacilityProps) {
  const { initial = emptyFacility, onSave, ...dialogProps } = props;
  const [state, setState] = useState<Facility>(initial);

  useEffect(() => {
    setState(initial);
  }, [initial]);

  const handleChange = (prop: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState(s => ({ ...s, [prop]: e.target.value }));
  };

  const handleSave = async () => {
    onSave(state);
  };

  return (
    <CustomDialog title="Add Facility" onSave={handleSave} {...dialogProps}>
      <TextField
        variant="filled"
        value={state.name}
        title="Facility name"
        fullWidth
        onChange={handleChange("name")}
      />
    </CustomDialog>
  );
}
