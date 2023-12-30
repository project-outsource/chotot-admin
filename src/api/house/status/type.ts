export type IHouseStatus = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlHouseStatus {
  results: IHouseStatus[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
