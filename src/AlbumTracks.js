import convertToHumanTime from './ConvertToHumanTime';

function createMarkup(data){
  return data.map(item => `
  <div class="music" data-track-preview="${item.preview_url}">
    <p class="music-number">${item.track_number}</p>
    <p class="music-title">${item.name}</p>
    <p class="music-duration">${convertToHumanTime(item.duration_ms)}</p>
  </div>`).join('');
}

export default function renderAlbumTracks(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
