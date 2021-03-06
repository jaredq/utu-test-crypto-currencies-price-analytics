import { Injectable } from '@nestjs/common';
import { getManager, getRepository } from "typeorm";
import CryptoHistoricalData from '../entity/crypto-historical-data';

@Injectable()
export class CryptoHistoricalDataService {
  async findAll(): Promise<CryptoHistoricalData[]> {
    return await getManager().find(CryptoHistoricalData, {
      order: {
        date: -1
      }
    });
  }

  async findLatestByCurrency(currency: string, limit: number): Promise<CryptoHistoricalData[]> {
    const cryptoHistoricalDataRepos = getRepository(CryptoHistoricalData);
    return await cryptoHistoricalDataRepos.find({
      where: {
        currency
      },
      order: {
        date: -1
      },
      skip: 0,
      take: limit
    });
  }
}
