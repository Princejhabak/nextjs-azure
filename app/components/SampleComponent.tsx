"use client"

const SampleComponent = () => {

  console.log("CLIENT_SIDE", process.env["CLIENT_SIDE"]);
  console.log("NEXT_PULBIC_CLIENT_SIDE", process.env["NEXT_PULBIC_CLIENT_SIDE"]);

  return (
    <div>
       <p>Client Rendered page</p>
        <p>CLIENT_SIDE - {process.env["CLIENT_SIDE"]}</p>
        <p>NEXT_PULBIC_CLIENT_SIDE - {process.env["NEXT_PULBIC_CLIENT_SIDE"]}</p>
    </div>
  );
}

export default SampleComponent;