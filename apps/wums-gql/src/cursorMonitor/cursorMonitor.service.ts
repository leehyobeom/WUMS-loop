import { Model, mongo } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CursorMonitor,
  CursorMonitorDocument,
} from '@libs/schema/cursorMonitor.schema';
import { CursorMonitorDTO } from '@libs/schema/cursorMonitor.dto';
import { logger } from '@libs/log/winston';

@Injectable()
export class CursorMonitorService {
  constructor(
    @InjectModel(CursorMonitor.name)
    private cursorMonitorModel: Model<CursorMonitorDocument>,
  ) {}

  async getOne(_id: string): Promise<CursorMonitorDTO> {
    return await this.cursorMonitorModel.findById(new mongo.ObjectId(_id));
  }

  async gets(): Promise<[CursorMonitorDTO]> {
    logger.info('gql:gets');
    return <[CursorMonitorDTO]>await this.cursorMonitorModel.find();
  }
}
