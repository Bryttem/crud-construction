import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MaterialImage } from './material-image.entity';

@Entity()
export class Material {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'text' })
  categoria: string;

  @Column({ type: 'text' })
  distribuidor: string;

  @Column({ type: 'text' })
  sucursal: string;

  @OneToMany(
    () => MaterialImage, 
    (materialImage) => materialImage.menu, 
    {cascade: true}
)
images?: MaterialImage[];
}

