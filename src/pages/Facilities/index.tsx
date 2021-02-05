import { useEffect, useRef, useState } from "react";
import { Button, Icon } from "@material-ui/core";
import Page from "components/Page";
import {
  facilityApi,
  Facility,
  FacilityList,
  EditFacilityDialog
} from "components/Facility";

export default function Facilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [newModal, showNewModal] = useState(false);
  const [delModal, showDelModal] = useState(false);
  const isMounted = useRef(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const data = await facilityApi.fetchAll();
      isMounted.current && setFacilities(data);
    } catch (error) {
      isMounted.current && setError(error?.message ?? "An Error Occurred");
    } finally {
      isMounted.current && setLoading(false);
    }
  };

  useEffect(() => {
    isMounted.current = true;

    fetch();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onToggleModal = (modal: "ADD" | "DEL") => () =>
    modal === "ADD" ? showNewModal(s => !s) : showDelModal(d => !d);

  const handleSave = async (data: Facility) => {
    await facilityApi.addItem(data);
    await fetch();
  };

  const createButton = (
    <Button
      color="primary"
      startIcon={<Icon>add</Icon>}
      onClick={onToggleModal("ADD")}
    >
      Add Facility
    </Button>
  );

  return (
    <Page
      title="Facility List"
      isLoading={loading}
      error={error}
      action={createButton}
    >
      <EditFacilityDialog
        open={newModal}
        onClose={onToggleModal("ADD")}
        onSave={handleSave}
      />
      <FacilityList facilities={facilities} />
    </Page>
  );
}
