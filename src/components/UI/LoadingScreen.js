import "./LoadingScreen.css";

export default function LoadingScreen(params) {
  return (
    <div className="flex flex-col justify-center w-screen h-screen align-middle items-center">
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
      <div>
        <h1 className="pt-2 font-light">Loading...</h1>
      </div>
    </div>
  );
}
