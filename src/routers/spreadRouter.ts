import express from 'express';
import { SpreadController } from '../controller/SpreadController';
import { SpreadBusiness } from '../business/SpreadBusiness';

export const spreadRouter = express.Router();

const spreadController = new SpreadController(
  new SpreadBusiness()
);