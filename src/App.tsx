import React, { useEffect, useState } from "react";
import vyroSquareLogo from "./vyroSquareLogo.svg";
import styles from "./App.module.scss";
import Vehicle from "./components/Vehicle";

// TODO done
// Load the mockedVehicles from the GraphQL API
// See ./mockedVehicles.ts for API details
import { getMockedVehicles, VehicleType } from "./mockedVehicles";

function App() {
  const [vehicles, setVehicles] = useState<VehicleType[]>();

  useEffect(() => {
    (async function () {
      setVehicles(await getMockedVehicles());
    })();
  }, []);

  return (
    <div className={styles.app}>
      <img src={vyroSquareLogo} className={styles.logo} alt="Vyro logo" />
      <h1>Welcome to Vyro</h1>
      <div className={styles.grid}>
        {vehicles ? (
          vehicles.map((vehicle, index) => (
            <Vehicle key={`vehicle-${index}`} {...vehicle} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
