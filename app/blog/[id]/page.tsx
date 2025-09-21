
export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>
}) {

   const { id } = await params;

  console.log("SERVER_SIDE99", process.env["SERVER_SIDE99"]);
  console.log("NEXT_PUBLIC_SERVER_SIDE99", process.env["NEXT_PUBLIC_SERVER_SIDE99"]);

  return (
    <div>
        <p>Hello from blog page - {id} </p>
        <p>Dyanmic Server Rendered page</p>
        <p>SERVER_SIDE99 - {process.env["SERVER_SIDE99"]}</p>
        <p>NEXT_PUBLIC_SERVER_SIDE99 - {process.env["NEXT_PUBLIC_SERVER_SIDE99"]}</p>

    </div>
  );
}