import "./App.css";
import "./index.css";
import { Article } from "./components/Article";

export default function App() {
  return (
    <>
      <header className="text-center bg-asia-trail py-4 md:pt-24 md:pb-10">
        <h1 className="text-white text-3xl">Daily Animal Demos</h1>
      </header>

      <Article />

      <footer className="m-4"></footer>
    </>
  );
}