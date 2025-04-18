# otd-utm-link-builder
Creates UTM links with UTM parameters for marketers to use for tracking inbound links.
This is used by marketers and analytists to organize and maintain their campaign UTMs.

# UTM Link Builder – Google Sheets Add-on

The UTM Link Builder is a lightweight, customizable Google Sheets add-on that helps marketers and campaign managers generate UTM-tagged URLs for tracking campaign performance across Google Analytics (GA4) and other platforms.

This tool supports:
- Real-time UTM link generation via `onEdit`
- Sidebar UI with templates and controls
- Spreadsheet formatting and setup automation
- Support for multiple sheets using dynamic header detection

---

## 🚀 Features

- ✅ Auto-build UTM links in real-time using `onEdit`
- ✅ Works across any sheet with compatible headers
- ✅ Sidebar UI with:
  - Predefined source/medium templates
  - Bulk rebuild and clear tools
  - Sheet creator for new campaigns
  - Future settings and link shortener integration
- ✅ Highlights and notes missing required fields
- ✅ Modular codebase using CLASP + GitHub

---

## 🧱 Sheet Structure

Each campaign row must include:

| Column | Field         | Required | Description                       |
|--------|---------------|----------|-----------------------------------|
| B      | Medium         | ✅       | The medium (e.g. `email`, `social`) |
| C      | Source         | ✅       | The source platform (e.g. `facebook`) |
| D      | Campaign Name  | ✅       | The name of the campaign          |
| E      | Ad Content     | ❌       | Optional for differentiating ads |
| F      | Keyword        | ❌       | Optional keyword targeting        |
| G      | URL            | ✅       | The destination URL               |
| H      | UTM Output     | —        | Auto-filled with the full UTM URL |
| I      | Notes          | —        | For internal use                  |

---

## 📥 Installation (Development Mode)

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/utm-builder.git
   cd utm-builder
Login to CLASP and link to your project:

bash
Copy
Edit
clasp login
clasp clone [YOUR_SCRIPT_ID]  # or clasp create --type sheets
Push the code:

bash
Copy
Edit
clasp push
Open the sheet and launch the sidebar via: Extensions → Add-ons → UTM Link Builder → Open

⚙️ Development Setup
Built using CLASP

Designed for editing with VS Code

Modular structure (main.gs, utmBuilder.gs, utils.gs, etc.)

📁 Folder Structure
utm-builder/
├── .clasp.json
├── appsscript.json
├── .gitignore
├── LICENSE
├── README.md
├── main.gs
├── utmBuilder.gs
├── sheetSetup.gs
├── utils.gs
├── sidebar.html
🧪 Coming Soon
Default campaign configuration

Link shortener integration

Export to CSV

Custom URL encoding rules

🛡 License
MIT License – see LICENSE for details.

📚 Documentation
See full usage instructions, screenshots, and examples here:
🔗 Documentation (coming soon)

💬 Feedback & Contributions
Pull requests, suggestions, and feedback are welcome.
Open an issue or fork the repo to contribute.