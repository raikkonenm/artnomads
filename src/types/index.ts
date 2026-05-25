export interface Exhibition {
  id: string;
  title: string;
  subtitle: string;
  artist: string;
  dateRange: string;
  imageUrl: string;
  imageAlt: string;
  tag: "Current" | "Upcoming" | "Past";
  href: string;
}

export interface Artist {
  id: string;
  name: string;
  nationality: string;
  medium: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}
