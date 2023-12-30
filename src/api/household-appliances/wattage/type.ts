export type IHouseAppWattage = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlIHouseAppWattage {
  results: IHouseAppWattage[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
