"use client";
import { useState } from "react";
import styles from "./messageFormSection.module.css";

interface IProps {
  f: { plh: string; type: string; isRequired: boolean };
  i: number;
  focused: number;
  setFocused: (i: number) => void;
}
export default function InputField(props: IProps) {
  const [inputValue, setInputValue] = useState("");
  const { f, focused, i, setFocused } = props;

  const isFocused = focused === i || inputValue.length > 0;
  return (
    <label className={styles.lbl} key={f.plh}>
      <div className={styles.lblWrapper}>
        <p
          className={`${styles.inputLabel} ${isFocused && styles.inputLabelFocused} ${
            f.isRequired && styles.inputFieldRequired
          }`}
        >
          {f.plh}
        </p>
      </div>
      <input
        className={styles.inputField}
        type={f.type}
        required={f.isRequired}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setFocused(i)}
        onBlur={() => setFocused(-1)}
      />
    </label>
  );
}
