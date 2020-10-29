import { Injectable } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { CryptoHistoricalData } from '../entity/CryptoHistoricalData';

@Injectable()
export class CryptoHistoricalDataService {
  findAll(): string {
    createConnection().then(async connection => {
      const savedData = await connection.manager.find(CryptoHistoricalData);
      console.log("All data from the db: ", savedData);
    }).catch(error => console.log(error));

    return 'OK';
  }
}
