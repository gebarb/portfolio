export interface Offer {
  id: string;
  title: string;
  detail?: string;
  email: string;
  subject: string;
  action: string;
}

export default interface Contact {
  headline: string;
  subhead?: string;
  offers: Offer[];
}
