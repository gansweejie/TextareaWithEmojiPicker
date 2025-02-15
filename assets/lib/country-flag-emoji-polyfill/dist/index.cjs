"use strict";
const s =
  '"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif';
function r() {
  const o = document.createElement("canvas");
  o.width = o.height = 1;
  const t = o.getContext("2d", { willReadFrequently: !0 });
  return (
    (t.textBaseline = "top"), (t.font = `100px ${s}`), t.scale(0.01, 0.01), t
  );
}
function i(o, t, e) {
  return (
    o.clearRect(0, 0, 100, 100),
    (o.fillStyle = e),
    o.fillText(t, 0, 0),
    o.getImageData(0, 0, 1, 1).data.join(",")
  );
}
function supportsEmoji(o) {
  const t = r(),
    e = i(t, o, "#fff"),
    n = i(t, o, "#000");
  return n === e && !n.startsWith("0,0,0,");
}
function polyfillCountryFlagEmojis(
  o = "Twemoji Country Flags",
  t = "https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2"
) {
  if (
    typeof window < "u" &&
    supportsEmoji("\u{1F60A}") &&
    !supportsEmoji("\u{1F1E8}\u{1F1ED}")
  ) {
    const e = document.createElement("style");
    return (
      (e.textContent = `@font-face {
      font-family: "${o}";
      unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067,
        U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
      src: url('${t}') format('woff2');
      font-display: swap;
    }`),
      document.head.appendChild(e),
      !0
    );
  }
  return !1;
}
exports.polyfillCountryFlagEmojis = polyfillCountryFlagEmojis;
