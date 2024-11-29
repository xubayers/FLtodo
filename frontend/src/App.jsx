import { useEffect } from "react";
import Input from "./components/Input";
import AllPhone from "./components/AllPhone";

function App() {
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log("err occur: ", err.message);
      }
    })();
  }, []);
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="my-5 text-3xl text-purple-600 font-bold">
        FullStack Todo App
      </h2>
      <Input />
      <AllPhone />
    </div>
  );
}

export default App;
