import { Column, Table, Model, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/models/user.model';

@Table({ tableName: 'watchlist', timestamps: false })
export class Watchlist extends Model<Watchlist> {
  @ForeignKey(() => User)
  user: User;

  @Column
  name: string;

  @Column
  assetId: string;
}
