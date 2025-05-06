import { Scene } from "./components/Scene";
import { Player } from "./components/Player";
import { Map } from "./components/Map";
import { Controls } from "./components/Controls";

import "./Game.css";


export default function Game() {
  return (
    <div className="game">
    <Scene>
      <Player />

      <Map />
    </Scene>
    <Controls />
    </div>
  );
}