export type IHouseAppMass = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlIHouseAppMass {
  results: IHouseAppMass[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
