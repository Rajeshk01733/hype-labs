import express, { Request, Response } from "express";
import multer from "multer";
import { Client } from "basic-ftp";
import asyncHandler from "express-async-handler";
import fs from "fs";
import os from "os";

const router = express.Router();

// Use multer to store files temporarily on disk
const upload = multer({ dest: os.tmpdir() }); // temporary folder

const FTP_CONFIG = {
  host: "lrc-backend.vual.in",
  user: "connectia_lrc_upload",
  password: "Q8S#L0UUt",
  secure: false,
  port: 21,
  passive: true,
  keepAlive: 30000,
};

router.post(
  "/upload-ftp",
  upload.single("file"),
  asyncHandler(async (req: Request, res: Response) => {
    if (!req.file) {
      res.status(400).json({ success: false, message: "No file uploaded" });
      return;
    }

    const client = new Client();
    const localPath = req.file.path;
    const remoteFolder = "/uploads";
    const remoteFileName = req.file.originalname;

    try {
      await client.access(FTP_CONFIG);
      await client.ensureDir(remoteFolder);

      // List files to check if name already exists
      const files = await client.list(remoteFolder);
      const fileExists = files.some((f) => f.name === remoteFileName);

      if (fileExists) {
        res.status(409).json({
          success: false,
          message:
            "File with the same name already exists. Please rename and try again.",
        });
        return;
      }

      // Upload if file name is unique
      await client.uploadFrom(localPath, `${remoteFolder}/${remoteFileName}`);

      res.status(200).json({
        success: true,
        message: "File uploaded via FTP successfully",
        remotePath: `${remoteFolder}/${remoteFileName}`,
        size: req.file.size,
      });
    } catch (err: any) {
      console.error("FTP upload error:", err);
      res.status(500).json({
        success: false,
        message: "FTP upload failed",
        error: err.message,
      });
    } finally {
      client.close();
      fs.unlink(localPath, () => {});
    }
  })
);

export default router;
