import logo from "../assets/images/icon.png";
import Container from "../components/UI/Container";
import NewReceiptButton from "../components/UI/NewReceiptButton";

export default function Homepage() {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-content items-center mt-36">
          <img src={logo} alt="Go-Dutch" width={300} height={300} />
          <NewReceiptButton title={"New Receipt"} location={"/image_upload"} />
        </div>
      </Container>
      <div className="bg-brand-background h-60"></div>
    </>
  );
}
