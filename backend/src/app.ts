import * as dotenv from "dotenv";
dotenv.config();

import path from "path";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";
import { databaseConnection } from "./config/database";
import { shouldCompress } from "./config/compression";
import { errorHandler } from "./middlewares/errorHandler";

import brochureDownloadRoutes from "./routes/brochureDownloadRoutes";
import careersRoutes from "./routes/careersRoutes";
import careerSubmissionRoutes from "./routes/careerSubmissionRoutes";
import caseStudyDownloadRoutes from "./routes/caseStudyDownloadRoutes";
import caseStudyRoutes from "./routes/caseStudyRoutes";
import contactFormRoutes from "./routes/contactFormRoutes";
import enquireFormRoutes from "./routes/enquireFormRoutes";
import contactRoutes from "./routes/contactRoutes";
import insightDownloadRoutes from "./routes/insightDownloadRoutes";
import insightsRoutes from "./routes/insightsRoutes";
import newsletterSubRoutes from "./routes/newsletterSubRoutes";
import superAdminRoutes from "./routes/superAdminRoutes";
import testimonialsRoutes from "./routes/testimonialsRoutes";
import uploadRoute from "./routes/uploadRoutes";
import uploadFtpRoutes from "./routes/uploadFtpRoutes";

const app = express();

app.use(express.json({ limit: "100mb" })); // Increase JSON body limit
app.use(express.urlencoded({ limit: "100mb", extended: true })); // For form data
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(compression({ filter: shouldCompress, level: 6 }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://hype-labs.vercel.app",
      "https://admin-hype-labs.vercel.app/",
      "https://lrc-admin-seven.vercel.app",
      "https://lrc-zeta.vercel.app",
      "https://lr-consultants.com",
      "https://www.lr-consultants.com",
    ],
    exposedHeaders: ["Content-Disposition"],
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

app.use(uploadRoute);
app.use(uploadFtpRoutes);
app.use("/brochure-download", brochureDownloadRoutes);
app.use("/careers", careersRoutes);
app.use("/careers-submission", careerSubmissionRoutes);
app.use("/case-study-download", caseStudyDownloadRoutes);
app.use("/case-studies", caseStudyRoutes);
app.use("/contact-form", contactFormRoutes);
app.use("/enquire-form", enquireFormRoutes);
app.use("/api/contact", contactRoutes);
app.use("/insights-download", insightDownloadRoutes);
app.use("/insights", insightsRoutes);
app.use("/newsletter-subscribers", newsletterSubRoutes);
app.use("/super-admin", superAdminRoutes);
app.use("/testimonials", testimonialsRoutes);
app.use("/super-admin", superAdminRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

const startServer = async () => {
  try {
    await databaseConnection();
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Server Listening @ ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
