import Reset from "@/components/reset";
import Title from "@/components/title";

export default function Home() {
  return (
    <main>
      <div>
        <Title />
        <p>Counter: 0</p>
        <Reset />
        <div>
          <button className="btn">+</button>
          <button className="btn">-</button>
        </div>
      </div>
    </main>
  );
}
