import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), 'public', 'output');

  try {
    const fileNames = fs.readdirSync(directoryPath);
    res.status(200).json({ fileNames });
  } catch (error) {
    console.error('Error reading directory:', error);
    res.status(500).json({ error: 'Failed to read directory' });
  }
}
