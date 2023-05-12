import Button from "./components/Button";
import CardList from "./components/CardList";
import FormArea from "./components/FormArea";
import MediaCard from "./components/MediaCard";

export default function Home() {
  return (
    <main className="max-w-sm mx-auto bg-gray-100 min-h-screen">
      <FormArea />
      {/* @ts-expect-error Async Server Component */}
      <CardList />
    </main>
  );
}
