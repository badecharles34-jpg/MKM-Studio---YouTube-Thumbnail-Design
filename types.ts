
export type Page = 'Home' | 'About' | 'Pricing' | 'Portfolio' | 'Contact' | 'NotFound';

export interface Testimonial {
  id: number;
  name: string;
  channel: string;
  avatarUrl: string;
  quote: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Gaming' | 'Éducation' | 'Finance' | 'Divertissement';
  imageUrl: string;
  videoUrl?: string;
}
