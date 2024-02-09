"use client";
import { BuilderContent } from "@builder.io/sdk";
import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./constants";
import SectionOfLinks from "./SectionOfLinks";
import styles from "./navigation.module.css";

interface LinkProps {
  l1: BuilderContent[];
  l2: BuilderContent[];
  l3: BuilderContent[];
  l4: BuilderContent[];
  closeNavigationDrawer: () => void;
}

interface RefLinkData {
  refLink: {
    id: string;
    "@type": string;
    model: string;
  };
}

export default function Links(props: LinkProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { l1, l2, l3, l4, closeNavigationDrawer } = props;
  const links = [l1, l2, l3, l4];

  const handleRefsExtraction = (nestedLinks: RefLinkData[] | undefined, layer: 2 | 3 | 4) => {
    const extractedArrayOfRefIds = nestedLinks
      ? nestedLinks.reduce((acc, curr: RefLinkData) => {
          return [...acc, curr.refLink.id];
        }, [] as string[])
      : [];

    dispatch({ type: "layer", payload: { layer, arrayOfRefId: extractedArrayOfRefIds } });
  };

  const handleClickedLink = (clickedLink: string) => {
    dispatch({ type: "setClickedLink", payload: { clickedLink } });
  };

  const handleResetClickedLink = () => {
    dispatch({ type: "setClickedLink", payload: { clickedLink: null } });
  };

  return (
    <div className={styles.navLinks}>
      {links.map((l, i) => (
        <SectionOfLinks
          key={Math.random() * 10000}
          clickedLink={state.clickedLink}
          links={l}
          layer={(i + 1) as 1 | 2 | 3 | 4}
          show={state.show[(i + 1) as 1 | 2 | 3 | 4]}
          refIds={state.refId && state.refId[(i + 1) as 2 | 3 | 4]}
          handleRefsExtraction={handleRefsExtraction}
          closeNavigationDrawer={closeNavigationDrawer}
          handleClickedLink={handleClickedLink}
          handleResetClickedLink={handleResetClickedLink}
        />
      ))}
    </div>
  );
}
