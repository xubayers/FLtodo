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
      </div>
    </div>
  );
}

export default Input;
