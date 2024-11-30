import { usePhones } from "../contexts/PhonesContext";
import Phone from "./Phone";

function AllPhone() {
  const { phones } = usePhones();
  return (
    <div className="mt-6">
      {phones.map((phone, index) => {
        return <Phone key={phone._id} phone={phone} index={++index} />;
      })}
    </div>
  );
}

export default AllPhone;
