import Head from "next/head";

import { CarsView, FiltersView } from "$/views";

export default function Home() {
  return (
    <>
      <Head>
        <title> 🚗 Cars Finder</title>
      </Head>
      <main className="w-full flex flex-col justify-center items-center gap-4 p-5">
        <FiltersView />
        <CarsView />
      </main>
    </>
  );
}
