import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Watchlist } from './models/watchlist.model';
import { WatchListDTO } from './dto';
import { User } from 'src/user/models/user.model';

@Injectable()
export class WatchlistService {
  constructor(
    @InjectModel(Watchlist)
    private readonly watchListRepository: typeof Watchlist,
  ) {}

  async createAsset(user: User, dto: WatchListDTO) {
    const watchlist = {
      user,
      name: dto.name,
      assetId: dto.assetId,
    };
    const asset = await this.watchListRepository.create(watchlist);
    return asset;
  }
}
