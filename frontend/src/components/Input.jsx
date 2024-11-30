<<<<<<< HEAD
import toast from "react-hot-toast";
import { usePhones } from "../contexts/PhonesContext";

function Input() {
  const { sendData } = usePhones();
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    const phoneName = target.phoneName.value;
    const phonePrice = target.price.value;

    const phoneObj = {
      phoneName,
      phonePrice,
    };
    sendData(phoneObj).then(() => {
      toast.success("new phone added");
    });
  };
  return (
    <div
      className="mt-3 sticky top-0 bg-[#191919] p-3
    "
    >
      <div className="flex ">
        <form onSubmit={handleSubmit} className="flex">
          <div className="flex gap-2 text-white/80">
            <input
              type="text"
              placeholder="Product name"
              name="phoneName"
              className="w-80 bg-black/40 px-3 border border-gray-600 outline-none focus:ring-1 ring-purple-500 "
            />
            <input
              type="text"
              placeholder="price"
              name="price"
              className="w-20 bg-black/40 px-3 border border-gray-600 outline-none focus:ring-1 ring-purple-500 "
            />
          </div>
          <button className="bg-purple-600 py-2 px-4 active:bg-purple-600/85">
            Add
          </button>
        </form>
=======
function Input() {
  return (
    <div className="mt-3">
      <div className="flex ">
        <div className="flex gap-2 text-white/80">
          <input
            type="text"
            name="Product name"
            id=""
            className="w-80 bg-black/40 px-3 border border-gray-600 outline-none focus:ring-1 ring-purple-500 "
          />
          <input
            type="text"
            name="Product name"
            id=""
            className="w-20 bg-black/40 px-3 border border-gray-600 outline-none focus:ring-1 ring-purple-500 "
          />
        </div>
        <button className="bg-purple-600 py-2 px-4 active:outline">Add</button>
>>>>>>> fef67950b827b4dda5adc41dfec0fedc9281ebbb
      </div>
    </div>
  );
}

export default Input;
