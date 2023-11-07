// pages/api/download-pdf.js
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'yamCV.pdf'); // Adjust the path to your PDF file
  const fileStream = fs.createReadStream(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="yamCV.pdf"');

  fileStream.pipe(res);
}

