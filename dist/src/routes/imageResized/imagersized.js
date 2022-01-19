"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const resized_1 = __importDefault(require("../../../utilities/resized"));
const imagResizedRoute = express_1.default.Router();
imagResizedRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageNam = (req.query.imageNam);
    const width = Number(req.query.width);
    const hight = Number(req.query.hight);
    const img = path_1.default.join(__dirname, `./../../../image/${imageNam}.jpeg`);
    const resize = path_1.default.join(__dirname, `./../../../image/resizedImage/${imageNam}-${width}-${hight}.jpeg`);
    if (req.query.imageNam === undefined || !fs_1.default.existsSync(img)) {
        // console.log('from validation')
        res.status(400).send('this is invalid image');
    }
    else if (width <= 0 || hight <= 0) {
        // console.log(' validation')
        res.status(400).send('this is inavalid Dimention ');
    }
    else if (fs_1.default.existsSync(resize)) {
        // console.log('from cash ')
        res.status(200).sendFile(resize);
    }
    else {
        const resort = yield (0, resized_1.default)(img, width, hight, resize);
        if (resort === 'done') {
            //  console.log('done')
            res.status(200).sendFile(resize);
        }
    }
}));
exports.default = imagResizedRoute;
