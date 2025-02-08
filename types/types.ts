export interface SideItemType {
  icon: any;
  label: string;
  links?: {
    link: string;
    icon: any;
    label: string;
    links?: {
      link: string;
      label: string;
      icon: any;
    }[];
  }[];
}

export interface ClientType {
  client_id?: number;
  name: string;
  contact_number: string;
  email: string;
  address: string;
  image?: string;
  company?: string;
  reference?: string;
  details?: string;
  status: "client" | "supplier";
}

export interface AccountType{
    account_id?:number
    account_number:string
    balance:number
    account_type:string
    creation_date?:string
    note?:string
    status?:"active"|"inactive"
}

export interface DipositType{
  payment_type:string
  balance:number
  note?:string
  transection_id?:string
  date?:string
}

export interface StatementType{
  statement_id?:number
  payment_type:string
  balance:number
  transaction_type:"diposit"|"sale"|"purchase"|"transfer"|"bill"|"purchess"
  date:string
  note?:string
  transaction_id?:string
  credit?:number
  debit?:number
  time:string
}

export interface ProductType{
  product_id?:number
  product_name:string
  unit:"kg"|"pcs"
  stock:number
  buy_price:number
  sell_price:number
  image?:string
}

export interface PurchaseType{
  id?:number
  supplier:string
  total_amount:number
  product_name:string
  paid:number
  paid_account:string
  transaction_id?:string
  date?:string,
  client?:string
}

export interface BillType{
  bill_id?:number
  name:string
  amount:number
  method:string
  date?:string
}