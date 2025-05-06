import { Scene } from "./components/Environments/Scene";
import { Player } from "./components/Assets/Player";
import { Map } from "./components/Assets/Map";
import { Controls } from "./components/Controls/Controls";
import { Score } from "./components/Scores/Score";
import { Result } from "./components/Results/Result";

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