/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const PhonesContext = createContext();

function PhonesProvider({ children }) {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch("http://localhost:120/phones");
        const data = await res.json();
        setPhones(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const sendData = async (newPhone) => {
    try {
      const res = await fetch("http://localhost:120/phones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPhone),
      });
      const data = await res.json();
      setPhones((prev) => [...prev, data.phone]);

      return data.result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteData = async (_id) => {
    try {
      const res = await fetch(`http://localhost:120/phones/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      const fitlerPhones = phones.filter((phone) => {
        return phone._id !== data.id;
      });

      setPhones(fitlerPhones);

      return data.result;
    } catch (error) {
      console.log(error);
    }
  };

  const updateOneData = async (_id, updatedPhone) => {
    try {
      const res = await fetch(`http://localhost:120/phones/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPhone),
      });
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getOneData = async (_id) => {
    const res = await fetch(`http://localhost:120/phones/${_id}`);
    const data = await res.json();
    return data;
  };

  const values = { sendData, phones, deleteData, updateOneData, getOneData };
  return (
    <PhonesContext.Provider value={values}>{children}</PhonesContext.Provider>
  );
}

const usePhones = () => {
  return useContext(PhonesContext);
};

export { PhonesProvider, usePhones };
