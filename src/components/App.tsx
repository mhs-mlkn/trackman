import { useEffect } from "react";
import { facilityApi, Facility } from "components/Facility";

function App() {
  useEffect(() => {
    const data: Omit<Facility, "id"> = {
      name: "test",
      address: "test address",
      type: "indoor",
      createdAt: new Date().toISOString()
    };
    facilityApi.addItem(data);
    facilityApi.fetchAll().then(console.log);
  }, []);
  return <div>App</div>;
}

export default App;
