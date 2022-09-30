import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          width: "600px",
        }}
      >
        <h1>Create a Car</h1>
        {/* <CarForm /> */}
        <SearchForm />
      </div>
    </div>
  );
}
