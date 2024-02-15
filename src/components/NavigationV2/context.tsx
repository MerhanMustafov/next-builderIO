import { BuilderContent } from "@builder.io/sdk";
import React from "react";

interface IRef {
  ref: {
    "@type": "@builder.io/core:Reference";
    model: "nav-level-1";
    id: "f5f9fd7d2db145519f94d35468830d0d";
  };
}

interface INavData {
  1: {
    all: BuilderContent[] | null;
    refIds: string[] | null | undefined;
  };
  2: {
    all: BuilderContent[] | null;
    refIds: string[] | null | undefined;
  };
  3: {
    all: BuilderContent[] | null;
    refIds: string[] | null | undefined;
  };
}

interface IProvider {
  children: React.ReactNode;
}

interface IContext {
  active: string | null;
  navData: INavData;
  handleActiveNavClick: (clickedLabel: string | null) => void;
  handleRefsExtraction: (nestedLinks: IRef[] | null, layer: 1 | 2 | 3) => void;
  setNavData: (navData: INavData) => void;
  closeNavigationDrawer: () => void;
}

interface IState {
  active: string | null;
  navData: INavData;
  reset: INavData;
}

interface IAction {
  type: "active" | "layer" | "setAfterRequest" | "reset";
  payload: {
    active?: string | null;
    layer?: number;
    arrayOfRefId?: string[] | [];
    navData?: INavData;
  };
}

const initialNavData: INavData = {
  1: {
    all: null,
    refIds: null,
  },
  2: {
    all: null,
    refIds: null,
  },
  3: {
    all: null,
    refIds: null,
  },
};

const NavContext = React.createContext<IContext>({
  active: null,
  navData: initialNavData,
  handleActiveNavClick: () => {},
  handleRefsExtraction: () => {},
  setNavData: () => {},
  closeNavigationDrawer: () => {},
});

const initialState: IState = {
  active: null,
  navData: initialNavData,
  reset: initialNavData,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "layer": {
      switch (action.payload?.layer) {
        case 1: {
          return {
            ...state,
            navData: {
              ...state.navData,
              1: { ...state.navData[1], refIds: action.payload.arrayOfRefId },
              2: { ...state.navData[2], refIds: null },
              3: { ...state.navData[3], refIds: null },
            },
          } as IState;
        }
        case 2: {
          return {
            ...state,
            navData: {
              ...state.navData,
              2: { ...state.navData[2], refIds: action.payload.arrayOfRefId },
              3: { ...state.navData[3], refIds: null },
            },
          } as IState;
        }
        case 3: {
          return {
            ...state,
            navData: { ...state.navData, 3: { ...state.navData[3], refIds: action.payload.arrayOfRefId } },
          } as IState;
        }

        default: {
          return state;
        }
      }
    }
    case "setAfterRequest": {
      return {
        ...state,
        active: null,
        navData: { ...action.payload.navData },
        reset: { ...action.payload.navData },
      } as IState;
    }
    case "reset": {
      return { ...state, navData: { ...state.reset } } as IState;
    }
    case "active": {
      return { ...state, active: action.payload.active } as IState;
    }
    default:
      return state;
  }
};

export const NavContextProvider: React.FC<IProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleActiveNavClick = (clickedLabel: string | null) => {
    dispatch({ type: "active", payload: { active: clickedLabel } });
  };

  const handleRefsExtraction = (nestedLinks: IRef[] | null, layer: 1 | 2 | 3) => {
    const extractedArrayOfRefIds = nestedLinks
      ? nestedLinks.reduce((acc, curr: IRef) => {
          return [...acc, curr.ref.id];
        }, [] as string[])
      : [];

    dispatch({ type: "layer", payload: { layer, arrayOfRefId: extractedArrayOfRefIds } });
  };

  const setNavData = (navData: INavData) => {
    dispatch({ type: "setAfterRequest", payload: { navData } });
  };

  const closeNavigationDrawer = () => {
    dispatch({ type: "reset", payload: {} });
  };

  const value: IContext = React.useMemo(
    () => ({
      active: state.active,
      navData: state.navData,
      handleActiveNavClick,
      handleRefsExtraction,
      setNavData,
      closeNavigationDrawer,
    }),
    [state.active, state.navData]
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNavContext = () => {
  const context = React.useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
};
