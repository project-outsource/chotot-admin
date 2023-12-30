export type ISpecialStatus = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlSpecialStatus {
  results: ISpecialStatus[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
