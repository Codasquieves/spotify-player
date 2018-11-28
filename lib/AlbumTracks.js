'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbumTracks;

var _ConvertToHumanTime = require('./ConvertToHumanTime');

var _ConvertToHumanTime2 = _interopRequireDefault(_ConvertToHumanTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMarkup(data) {
  return data.map(function (item) {
    return '\n  <div class="music" data-track-preview="' + item.preview_url + '">\n    <p class="music-number">' + item.track_number + '</p>\n    <p class="music-title">' + item.name + '</p>\n    <p class="music-duration">' + (0, _ConvertToHumanTime2.default)(item.duration_ms) + '</p>\n  </div>';
  }).join('');
}

function renderAlbumTracks(data, element) {
  var markup = createMarkup(data);
  element.innerHTML = markup;
}