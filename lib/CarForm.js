export default function CarForm() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    //convert form data to object
    const formData = Object.fromEntries(form.entries());
    console.log(formData);

    const res = await fetch('/api/cars', {
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json",},
      method: "POST",
    });
    // .then((res => res.data.json()))
    const result = await res.json();
    console.log(result);
  };

  return (
    <div style={{ height: "100vh" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label>Brand</label>
        <input type="text" name="make" />
        <label>Model</label>
        <input type="text" name="model" />
        <label>Image</label>
        <input type="text" name="image" />
        <label>Description</label>
        <textarea name="description" id="" cols="30" rows="10" />

        <button type="submit">Create Car</button>
      </form>
    </div>
  );
}
