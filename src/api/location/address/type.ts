export type ILocationAddress = {
  id: number;
  Name: string;
  Name_en: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlLocationAddress {
  results: ILocationAddress[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
