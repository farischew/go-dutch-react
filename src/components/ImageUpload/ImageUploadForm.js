import classes from "./ImageUploadForm.module.css";

const ImageUploadForm = (props) => {
  return (
    <form className={classes.image_form}>
      <input type="file" onChange={props.setImageHandler} />
    </form>
  );
};

export default ImageUploadForm;

export const PreviewOutput = (props) => {
  return (
    <div className={classes.preview}>
      <img src={props.preview} width={244} height={344} alt="" />
    </div>
  );
};

export const NoPreviewOutput = () => {
  return (
    <div className={classes.no_preview}>
      <p>No Preview</p>
    </div>
  );
};
