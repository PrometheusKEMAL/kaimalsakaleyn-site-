const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'lib/mock-data/index.ts');
let content = fs.readFileSync(p, 'utf8');

// Replace fake info with undefined
content = content.replace(/translator:\s*['"].*?['"]/g, 'translator: undefined');
content = content.replace(/verification:\s*['"].*?['"]/g, 'verification: undefined');
content = content.replace(/publisher:\s*['"].*?['"]/g, 'publisher: undefined');
content = content.replace(/isbn:\s*['"].*?['"]/g, 'isbn: undefined');

// Remove generic AI text
content = content.replace(/summary:\s*['"](.*?) eseri, .*? temsil eder\.['"]/g, 'summary: "$1 eseri."');

// Add verificationStatus: 'needs_review' to all mock books initially
// Wait, the user wants 'editorial_approved' to show the badge. For now I'll just leave it undefined and modify the TS types.

fs.writeFileSync(p, content);
console.log("Mock data cleaned");
