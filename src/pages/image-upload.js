import * as ROUTES from "../constants/routes";

import { useContext, useState } from "react";
import useInput from "../hooks/use-input";
import ImageUploadForm, {
  NoPreviewOutput,
  PreviewOutput,
} from "../components/ImageUpload/ImageUploadForm";

import classes from "./image-upload.module.css";
import { imageUploaderToApi } from "../services/backend";
import ReceiptContext from "../context/receipt-context";
import { ActionBar } from "../components/UI/ActionBar";
import Container from "../components/UI/Container";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function ImageUpload() {
  const ctx = useContext(ReceiptContext);

  const [loading, setLoading] = useState(false);

  const [imageUploaded, setImageUploaded] = useState(false);

  // Initialising empty array for items fetched from API
  const loadedItems = [];
  const finalOutput = {};

  // Image Uploading Process
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  // Validation States for Name Input
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const setImageHandler = (event) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file !== null) {
      setPreview(URL.createObjectURL(file));
    }

    setSelectedFile(file);
    setImageUploaded(false);
  };

  const imageUploader = async () => {
    setLoading(true);
    if (selectedFile !== null) {
      const data = await imageUploaderToApi(selectedFile);

      for (const key in data) {
        loadedItems.push({
          item: key,
          price: data[key],
        });
      }
      console.log(loadedItems);

      ctx.setItemsHandler(loadedItems);

      loadedItems.forEach((obj) => {
        finalOutput[obj.item] = { price: obj.price, people: [] };
      });

      ctx.setFinalOutputHandler(finalOutput);

      console.log(ctx.finalOutput);

      setImageUploaded(true);
    } else {
      console.log("Its empty");
    }

    setLoading(false);
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold pt-6 pb-8 text-brand-secondary">
        Image Upload
      </h1>
      <section>
        <form>
          <div
            className={
              nameInputHasError ? classes.invalid : classes.formcontrol
            }
          >
            <input
              type="text"
              id="name"
              placeholder="Receipt Name"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
            {nameInputHasError && (
              <p className={classes.error_text}>Name must not be empty</p>
            )}
          </div>
        </form>
        <div className="col-md-4 ">
          {preview ? <PreviewOutput preview={preview} /> : <NoPreviewOutput />}
        </div>
      </section>
      <ImageUploadForm setImageHandler={setImageHandler} />
      {!imageUploaded && !loading && (
        <button className={classes.button} onClick={imageUploader}>
          CONFIRM
        </button>
      )}
      {loading && <LoadingSpinner />}
      <ActionBar
        display={imageUploaded}
        nextPage={ROUTES.CONFIRM_RECEIPT}
        prevPage={ROUTES.HOMEPAGE}
      />
    </Container>
  );
}
