function FloatingValue({ value, x, y }) {
  return (
    <div
      className="clicker__floating"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      +{value}
    </div>
  );
}

export default FloatingValue;
