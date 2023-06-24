import { ActionBar } from "../components/UI/ActionBar";
import Container from "../components/UI/Container";
import * as ROUTES from "../constants/routes";

export default function ConfirmReceipt() {
  return (
    <Container>
      <ActionBar
        // display={imageUploaded}
        nextPage={ROUTES.NAME_INPUTS}
        prevPage={ROUTES.IMAGE_UPLOAD}
      />
    </Container>
  );
}
