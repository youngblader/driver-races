export interface PaginationProps {
  amount: number;
  offset: number;
  pagination: (item: number) => void;
}