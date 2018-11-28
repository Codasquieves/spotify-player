'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spotifyWrapperIvan = require('spotify-wrapper-ivan');

var _spotifyWrapperIvan2 = _interopRequireDefault(_spotifyWrapperIvan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spotify = new _spotifyWrapperIvan2.default({
  token: 'BQBZ5IBDO1SRWQGYfXVvl-nZdUEKvT6tygXGZAAaH5TTtL-3vygx2MdgCZTXg2OXxCmWaQ0FfKCjOTdV4AZlvuJPA4VTRIF31npggq_OVCWWsQ36InXolgwr1phTG2qewx8xhXKCOvARWrCo'
});

exports.default = spotify;
