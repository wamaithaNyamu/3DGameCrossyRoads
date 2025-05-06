import type { Row } from "../../shared/types";
import { Forest } from "../Assets/Forest";
import { CarLane } from "../Assets/CarLane";
import { TruckLane } from "../Assets/TruckLane";

type Props = {
  rowIndex: number;
  rowData: Row;
};

export function Row({ rowIndex, rowData }: Props) {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowIndex={rowIndex} rowData={rowData} />;
    }
    case "car": {
        return <CarLane rowIndex={rowIndex} rowData={rowData} />;
      }
      case "truck": {
        return <TruckLane rowIndex={rowIndex} rowData={rowData} />;
      }

  }
}