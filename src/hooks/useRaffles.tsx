import { useContext } from "react";
import { RaffleContext } from "../contexts";

export default function useRaffles() {
  return {
    ...useContext(RaffleContext)
  }
}
