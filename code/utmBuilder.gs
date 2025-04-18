function onEdit(event) {
  const sheet = event.range.getSheet();
  const row = event.range.getRowIndex();
  const col = event.range.getColumnIndex();

  // Only trigger for columns B–G
  if (col < 2 || col > 7) return;

  // Expected headers in columns B–G
  const expectedHeaders = ['Medium*', 'Source*', 'Name*', 'Ad Content', 'Keyword', 'URL'];
  const actualHeaders = sheet.getRange(1, 2, 1, 6).getValues()[0];

  // Only process if headers match
  const isValidSheet = expectedHeaders.every((header, i) => actualHeaders[i] === header);
  if (!isValidSheet) return;

  // Get values from edited row
  const data = sheet.getRange(row, 2, 1, 6).getValues()[0];
  const [medium, source, campaign, content, keyword, url] = data;

  const requiredFields = { Medium: medium, Source: source, Campaign: campaign, URL: url };
  const missingFields = Object.entries(requiredFields)
    .filter(([_, value]) => !value)
    .map(([name]) => name);

  const outputCell = sheet.getRange(row, 8); // Column H
  const fullRowRange = sheet.getRange(row, 2, 1, 7); // Columns B–H

  if (missingFields.length > 0) {
    // Format red and show note if something is missing
    outputCell.setValue("Missing required fields.");
    outputCell.setNote("Missing: " + missingFields.join(", "));
    fullRowRange.setBackground("#f8d7da"); // light red
  } else {
    // Build UTM and reset formatting
    const finalUrl = buildUTMUrl(url, medium, source, campaign, keyword, content);
    outputCell.setValue(finalUrl);
    outputCell.clearNote();
    fullRowRange.setBackground(null); // remove red background
  }
}
