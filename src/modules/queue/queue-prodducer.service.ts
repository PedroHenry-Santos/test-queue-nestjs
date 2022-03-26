import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { QueueServiceDto } from './dto/queue-service.dto';

@Injectable()
export class QueueProducerService {
  constructor(@InjectQueue('test-queue') private queue: Queue) {}

  async queueTesteOne(queueData: QueueServiceDto) {
    await this.queue.add('teste-one-job', queueData, {
      timeout: 100,
      removeOnComplete: true,
      attempts: 5,
      backoff: {
        type: 'exponential',
        delay: 500,
      },
    });
  }
}
