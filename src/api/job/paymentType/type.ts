export type IPaymentType = {
  id: number;
  Name: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
};

export interface IGetALlPaymentType {
  results: IPaymentType[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
