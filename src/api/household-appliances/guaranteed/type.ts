export type IHouseAppGuarantee = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlIHouseAppGuarantee {
  results: IHouseAppGuarantee[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
