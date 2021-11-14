export function fetchContent(element, src, cli_ip, cli_vendor_token) {
  const options = { headers: { cli_ip, cli_vendor_token } };
  fetch(src, options)
  .then(res => res.blob())
  .then(blob => {
    element.src = URL.createObjectURL(blob);
  });
}
