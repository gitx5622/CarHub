export interface PopularCarResults {
  makeList: PopularCars[];
  pagination: Pagination;
}

export interface CarResults {
  result: Cars[];
  pagination: Pagination;
}

export interface PopularCars {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Pagination {
  total: number;
  currentPage: number;
  pageSize: number;
}

export interface Cars {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: MileageUnit;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: Stats;
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  transmission: Transmission;
  marketplaceVisibleDate: Date;
  sellingCondition?: SellingCondition;
  fuelType?: FuelType;
  gradeScore?: number;
  licensePlate?: string;
}

export enum FuelType {
  Diesel = "diesel",
  Electric = "electric",
  Hybrid = "hybrid",
  Petrol = "petrol",
}

export enum MileageUnit {
  KM = "km",
  Miles = "miles",
}

export enum SellingCondition {
  Foreign = "foreign",
  Local = "local",
  New = "new",
}

export interface Stats {
  webViewCount: number;
  webViewerCount: number;
  interestCount: number;
  testDriveCount: number;
  appViewCount: number;
  appViewerCount: number;
  processedLoanCount: number;
}

export enum Transmission {
  Automatic = "automatic",
  Duplex = "duplex",
  Manual = "manual",
}
