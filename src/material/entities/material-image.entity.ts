import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Material } from './material.entity';

@Entity()
export class MaterialImage {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    url: string;

    @ManyToOne(
        () => Material,
        (material) => material.images
        )
    menu: Material;
}