import * as ROUTES from "../constants/routes";

import { useState } from "react";
import useInput from "../hooks/use-input";
import { addPeopleToApi } from "../services/backend";

import classes from "./name-input.module.css";
import NameList from "../components/NameInput/NameList";
import { ActionBar } from "../components/UI/ActionBar";
import Container from "../components/UI/Container";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function NameInput() {
  const [loading, setLoading] = useState(false);

  const [nameSaved, setNameSaved] = useState(false);

  // Name List State
  const [nameList, setNameList] = useState([]);

  // Validation States for Name Input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // Name Input Form Functions
  function addName(event) {
    event.preventDefault();
    if (enteredName && enteredNameIsValid) {
      setNameList([...nameList, enteredName]);
      resetNameInput();
    }

    setNameSaved(false);
  }

  const addNameHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    await addPeopleToApi(nameList);

    setNameSaved(true);
    setLoading(false);
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold pt-6 pb-8 text-brand-secondary">
        Add your Friends
      </h1>
      <div>
        <div className={classes.namefield}>
          <div className={classes.namelist}>
            <NameList nameList={nameList} />
          </div>
          <div className={classes.nameinput}>
            <form>
              <div className={classes.formcontrol}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={enteredName}
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                />
                <button
                  onClick={addName}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold bg-brand-tertiary text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
              </div>
            </form>
            {!nameSaved && !loading && (
              <button className={classes.button} onClick={addNameHandler}>
                Save
              </button>
            )}
            {loading && <LoadingSpinner />}
          </div>
        </div>
      </div>
      <ActionBar
        display={nameSaved}
        nextPage={ROUTES.RECEIPT_DAHSBOARD}
        prevPage={ROUTES.IMAGE_UPLOAD}
      />
    </Container>
  );
}
