import { useState } from "react";
import Listing from "../Listing/Listing";
import Select from "../Select/Select";
import SimpleText from "../SimpleText/SimpleText";
import { IDog } from "../../models/IDog";

function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [dogData, setDogData] = useState<IDog | null>(null);

  return (
    <>
      <div className="dashboard">
        <SimpleText
          elementTypeTitle="h1"
          title="THE GOOD BOY APP"
          elementTypeDescription="div"
          description="This application is powered by Davide Brignoli"
        />
        <Select onValueSelected={setSelectedBreed} setData={setDogData} />
        {dogData !== null && selectedBreed !== null && (
          <Listing selectedValue={selectedBreed} data={dogData} />
        )}
      </div>
    </>
  );
}

export default Dashboard;
