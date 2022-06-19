export interface CategoryTypes {
    _id : string;
    name : string;
    __v : string;
}

export interface GameItemTypes {
    _id : string;
    status : string;
    name : string;
    thumbnail : string;
    category : CategoryTypes
}

export interface BankTypes {
    _id : string;
    name : string;
    bankName : string;
    noRekening : string;
}

export interface PaymentTypes {
    _id : string;
    status : string;
    type : string;
    banks : BankTypes
}

export interface NominalTypes {
    _id : string;
    coinQuantity : number;
    coinName : string;
    price : number;
}

export interface LoginTypes {
    email : string;
    password : string;
}

export interface UserTypes {
  id : string;
  username : string;
  email : string;
  name : string;
  avatar : string;
  phoneNumber : string
}

export interface JWTPayloadTypes {
   player : UserTypes;
   iat : number
  }

export interface checkoutTypes {
        voucher : string,
        nominal : string,
        payment : string,
        bank : string,
        name : string,
        accountUser : string
}
export interface HistoryVoucherTopupTypes {
    category : string;
    coinName : string;
    coinQuantity : string;
    gameName : string;
    price : string;
    thumbnail : string;
}
export interface HistorPaymentTypes {
    bankName: string;
    name: string;
    noRekening: string;
    type: string;
}
export interface HistoryTransactionTypes {
    _id : string;
    historyVoucherTopup : HistoryVoucherTopupTypes;
    status : string;
    value : number;
    accountUser : string;
    tax : string;
    name : string;
    historyPayment : HistorPaymentTypes
}

export interface TopUpCategoriesTypes {
    _id : string;
    value : number;
    name : string;
}
