function createFormattedUTMSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheetName = 'UTM Tags';
  let counter = 1;

  // Ensure unique sheet name
  while (ss.getSheetByName(sheetName)) {
    counter++;
    sheetName = `UTM Tags ${counter}`;
  }

  const sheet = ss.insertSheet(sheetName);

  // Set headers
  const headers = [
    'UTM Name', 'Medium*', 'Source*', 'Name*',
    'Ad Content', 'Keyword', 'URL', 'Campaign Tagged URL', 'Notes'
  ];
  sheet.getRange('A1:I1').setValues([headers]);

  // Format header backgrounds
  sheet.getRange('A1:G1').setBackground('#b7e1cd'); // Light green 3
  sheet.getRange('H1').setBackground('#aecbfa');    // Light cornflower blue 3 (only H1)
  sheet.getRange('I1').setBackground('#fbd19a');    // Light orange 3

  // Header styling
  sheet.getRange('A1:I1')
    .setFontWeight('bold')
    .setFontSize(12)
    .setVerticalAlignment('middle');
  sheet.setRowHeight(1, 40);

  // Default row height for other rows
  for (let i = 2; i <= 100; i++) {
    sheet.setRowHeight(i, 25);
  }

  // Resize columns for readability
  const widths = [120, 100, 100, 100, 100, 100, 250, 300, 150];
  widths.forEach((w, i) => {
    sheet.setColumnWidth(i + 1, w);
  });

  // Freeze header
  sheet.setFrozenRows(1);

  // Add borders + vertical alignment
    sheet.getRange('A:I').setVerticalAlignment('middle');
}

