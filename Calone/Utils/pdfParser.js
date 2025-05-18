const pdf = require("pdf-parse");

const parsePDF = async (buffer) => {
  try {
    const data = await pdf(buffer);
    return data.text;
  } catch (error) {
    throw new Error("Failed to parse PDF");
  }
};

module.exports = { parsePDF };
