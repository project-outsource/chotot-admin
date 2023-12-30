export type IHouseAppVolume = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlIHouseAppVolume {
  results: IHouseAppVolume[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
