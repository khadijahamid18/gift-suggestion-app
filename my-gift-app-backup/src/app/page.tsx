import QuestionCard from "./components/QuestionCard";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="font-bold mb-4 text-blue-500">Gift Suggestion Quiz</h1>
      <QuestionCard question="What's the occasion?" />
      <h1 className="text-3xl font-bold text-red-500">Hello Tailwind!</h1>;
    </main>
  );
}
