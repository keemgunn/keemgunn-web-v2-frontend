export function fetchContent(element, uri, headers) {
  console.log(headers);
  fetch(uri, { headers })
  .then(res => res.blob())
  .then(blob => {
    element.src = URL.createObjectURL(blob);
  });
}
