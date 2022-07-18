"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
console.log(path_1.default.join(__dirname, "../client/build"));
app.use("/api", router_1.default);
app.get("/*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../client/build", "index.html"));
});
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
