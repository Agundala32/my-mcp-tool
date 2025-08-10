import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ status: "MCP Server is running!" });
});

app.post("/generate", (req, res) => {
  const { topic, tone } = req.body;
  if (!topic) {
    return res.status(400).json({ error: "Topic is required" });
  }

  const style = tone || "friendly";
  const post = `🚀 Here's a ${style} social media post about "${topic}":\n` +
               `✨ ${topic} is changing the game! Let's embrace it and share the love. 💡🔥 #${topic.replace(/\s+/g, '')}`;

  res.json({ post });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ MCP server running on port ${PORT}`);
});
