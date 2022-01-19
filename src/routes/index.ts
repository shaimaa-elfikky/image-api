import express, { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs'
import imagResized from './imageResized/imagersized'

const routes = express.Router();


    routes.use('/images', imagResized);
    export default routes;
