import { createContext, useContext, useReducer } from "react";
import numbro from "numbro";

export const AppContex = createContext();

let result,
  currentValue = "";
const initialState = { empty: true };
const ops = ["+", "-", "/", "*", "%", "^", "."];

const getLastInput = (value) => {
  return value.slice(-1);
};

const validator = {
  isOperator: (value) => ops.includes(value),
  isLastInputOperator: (value) => ops.includes(getLastInput(value)),
  isEmpty: () => currentValue === "",
};

const checkLastInput = ({ isOperator, isLastInputOperator }, value) => {
  return isOperator(value) && isLastInputOperator(currentValue);
};

const checkInput = ({ isOperator, isEmpty }, value) => {
  return isOperator(value) && isEmpty();
};

const validate = (value) => {
  return checkLastInput(validator, value) || checkInput(validator, value);
};

const display = (value) => {
  !validate(value) && (currentValue += value);
};

const convertResult = (value) => {
  return numbro(value).format({ thousandSeparated: true });
};

const calc = () => {
  const { isLastInputOperator } = validator;
  let currentOp, modifiedOp;

  if (currentValue.includes("^")) {
    currentOp = "^";
    modifiedOp = "**";
  }

  if (currentValue.includes("x")) {
    currentOp = "x";
    modifiedOp = "*";
  }

  !isLastInputOperator(currentValue) &&
    (result = convertResult(eval(currentValue.replace(currentOp, modifiedOp))));
};

const percent = () => {
  !checkInput(validator, currentValue) && (result = currentValue / 100);
};

const del = () => {
  currentValue = currentValue.slice(0, -1);
};

const clear = () => {
  currentValue = "";
  result = "";
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "=":
      calc();
      return { result, currentValue };
    case "AC":
      clear();
      return { result, currentValue };
    case "C":
      del();
      return { result, currentValue };
    case "%":
      percent();
      return { result, currentValue };
    default:
      display(payload);
      return { result, currentValue };
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContex.Provider value={[state, dispatch]}>
      {children}
    </AppContex.Provider>
  );
};

export const UseAppContex = () => {
  return useContext(AppContex);
};
