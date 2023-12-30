export type IHouseAppCategory = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlIHouseAppCategory {
  results: IHouseAppCategory[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
