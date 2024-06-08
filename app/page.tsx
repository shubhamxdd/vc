import HomeDialog from "./HomeDialog";


export default async function Home() {
  return (
    <div>
      <h1 className="my-4 text-center text-6xl font-bold">Transcrib-er</h1>
      <div className="grid place-items-center">
        <div>
          <p className="my-5 font-semibold ">Open modal to view the app</p>
        </div>
        <HomeDialog />
      </div>
    </div>
  );
}
