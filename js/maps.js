export function initMap(containerId, { lat, lng, zoom, title }) {
  const map = new google.maps.Map(document.getElementById(containerId), {
    center: { lat, lng },
    zoom
  });
  new google.maps.Marker({
    position: { lat, lng },
    map,
    title
  });
}
