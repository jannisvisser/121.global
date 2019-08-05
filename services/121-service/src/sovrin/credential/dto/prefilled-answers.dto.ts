import { ApiModelProperty } from '@nestjs/swagger';
import { Length, IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class PrefilledAnswerDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  public readonly attributeId: number;
  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  public readonly attribute: string;
  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
  public readonly answer: number;
}

export class PrefilledAnswersDto {
  @ApiModelProperty({
    example: [
    {
      attributeId: 1,
      attribute: 'Age',
      answer: 32
    },
    {
      attributeId: 2,
      attribute: 'RoofType',
      answer: 0
    }
    ]})
  @IsArray()
  public readonly attributes: PrefilledAnswerDto[];

}
