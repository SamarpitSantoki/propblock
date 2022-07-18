import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './router';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client/build")));
console.log(path.join(__dirname, "../client/build"));
app.use("/api", routes);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});



app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));


