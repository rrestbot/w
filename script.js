// You can paste full YouTube links or video IDs here
const videos = [
  "jfKfPfyJRdk",                                // Lofi Girl
  "https://youtu.be/DWcJFNfaw9c",               // Jazz Cafe
  "https://www.youtube.com/watch?v=5qap5aO4i9A",// Chillhop
  "gYj9BWBLR2Q",                                 // Your link
];

function extractVideoID(link) {
  if (link.includes("youtube.com") || link.includes("youtu.be")) {
    let url = new URL(link);
    return url.searchParams.get("v") || url.pathname.split("/").pop();
  }
  return link;
}

let current = 0;

function playNext() {
  current = (current + 1) % videos.length;
  const id = extractVideoID(videos[current]);
  const embedURL = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}`;
  document.getElementById("ytPlayer").src = embedURL;
}
