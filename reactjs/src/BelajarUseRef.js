import { useRef } from "react";
function BelajarUseRef() {
  const divColor = useRef(null);
  const warnaBg = ["blue", "red", "yellow", "green"];

  return (
    <>
      <div
        style={{ backgroundColor: "black", width: "100px", height: "100px" }}
        ref={divColor}
      ></div>
      <button
        onClick={() => {
          let min = 0;
          let max = warnaBg.length - 1;
          let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
          divColor.current.style.backgroundColor = warnaBg[randomIndex];
        }}
      >
        Ubah Warna
      </button>
    </>
  );
}

export default BelajarUseRef;
