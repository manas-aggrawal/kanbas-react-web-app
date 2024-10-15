import "./Classes.css";
export default function Classes() {
  const blue_color = "blue";
  const yellow_color = "yellow";
  //   const red_color = "red";
  const dangerous = true;
  return (
    <div>
      <h2>Classes</h2>
      <div className={`wd-bg-${blue_color} wd-fg-black wd-padding-10px`}>
        Dynamic Blue background
      </div>
      <div className={`wd-bg-${yellow_color} wd-fg-black wd-padding-10px`}>
        Dynamic Yellow background{" "}
      </div>
      <div
        className={`${dangerous ? "wd-bg-red" : "wd-bg-green"}
        wd-fg-black wd-padding-10px`}
      >
        Red background{" "}
      </div>
      <hr />
    </div>
  );
}
