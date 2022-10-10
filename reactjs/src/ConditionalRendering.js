import PropTypes from "prop-types";

function ConditionalRendering() {
  let check = false;
  // if (check) {
  //   return (
  //     <div>
  //       <Component1 />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Component2 />
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     {check ? (
  //       <>
  //         <h1>Component Pertama</h1>
  //       </>
  //     ) : (
  //       <h1>Component Kedua</h1>
  //     )}
  //   </div>
  // );

  // return (
  //   <div>
  //     {check && (
  //       <>
  //         <h1>Halo guys</h1>
  //       </>
  //     )}
  //   </div>
  // );
}

function Component1() {
  return (
    <div>
      <h1>Component Pertama</h1>
    </div>
  );
}

function Component2() {
  return (
    <div>
      <h1>Component Kedua</h1>
    </div>
  );
}

export default ConditionalRendering;
