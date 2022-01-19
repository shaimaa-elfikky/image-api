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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const resized_1 = __importDefault(require("../../utilities/resized"));
const path_1 = __importDefault(require("path"));
// create a request object
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint response', () => {
    it('test Sucsess', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?imageNam=thump&width=400&hight=200');
        expect(response.status).toBe(200);
        done();
    }));
    // it('test failed', async () => {
    //   const response = await request.get('/api/images?imageNam=picture&width=200&hight=200')
    //   expect(response.status).toBe(400)
    // })
    it('Invalid Output Path throws error', () => __awaiter(void 0, void 0, void 0, function* () {
        const resize = path_1.default.join(__dirname, `./../../image/resizedImage/thump-200-200.jpeg`);
        const img = path_1.default.join(__dirname, `./../../image/thump.jpeg`);
        const result = yield (0, resized_1.default)(img, 0, 0, resize);
        expect(result).toBe('image faild');
    }));
});
