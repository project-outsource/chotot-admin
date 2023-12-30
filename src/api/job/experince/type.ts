export type IExperience = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlExperience {
  results: IExperience[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
