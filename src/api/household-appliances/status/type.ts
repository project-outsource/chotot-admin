export type IHouseAppStatus = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlExperience {
  results: IHouseAppStatus[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
