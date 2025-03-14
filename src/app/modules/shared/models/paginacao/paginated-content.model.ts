import { PaginationMetadata } from "./pagination-metadata.model";

export interface PaginatedContent<T> {
  data: Array<T>;
  metadata: PaginationMetadata;
}
