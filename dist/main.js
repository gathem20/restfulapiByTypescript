"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./router/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, compression_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
const Mongo_url = mongoose_1.default.connect("mongodb://localhost:27017/users");
mongoose_1.default.Promise = Promise;
Mongo_url.then(() => {
    console.log("db is connected");
}).catch((err) => {
    console.log("faield connection");
});
mongoose_1.default.connection.on("error", (error) => console.log(error));
app.use("/", index_1.default);
const port = 3000;
server.listen(port, () => {
    console.log(`server is connected on port ${port}`);
});
//# sourceMappingURL=main.js.map