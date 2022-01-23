export const onEnter = (event, callback) => {
  if (event.key === "Enter") callback(event);
};

export function getJsonFromUrl(url) {
  var question = url.indexOf("?");
  var hash = url.indexOf("#");
  if (hash === -1 && question === -1) return {};
  if (hash === -1) hash = url.length;
  var query = question === -1 || hash === question + 1 ? url.substring(hash) :
    url.substring(question + 1, hash);
  var result = {};
  query.split("&").forEach(function (part) {
    if (!part) return;
    part = part.split("+").join(" "); // replace every + with space, regexp-free version
    var eq = part.indexOf("=");
    var key = eq > -1 ? part.substr(0, eq) : part;
    var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
    var from = key.indexOf("[");
    if (from === -1) result[decodeURIComponent(key)] = val;
    else {
      var to = key.indexOf("]", from);
      var index = decodeURIComponent(key.substring(from + 1, to));
      key = decodeURIComponent(key.substring(0, from));
      if (!result[key]) result[key] = [];
      if (!index) result[key].push(val);
      else result[key][index] = val;
    }
  });
  return result;
}