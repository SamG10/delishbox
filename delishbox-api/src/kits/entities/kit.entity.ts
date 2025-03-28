import { IsNotEmpty, IsString } from 'class-validator';
import slugify from 'slugify';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Kit {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @Column()
  description: string;

  @Column({ type: 'text' })
  ingredients: string;

  @Column({ type: 'real' })
  price: number;

  @BeforeInsert()
  generateSlug() {
    if (!this.slug && this.name) {
      this.slug = slugify(this.name, { lower: true, strict: true });
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
