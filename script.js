const { google } = require('googleapis');
const drive = google.drive('v3');

// Upload file to Google Drive
async function uploadFile(auth, filePath) {
    const driveService = google.drive({ version: 'v3', auth });
    const fileMetadata = {
        name: '10th-grade-marksheet.pdf',
        parents: ['your-google-drive-folder-id'], // Optional: if you want to upload to a specific folder
    };
    const media = {
        mimeType: 'application/pdf',
        body: fs.createReadStream(filePath),
    };
    const response = await driveService.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id',
    });
    console.log(`File uploaded with ID: ${response.data.id}`);
}
