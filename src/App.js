import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

function App() {

  const [activeId,setActiveId] = useState(null);

  const toogle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  }

  return (
    <main>
      <Questions questions = {questions} activeId = {activeId} toogle = {toogle} />
    </main>
  );
}

export default App;
