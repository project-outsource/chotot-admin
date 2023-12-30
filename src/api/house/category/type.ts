export type IHouseCategory = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlHouseCategory {
  results: IHouseCategory[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
