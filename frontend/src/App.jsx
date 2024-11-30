import Input from "./components/Input";
import AllPhone from "./components/AllPhone";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="my-5 text-3xl text-purple-600 font-bold">
        FullStack Todo App
      </h2>
      <Input />
      <AllPhone />
      <Toaster />
    </div>
  );
}

export default App;
