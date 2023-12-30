export type ICareer = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetAllUserParams {
  owner?: string;
  sort?: string;
  filter?: string[];
  page?: number;
  limit?: number;
}

export interface IGetALlCareer {
  results: ICareer[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
