const BASE = "http://127.0.0.1:5000";

async function postReport(picture) {
  console.log("SENDING DATA");
  console.log(picture);
  const request = {
    Picture: picture,
  };

  await fetch(`${BASE}/picture`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export { postReport };
