export async function getInfo() {
  try {
    console.log("getInfo: try");
    const response = await fetch("/api/v1/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("getInfo: response:", response.json());
    return await response.json();
  } catch (err) {
    console.log("Error:", err);
    return err;
  }
}
