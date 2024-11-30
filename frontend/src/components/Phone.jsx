import toast from "react-hot-toast";
import { usePhones } from "../contexts/PhonesContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

/* eslint-disable react/prop-types */
function Phone({ phone, index }) {
  const { deleteData, updateOneData } = usePhones();
  const [toggleEdit, setToggleEdit] = useState(false);
  const nameRaf = useRef();
  const [phoneNameEditedValue, setPhoneNameEditedValue] = useState("");
  const priceRef = useRef();
  const [phonePriceEditedValue, setPhonePriceEditedValue] = useState("");

  const deleteHandler = (_id) => {
    deleteData(_id).then((res) => {
      if (res.acknowledged) {
        toast.success("deleled data");
      }
    });
  };

  useEffect(() => {
    setPhoneNameEditedValue(phone.phoneName);
    setPhonePriceEditedValue(phone.phonePrice);
  }, [phone]);

  const handleEdit = (id) => {
    if (toggleEdit && phoneNameEditedValue !== phone.phoneName) {
      setToggleEdit((prev) => !prev);

      const updatedPhone = {
        phoneName: phoneNameEditedValue,
        phonePrice: phonePriceEditedValue,
      };
      updateOneData(id, updatedPhone).then((res) => {
        console.log(res);
      });
      return;
    }
    setToggleEdit((prev) => !prev);

    setPhoneNameEditedValue(nameRaf.current.value);
  };
  return (
    <div className="flex py-2 items-center justify-between px-3 w-[470px] border border-purple-600/60 ">
      <div className="flex items-center">
        <p className="text-sm bg-orange-500 mr-3 rounded-full w-5 aspect-square flex justify-center items-center">
          {index}
        </p>
        <div className="text-white/85">
          <p className="text-xl">
            <span>Name: </span>
            <input
              ref={nameRaf}
              type="text"
              className="bg-transparent outline-none"
              readOnly={!toggleEdit}
              value={phoneNameEditedValue}
              onChange={(e) => setPhoneNameEditedValue(e.target.value)}
            />
          </p>
          <p className="text-white/65">
            <span>Price: </span>
            <input
              ref={priceRef}
              type="text"
              className="bg-transparent outline-none"
              readOnly={!toggleEdit}
              value={phonePriceEditedValue}
              onChange={(e) => setPhonePriceEditedValue(e.target.value)}
            />
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-end ">
        <button
          className="p-1 rounded-md bg-purple-600/20"
          onClick={() => handleEdit(phone._id)}
        >
          <img
            src={
              toggleEdit
                ? "https://img.icons8.com/?size=100&id=81932&format=png&color=000000"
                : "https://img.icons8.com/?size=100&id=C1JxVx8AW6TL&format=png&color=000000"
            }
            className="w-6 "
          />
        </button>
        <Link to={`/details/${phone._id}`}>
          {" "}
          <button className="p-1 rounded-md bg-purple-600/20">
            <img
              src="https://img.icons8.com/?size=100&id=BKCQPf8biWWs&format=png&color=000000"
              alt=""
              className="w-6"
            />
          </button>
        </Link>
        <button onClick={() => deleteHandler(phone._id)}>
          <img
            src="https://img.icons8.com/?size=100&id=102550&format=png&color=000000"
            alt=""
            className="w-8  p-1 rounded-md bg-purple-600/20"
          />
        </button>
      </div>
    </div>
  );
}

export default Phone;
