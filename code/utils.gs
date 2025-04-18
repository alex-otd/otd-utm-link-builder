function encode(param) {
  return param ? param.trim().replace(/\s/g, '%20').toLowerCase() : '';
}

function buildUTMUrl(baseUrl, medium, source, campaign, keyword, content) {
  const sep = baseUrl.includes('?') ? '&' : '?';

  let result = baseUrl + sep +
    'utm_source=' + encode(source) +
    '&utm_medium=' + encode(medium) +
    '&utm_campaign=' + encode(campaign);

  if (keyword) result += '&utm_term=' + encode(keyword);
  if (content) result += '&utm_content=' + encode(content);

  return result;
}
