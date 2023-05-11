"use client"
import Button from "./components/Button";
import MediaCard from "./components/MediaCard";

export default function Home() {
  const handler =() => {}
  return (
    <main className="max-w-sm mx-auto bg-gray-100 min-h-screen">
      <MediaCard
        title="カードタイトル"
        description="ここにテキストが入るここにテキストが入る"
        buttonText="クリック"
        onButtonClick={handler}
      />
    </main>
  );
}
