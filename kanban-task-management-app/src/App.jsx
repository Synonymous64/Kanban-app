import { useState } from "react";
import Center from "./components/Center";
import Header from "./components/Header";

const App = () => {
  const [boardModalOpen, setBoardModalOpen] = useState(false);
  return (
    <div>
      {/* Header Section */}
      <Header boardModalOpen={boardModalOpen} setBoardModalOpen={setBoardModalOpen} />
      {/* Center Section */}
      <Center />
    </div>
  )
}

export default App;