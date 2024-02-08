export type Show = {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
};
export type RefIds = {
  1: null | string[];
  2: null | string[];
  3: null | string[];
  4: null | string[];
};

type ActionUnion = "layer" | "setClickedLink";
type Payload = {
  layer?: 1 | 2 | 3 | 4;
  arrayOfRefId?: string[] | [];
  clickedLink?: string | null;
};

export type State = {
  show: Show;
  refId: RefIds;
  clickedLink: string | null;
};
export type Action = { type: ActionUnion; payload?: Payload };
