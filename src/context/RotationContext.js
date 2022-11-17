import { createContext, useReducer } from "react";

export const RotationContext = createContext();

const rotationReducer = (state, action) => {
  switch (action.type) {
    case "ROTATE_BAR":
      return { ...state, rotation: action.payload };
    default:
      return state;
  }
};

export function RotationProvider({ children }) {
  const [state, dispatch] = useReducer(rotationReducer, {
    class: "defaultRotation",
  });

  const rotateBar = (position) => {
    dispatch({ type: "ROTATE_BAR", payload: position });
  };

  return (
    <RotationContext.Provider value={{ ...state, rotateBar }}>
      {children}
    </RotationContext.Provider>
  );
}
