export function fetchContent(element, uri, headers) {
  try {
    fetch(uri, { headers })
    .then(res => res.blob())
    .then(blob => {
      element.src = URL.createObjectURL(blob);
    });
  }
  catch (err) {
    console.error('!error!', err);
    console.log('params:', {element, uri, headers});
  }
}
