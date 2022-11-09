import { useCallback, useMemo} from "react";
import { useState} from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Demo from "./components/Demo";
import DemoList from "./components/DemoList";

function App() {
  const [show, setShow] = useState(false);
  const [letShow, setLetShow] = useState(false);
  const showHandler = () => {
    setShow((prev) => !prev); //если true то false или обратно
  };

  // const demoHandler = () => {
  //   setLetShow(true);
  // };

  const demoHandler = useCallback(() => setLetShow(true));

  // const user = {
  //   name: "Alina",
  //   age: 30,
  // };

  const user = useMemo(() => {
    // useMemo обьектерди рендер болбошу учун колдонобуз
    return {
      name: "Alina",
      age: 30,
    };
  }, []);


  // React.memo = компонент заново рендер болбош учун
  // биз реакт мемого обарачивать кылганбыз, бул ректын бир
  // отдельный памятинде сакталат экен.

  // Бирок мемо мотоду состояниялар озгоргондо компонент
  // рендер болоберет, ал учун хукuseCallback колдонулат

  return (
    <div className="App">
      <h1>hi there!!!</h1>
      <DemoList />
      <Demo onClick={demoHandler} {...user}/>
      {show && <p>This is New</p>}
      {/* show true болсо текс отрисовка болот */}
      <Button onClick={showHandler}>Click Me</Button>
    </div>
  );
}

export default App;
