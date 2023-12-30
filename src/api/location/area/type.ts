export type ILocation = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlLocation {
  results: ILocation[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
