export type IHouseAppStatus = {
  id: number;
};



export interface IGetALlIHouseAppStatus {
  results: IHouseAppStatus[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
