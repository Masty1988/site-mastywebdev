import Header from "../src/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-[80vh] flex-col items-center justify-center p-24">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          Masty Web Dev
        </h1>
        <p className="text-xl text-gray-500 animate-pulse">
          🚧 Site en construction...
        </p>
      </main>
    </>
  );
}