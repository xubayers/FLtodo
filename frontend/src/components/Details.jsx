/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { usePhones } from "../contexts/PhonesContext";
import { useNavigate, useParams } from "react-router";

function Details() {
  const [phone, setPhone] = useState({});
  const { getOneData } = usePhones();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneData(params.id).then((res) => setPhone(res));
  }, [params.id]);
  return (
    <div className="bg-black/30 py-24 sm:py-32 text-white/85">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600 flex gap-7 justify-center">
          <button
            className="bg-purple-600 px-3 py-1 text-white rounded-md"
            onClick={() => navigate(-1)}
          >
            Back
          </button>{" "}
          Phone Details
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight  sm:text-5xl">
          {phone.phoneName}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 ">
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight  max-lg:text-center">
                  Name - {phone.phoneName}
                </p>
                <p className="mt-2 text-xl font-medium tracking-tight  max-lg:text-center">
                  Price - BDT {phone.phonePrice} (fixed)
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
