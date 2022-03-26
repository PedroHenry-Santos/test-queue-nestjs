import { Injectable } from '@nestjs/common';
import { CreateQueueDto } from './dto/create-queue.dto';
import { QueueProducerService } from './queue-prodducer.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class QueueService {
  private jobs: string[];

  constructor(private readonly queueProducerService: QueueProducerService) {
    this.jobs = [];
  }

  async create({ text }: CreateQueueDto) {
    const key = uuid();

    await this.queueProducerService.queueTesteOne({ text, key });

    return { message: `Job ${key} enviado com sucesso!` };
  }

  async addJob(data: string) {
    this.jobs.push(data);
  }

  async getJobs() {
    return this.jobs;
  }
}
