import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Watchlist } from 'src/watchlist/models/watchlist.model';

@Table({ timestamps: false, tableName: 'user' })
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Watchlist, {
    foreignKey: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'watchlist',
  })
  watchlist: Watchlist[];
}
