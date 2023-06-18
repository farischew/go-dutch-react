import "./LoadingSpinner.css";

export default function LoadingSpinner(params) {
  return (
    <div className="pt-4">
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    </div>
  );
}
