import { Action, State } from "./types";
import { initialState } from "./constants";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "layer":
      switch (action.payload?.layer) {
        case 1: {
          return { ...initialState } as State;
        }
        case 2: {
          return {
            ...state,
            show: { ...state.show, 1: true, 2: true, 3: false, 4: false },
            refId: { ...state.refId, 2: action.payload.arrayOfRefId, 3: null, 4: null },
          } as State;
        }
        case 3: {
          return {
            ...state,
            show: { ...state.show, 1: true, 2: true, 3: true, 4: false },
            refId: { ...state.refId, 3: action.payload.arrayOfRefId, 4: null },
          } as State;
        }
        case 4: {
          return {
            ...state,
            show: { ...state.show, 1: true, 2: true, 3: true, 4: true },
            refId: { ...state.refId, 4: action.payload.arrayOfRefId },
          } as State;
        }
        default: {
          return state;
        }
      }

    case "setClickedLink": {
      return {
        ...state,
        clickedLink: action.payload?.clickedLink || null,
      };
    }
    default: {
      return state;
    }
  }
};
