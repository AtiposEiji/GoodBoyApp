import { IDog } from "./IDog";

export interface ISelectProps {
  onValueSelected: (breed: string) => void;
  setData: (dogData: IDog) => void;
}