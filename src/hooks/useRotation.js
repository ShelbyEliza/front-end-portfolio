import { useContext } from "react";
import { RotationContext } from "../context/RotationContext";

export const useRotation = () => {
  const context = useContext(RotationContext);

  if (context === undefined) {
    throw new Error("useRotation() must be used inside a RotationProvider");
  }

  return context;
};
