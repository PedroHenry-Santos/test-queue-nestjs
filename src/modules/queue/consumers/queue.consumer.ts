import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { QueueServiceDto } from '../dto/queue-service.dto';
import { QueueService } from '../queue.service';

@Processor('test-queue')
export class QueueConsumer {
  constructor(private readonly queueService: QueueService) {}

  @Process('teste-one-job')
  async testOne(job: Job<QueueServiceDto>) {
    this.queueService.addJob(`Job key (${job.data.key}): ${job.data.text}`);
  }
}
