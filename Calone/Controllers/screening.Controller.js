const { analyzeResume } = require("../Services/deepseek.service");
const { parsePDF } = require("../Utils/pdfParser");
const processResume = async (req, res) => {
  try {
    if (!req.file || !req.body.jobDescription) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resumeText = await parsePDF(req.file.buffer);
    const analysisResult = await analyzeResume(
      resumeText,
      req.body.jobDescription
    );

    const scoreMatch = analysisResult.match(/Score: (\d+%)/);
    const score = scoreMatch ? scoreMatch[1] : "N/A";

    res.json({
      success: true,
      score: score,
      report: analysisResult,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { processResume };
