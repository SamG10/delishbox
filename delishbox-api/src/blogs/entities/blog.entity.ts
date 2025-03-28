import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import slugify from 'slugify';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export enum Language {
  FR = 'fr',
  EN = 'en',
}

@Entity()
export class Blog {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @Column('text')
  @IsString()
  @IsNotEmpty()
  content: string;

  @Column({ type: 'text', default: Language.FR })
  @IsEnum(Language)
  language: Language;

  @Column({ nullable: true })
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  generateSlug() {
    if (!this.slug && this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true });
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
