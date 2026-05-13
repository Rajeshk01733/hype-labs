import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(__dirname, "../uploads");

// Ensure upload folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderPath = (req.query.folder as string) || "uploads";
    const finalPath = path.join(__dirname, `../${folderPath}`);
    fs.mkdirSync(finalPath, { recursive: true });
    cb(null, finalPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const baseName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${baseName}${ext}`);
  },
});

// 50 MB file size limit
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
});

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

const router = express.Router();

router.post(
  "/upload",
  upload.single("file"),
  async (req: MulterRequest, res: Response): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ success: false, message: "No file uploaded" });
        return;
      }

      const folderPath = (req.query.folder as string) || "uploads";

      res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        filePath: `${folderPath}/${req.file.filename}`,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size,
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

export default router;
