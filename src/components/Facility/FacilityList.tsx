import { Facility } from "./facility.types";
import { FacilityCard } from "./FacilityCard";

type PropsType = {
  facilities: Facility[];
};

export function FacilityList(props: PropsType) {
  const { facilities } = props;
  return (
    <>
      {facilities.map(fac => (
        <FacilityCard key={fac.id} facility={fac} />
      ))}
    </>
  );
}
