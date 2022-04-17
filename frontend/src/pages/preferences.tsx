import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { useUserContext } from "@/context/UserContext";
import Navbar from "@/components/Navbar";

import styles from "./preferences.module.scss";
import { useState } from "react";
import MapComponent from "@/components/Map";
import useAuth from "@/styles/utils/withAuth";

interface PreferencesProps {}

const Preferences: NextPage<PreferencesProps> = ({}) => {
  const { user } = useUserContext();
  const router = useRouter();
  const [inputValues, setInputValues] = useState([""]);

  return (
    <>
      <Navbar />
      <div className={styles["preferences"]}>
        <h3>what do you like to order?</h3>
        <button
          className={styles["add-more"]}
          onClick={() => {
            setInputValues((current) => {
              const newArray = [...current];
              newArray.push("");
              return newArray;
            });
          }}
        >
          add more
        </button>
        {inputValues.map((input, index) => {
          return (
            <div key={`${index}`} className={styles["order-div"]}>
              <input
                key={`input-${index}`}
                value={input}
                onChange={(e) => {
                  setInputValues((current) => {
                    const newArray = [...current];
                    newArray[index] = e.target.value;
                    return newArray;
                  });
                }}
                type="text"
                className={styles["order-input"]}
                autoFocus={index == inputValues.length - 1}
              />
              <button
                key={`button-${index}`}
                className={styles["close"]}
                onClick={() => {
                  setInputValues((current) => {
                    const newArray = [...current];
                    return newArray.filter((_, i) => i != index);
                  });
                }}
              >
                <AiFillCloseCircle color="ac8a72" />
              </button>
            </div>
          );
        })}
        <h3>where would you like to pick up your order?</h3>
        {/* <div key={`${index}`} className={styles["order-div"]}>
              <input
                key={`input-${index}`}
                value={input}
                onChange={(e) => {
                  setInputValues((current) => {
                    const newArray = [...current];
                    newArray[index] = e.target.value;
                    return newArray;
                  });
                }}
                type="text"
                className={styles["order-input"]}
                autoFocus={index == inputValues.length - 1}
              />
              <button
                key={`button-${index}`}
                className={styles["close"]}
                onClick={() => {
                  setInputValues((current) => {
                    const newArray = [...current];
                    return newArray.filter((_, i) => i != index);
                  });
                }}
              >
                <AiFillCloseCircle color="ac8a72" />
              </button>
            </div> */}
        <div className={styles["order-div"]}>
          <input type="text" className={styles["order-input"]} />
          <button
            className={styles["close"]}
            onClick={() => {
              console.log("hi");
            }}
          >
            <AiOutlineSearch color="603d3d" />
          </button>
        </div>

        <MapComponent />
        <button className={styles["save-preferences"]}>save preferences</button>
      </div>
    </>
  );
};

export default Preferences;
