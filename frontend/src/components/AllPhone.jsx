function AllPhone() {
  return (
    <div className="mt-6">
      <div className="flex py-2 items-center justify-between px-3 w-[470px] border border-purple-600/60 ">
        <div className="flex items-center">
          <p className="text-sm bg-orange-500 mr-3 rounded-full w-5 aspect-square flex justify-center items-center">
            1
          </p>
          <div className="text-white/85">
            <p className="text-xl">
              <span>Name:</span> Oppo A5S
            </p>
            <p className="text-white/65">
              <span>Price:</span>120000
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-end ">
          <button className="p-1 rounded-md bg-purple-600/20">
            <img
              src="https://img.icons8.com/?size=100&id=BKCQPf8biWWs&format=png&color=000000"
              alt=""
              className="w-6"
            />
          </button>
          <button>
            <img
              src="https://img.icons8.com/?size=100&id=102550&format=png&color=000000"
              alt=""
              className="w-8  p-1 rounded-md bg-purple-600/20"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllPhone;
