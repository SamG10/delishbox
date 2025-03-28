import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Language } from '../entities/blog.entity';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(Language)
  language: Language;

  @IsString()
  @IsOptional()
  metaDescription?: string;
}
