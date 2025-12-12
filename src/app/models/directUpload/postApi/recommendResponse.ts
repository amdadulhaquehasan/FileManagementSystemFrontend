export interface RecommendResponse {
  fileName: string;
  fileSize: number;
  recommendedMethod: string;
  shouldCompress: boolean;
  reason: string;
  endpoint?: string
}