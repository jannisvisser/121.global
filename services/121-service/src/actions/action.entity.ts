import { ExportType } from './../programs/program/dto/export-details';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { ProgramEntity } from '../programs/program/program.entity';

@Entity('action')
export class ActionEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public actionType: ActionType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public timestamp: Date;

  @ManyToOne(
    type => UserEntity,
    user => user.actions,
  )
  public user: UserEntity;

  @ManyToOne(
    type => ProgramEntity,
    program => program.actions,
  )
  public program: ProgramEntity;
}

export enum AdditionalActionType {
  testMpesaPayment = 'test-mpesa-payment',
}
export type ActionType = ExportType | AdditionalActionType;

// Add both enum together to one array so it can be used as validator in the dto
const ExportActionArray = Object.values(ExportType).map(item => String(item));
const AdditionalActionArray = Object.values(AdditionalActionType).map(item =>
  String(item),
);
export const ActionArray = ExportActionArray.concat(AdditionalActionArray);
