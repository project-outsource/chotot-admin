export type ISpecialGuarantee = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetAllSpecialGuarantee {
  results: ISpecialGuarantee[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
