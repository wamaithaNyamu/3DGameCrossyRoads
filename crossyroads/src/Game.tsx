import { Scene } from "./components/Scene";
import { Player } from "./components/Player";
import { Map } from "./components/Map";
import { Controls } from "./components/Controls";
import { Score } from "./components/Score";
import { Result } from "./components/Result";
import "./Game.css";


export default function Game() {
  return (
    <div className="game">
    <Scene>
      <Player />

      <Map />
    </Scene>
    <Score />
    <Controls />
    <Result />
    </div>
  );
}