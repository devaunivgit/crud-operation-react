let url = "";

export function postData(postData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  };
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      return { postId: data.id };
    });
}

export function getAll() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
export function getUniqueOne(id) {
  fetch(url + "/" + id)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

