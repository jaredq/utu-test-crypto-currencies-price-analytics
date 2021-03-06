import { Test } from '@nestjs/testing';
import { ObjectID } from 'mongodb';
import PriceAnalyticsData from 'src/models/price-analytics-data';
import CryptoHistoricalData from '../entity/crypto-historical-data';
import PriceAnalyticsUtil from './price-analytics.util';

describe('PriceAnalyticsUtil', () => {
  it('analyePrice', () => {
    expect(PriceAnalyticsUtil.analyePrice([])).toBeUndefined();

    const dummyHistoricalData: CryptoHistoricalData[] = [
      {
        id: new ObjectID('000000000000000000000000'),
        currency: 'xrp',
        date: new Date('2019-12-04T00:00:00.000Z'),
        open: 0.219824,
        high: 0.22177,
        low: 0.212603,
        close: 0.216348,
        volume: 1427312577,
        marketCap: 9364745688,
      },
      {
        id: new ObjectID('000000000000000000000001'),
        currency: 'xrp',
        date: new Date('2019-12-03T00:00:00.000Z'),
        open: 0.219516,
        high: 0.223179,
        low: 0.216675,
        close: 0.21987,
        volume: 1017648495,
        marketCap: 9517202026,
      },
      {
        id: new ObjectID('000000000000000000000002'),
        currency: 'xrp',
        date: new Date('2019-12-02T00:00:00.000Z'),
        open: 0.225386,
        high: 0.227203,
        low: 0.217283,
        close: 0.219581,
        volume: 1187513777,
        marketCap: 9507818760,
      },
      {
        id: new ObjectID('000000000000000000000003'),
        currency: 'xrp',
        date: new Date('2019-12-01T00:00:00.000Z'),
        open: 0.226466,
        high: 0.226525,
        low: 0.220253,
        close: 0.225333,
        volume: 1176237060,
        marketCap: 9756884341,
      },
      {
        id: new ObjectID('000000000000000000000004'),
        currency: 'xrp',
        date: new Date('2019-11-30T00:00:00.000Z'),
        open: 0.230232,
        high: 0.233615,
        low: 0.224546,
        close: 0.226474,
        volume: 1160032624,
        marketCap: 9806315573,
      },
      {
        id: new ObjectID('000000000000000000000005'),
        currency: 'xrp',
        date: new Date('2019-11-29T00:00:00.000Z'),
        open: 0.224623,
        high: 0.231636,
        low: 0.224129,
        close: 0.230217,
        volume: 1325761774,
        marketCap: 9968382707,
      },
      {
        id: new ObjectID('000000000000000000000006'),
        currency: 'xrp',
        date: new Date('2019-11-28T00:00:00.000Z'),
        open: 0.225221,
        high: 0.231131,
        low: 0.224198,
        close: 0.22457,
        volume: 1244175231,
        marketCap: 9723838882,
      },
      {
        id: new ObjectID('000000000000000000000007'),
        currency: 'xrp',
        date: new Date('2019-11-27T00:00:00.000Z'),
        open: 0.221845,
        high: 0.228498,
        low: 0.216199,
        close: 0.225081,
        volume: 1608881984,
        marketCap: 9745970911,
      },
      {
        id: new ObjectID('000000000000000000000008'),
        currency: 'xrp',
        date: new Date('2019-11-26T00:00:00.000Z'),
        open: 0.218464,
        high: 0.223212,
        low: 0.214957,
        close: 0.222145,
        volume: 1322723640,
        marketCap: 9618843673,
      },
      {
        id: new ObjectID('000000000000000000000009'),
        currency: 'xrp',
        date: new Date('2019-11-25T00:00:00.000Z'),
        open: 0.222832,
        high: 0.225923,
        low: 0.207013,
        close: 0.218622,
        volume: 9415068271,
        marketCap: 9466286656,
      },
      {
        id: new ObjectID('000000000000000000000010'),
        currency: 'xrp',
        date: new Date('2019-11-24T00:00:00.000Z'),
        open: 0.236227,
        high: 0.236373,
        low: 0.223184,
        close: 0.223184,
        volume: 2932397174,
        marketCap: 9663857831,
      },
      {
        id: new ObjectID('000000000000000000000011'),
        currency: 'xrp',
        date: new Date('2019-11-23T00:00:00.000Z'),
        open: 0.231574,
        high: 0.236188,
        low: 0.227707,
        close: 0.236188,
        volume: 1480512363,
        marketCap: 10226933084,
      },
      {
        id: new ObjectID('000000000000000000000012'),
        currency: 'xrp',
        date: new Date('2019-11-22T00:00:00.000Z'),
        open: 0.243775,
        high: 0.246417,
        low: 0.225687,
        close: 0.2316,
        volume: 2012230945,
        marketCap: 10028238451,
      },
      {
        id: new ObjectID('000000000000000000000013'),
        currency: 'xrp',
        date: new Date('2019-11-21T00:00:00.000Z'),
        open: 0.251316,
        high: 0.253512,
        low: 0.240784,
        close: 0.243766,
        volume: 1586333624,
        marketCap: 10555043277,
      },
      {
        id: new ObjectID('000000000000000000000014'),
        currency: 'xrp',
        date: new Date('2019-11-20T00:00:00.000Z'),
        open: 0.256545,
        high: 0.259139,
        low: 0.250331,
        close: 0.251364,
        volume: 1319069498,
        marketCap: 10884017518,
      },
      {
        id: new ObjectID('000000000000000000000015'),
        currency: 'xrp',
        date: new Date('2019-11-19T00:00:00.000Z'),
        open: 0.255646,
        high: 0.258563,
        low: 0.246971,
        close: 0.2565,
        volume: 1420685334,
        marketCap: 11106437807,
      },
      {
        id: new ObjectID('000000000000000000000016'),
        currency: 'xrp',
        date: new Date('2019-11-18T00:00:00.000Z'),
        open: 0.265137,
        high: 0.265514,
        low: 0.249842,
        close: 0.255653,
        volume: 1452996115,
        marketCap: 11069403326,
      },
      {
        id: new ObjectID('000000000000000000000017'),
        currency: 'xrp',
        date: new Date('2019-11-17T00:00:00.000Z'),
        open: 0.264009,
        high: 0.269385,
        low: 0.262832,
        close: 0.265253,
        volume: 1273573229,
        marketCap: 11485052604,
      },
      {
        id: new ObjectID('000000000000000000000018'),
        currency: 'xrp',
        date: new Date('2019-11-16T00:00:00.000Z'),
        open: 0.261694,
        high: 0.265443,
        low: 0.260609,
        close: 0.263886,
        volume: 1195333401,
        marketCap: 11425884645,
      },
      {
        id: new ObjectID('000000000000000000000019'),
        currency: 'xrp',
        date: new Date('2019-11-15T00:00:00.000Z'),
        open: 0.270463,
        high: 0.271049,
        low: 0.259878,
        close: 0.261654,
        volume: 1548251349,
        marketCap: 11329241896,
      },
      {
        id: new ObjectID('000000000000000000000020'),
        currency: 'xrp',
        date: new Date('2019-11-14T00:00:00.000Z'),
        open: 0.272903,
        high: 0.273868,
        low: 0.268069,
        close: 0.270391,
        volume: 1264478184,
        marketCap: 11707513880,
      },
      {
        id: new ObjectID('000000000000000000000021'),
        currency: 'xrp',
        date: new Date('2019-11-13T00:00:00.000Z'),
        open: 0.272379,
        high: 0.275665,
        low: 0.271303,
        close: 0.273036,
        volume: 1278922350,
        marketCap: 11822051383,
      },
      {
        id: new ObjectID('000000000000000000000022'),
        currency: 'xrp',
        date: new Date('2019-11-12T00:00:00.000Z'),
        open: 0.275179,
        high: 0.277042,
        low: 0.270781,
        close: 0.272418,
        volume: 1404766289,
        marketCap: 11795294866,
      },
      {
        id: new ObjectID('000000000000000000000023'),
        currency: 'xrp',
        date: new Date('2019-11-11T00:00:00.000Z'),
        open: 0.280164,
        high: 0.281727,
        low: 0.272008,
        close: 0.275086,
        volume: 1437677669,
        marketCap: 11910794571,
      },
      {
        id: new ObjectID('000000000000000000000024'),
        currency: 'xrp',
        date: new Date('2019-11-10T00:00:00.000Z'),
        open: 0.280273,
        high: 0.283117,
        low: 0.276669,
        close: 0.280204,
        volume: 1557437413,
        marketCap: 12132388502,
      },
      {
        id: new ObjectID('000000000000000000000025'),
        currency: 'xrp',
        date: new Date('2019-11-09T00:00:00.000Z'),
        open: 0.276863,
        high: 0.282471,
        low: 0.276328,
        close: 0.280196,
        volume: 1449652131,
        marketCap: 12117941815,
      },
      {
        id: new ObjectID('000000000000000000000026'),
        currency: 'xrp',
        date: new Date('2019-11-08T00:00:00.000Z'),
        open: 0.292438,
        high: 0.292612,
        low: 0.274005,
        close: 0.276953,
        volume: 2026687432,
        marketCap: 11977697598,
      },
      {
        id: new ObjectID('000000000000000000000027'),
        currency: 'xrp',
        date: new Date('2019-11-07T00:00:00.000Z'),
        open: 0.310175,
        high: 0.313278,
        low: 0.283395,
        close: 0.292431,
        volume: 2430065390,
        marketCap: 12647080586,
      },
      {
        id: new ObjectID('000000000000000000000028'),
        currency: 'xrp',
        date: new Date('2019-11-06T00:00:00.000Z'),
        open: 0.301103,
        high: 0.311605,
        low: 0.298735,
        close: 0.310086,
        volume: 1790567871,
        marketCap: 13410631514,
      },
      {
        id: new ObjectID('000000000000000000000029'),
        currency: 'xrp',
        date: new Date('2019-11-05T00:00:00.000Z'),
        open: 0.299906,
        high: 0.304524,
        low: 0.297917,
        close: 0.301255,
        volume: 1964177330,
        marketCap: 13028715563,
      },
      {
        id: new ObjectID('000000000000000000000030'),
        currency: 'xrp',
        date: new Date('2019-11-04T00:00:00.000Z'),
        open: 0.291236,
        high: 0.299949,
        low: 0.290893,
        close: 0.299937,
        volume: 1647597869,
        marketCap: 12971721432,
      },
    ];
    const expectedResult: PriceAnalyticsData = {
      currency: 'xrp',
      price: 0.216348,
      changeDifferenceIn24Hours: -1.6,
      changeDifferenceIn7Days: -3.88,
      changeDifferenceIn1Month: -27.87,
      volumeIn24Hours: 1427312577,
      marketCap: 9364745688,
    };
    const actualResult = PriceAnalyticsUtil.analyePrice(dummyHistoricalData);
    expect(actualResult.currency).toBe(expectedResult.currency);
    expect(actualResult.price).toBe(expectedResult.price);
    expect(actualResult.changeDifferenceIn24Hours).toBeCloseTo(expectedResult.changeDifferenceIn24Hours);
    expect(actualResult.changeDifferenceIn7Days).toBeCloseTo(expectedResult.changeDifferenceIn7Days);
    expect(actualResult.changeDifferenceIn1Month).toBeCloseTo(expectedResult.changeDifferenceIn1Month);
    expect(actualResult.volumeIn24Hours).toBe(expectedResult.volumeIn24Hours);
    expect(actualResult.marketCap).toBe(expectedResult.marketCap);
  });
});
