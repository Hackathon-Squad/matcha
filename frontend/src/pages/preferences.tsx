import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { useUserContext } from "@/context/UserContext";
import Navbar from "@/components/Navbar";

import styles from "./preferences.module.scss";
import { useState } from "react";
import MapComponent from "@/components/Map";

interface PreferencesProps {}

const Preferences: NextPage<PreferencesProps> = ({}) => {
  const { user } = useUserContext();
  const router = useRouter();
  const [inputValues, setInputValues] = useState<string[]>([""]);

  const [location, setLocation] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [messenger, setMessenger] = useState<string>("");
  const [discord, setDiscord] = useState<string>("");
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
        <div className={styles["order-div"]}>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className={styles["order-input"]}
          />
          <button
            className={styles["close"]}
            onClick={() => {
              console.log("hi");
            }}
          >
            <AiOutlineSearch color="603d3d" />
          </button>
        </div>
        <h3>how can people contact you?</h3>
        <div className={styles["social-media"]}>
          <input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            type="text"
            placeholder="Instagram"
            className={styles["social-media-link"]}
          />
          <input
            value={messenger}
            onChange={(e) => setMessenger(e.target.value)}
            type="text"
            placeholder="Messenger"
            className={styles["social-media-link"]}
          />
          <input
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
            type="text"
            placeholder="Discord Username"
            className={styles["social-media-link"]}
          />
        </div>
        {/* on click send post request to backend */}
        <button
          onClick={() => {
            const formData = {
              drinks: inputValues,
              location,
              instagram,
              messenger,
              discord,
            };
            console.log(formData);
          }}
          className={styles["save-preferences"]}
        >
          save preferences
        </button>
      </div>
    </>
  );
};

export default Preferences;
