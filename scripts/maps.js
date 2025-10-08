export function initMap(elementId, { lat, lng, zoom, title }) {
  const map = new google.maps.Map(document.getElementById(elementId), {
    center: { lat, lng },
    zoom
  });
  new google.maps.Marker({
    position: { lat, lng },
    map,
    title
  });
}
