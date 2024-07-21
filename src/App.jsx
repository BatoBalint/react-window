import "./App.css";
import Window from "./components/window/Window";
import WindowCanvas from "./components/windowCanvas/WindowCanvas";

function App() {
  return (
    <div className="text-white">
      <h1 className="mt-2 text-2xl text-center">React window test</h1>
      <WindowCanvas>
        <Window>
          <span>Window 1</span>
        </Window>
        <span>Random text</span>
        <Window contentClassName="p-2">
          <span>Window 2</span>
          <img src="https://picsum.photos/600/400" alt="" />
        </Window>
      </WindowCanvas>
    </div>
  );
}

export default App;
