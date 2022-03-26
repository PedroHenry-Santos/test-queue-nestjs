import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { BullModule } from '@nestjs/bull';
import { QueueProducerService } from './queue-prodducer.service';
import { QueueConsumer } from './consumers/queue.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'test-queue',
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService, QueueProducerService, QueueConsumer],
  exports: [QueueService],
})
export class QueueModule {}
