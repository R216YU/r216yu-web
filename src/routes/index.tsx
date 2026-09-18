import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-xl text-center">r216yu.xyz</h1>
      <p className="text-center">Building now...</p>
    </div>
  );
}
