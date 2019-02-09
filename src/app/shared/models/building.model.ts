import { Finance } from './finance.model';
import { Photo } from './photo.model';

export interface Building {
  title: string;
  name: string;
  address: string;
  district: string;
  ending_date: string;
  type: string;
  financial: Finance;
  mainPhoto: Photo;
}
