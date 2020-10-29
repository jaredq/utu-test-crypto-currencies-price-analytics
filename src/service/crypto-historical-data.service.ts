import { Injectable } from '@nestjs/common';
import { getManager, getRepository } from "typeorm";
import { CryptoHistoricalData } from '../entity/CryptoHistoricalData';

@Injectable()
export class CryptoHistoricalDataService {
  async findAll(): Promise<string[]> {
    const cryptoHistoricalDataList = await getManager().find(CryptoHistoricalData);
    return cryptoHistoricalDataList.map(o => o.id.toString());
  }

  async findByCurrency(currency): Promise<string[]> {
    const cryptoHistoricalDataRepos = getRepository(CryptoHistoricalData);
    const cryptoHistoricalDataList = await cryptoHistoricalDataRepos.find({
      where: {
        currency
      },
      order: {
        marketCap: -1
      }
    });
    return cryptoHistoricalDataList.map(o => o.id.toString());
  }
}
