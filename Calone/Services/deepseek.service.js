const axios = require("axios");
require("dotenv").config();

const analyzeResume = async (resumeText, jobDescription) => {
  // console.log(resumeText, jobDescription);
  try {
    const response = await axios.post(
      "https://api.deepseek.com/v1/chat/completions",
      {
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: process.env.PROMPT,
          },
          {
            role: "user",
            content: `Resume: ${resumeText}\n\nJob Description: ${jobDescription}`,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    throw new Error("Failed to analyze resume");
  }
};

module.exports = { analyzeResume };
