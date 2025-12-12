export interface QuotaResponse {
  totalQuotaBytes: number;
  usedBytes: number;
  availableBytes: number;
  usedPercentage: number;
  totalQuotaFormatted: string;
  usedFormatted: string;
  availableFormatted: string;
  lastCalculatedOn: Date;
}