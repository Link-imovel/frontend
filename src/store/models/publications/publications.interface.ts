interface ImageByteA {
  id: string;
  homeId: string;
  image: Uint8Array;
}

interface ImageBase64 {
  id: string;
  homeId: string;
  image: string;
}

interface Address {
  id: string;
  street: string;
  street2: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  ibge: string;
}

interface Home<T = ImageByteA> {
  id: string;
  type: string;
  ref: string;
  totalArea: number;
  value: number;
  room: number;
  bedroom: number;
  bathroom: number;
  kitchen: number;
  garage: number;
  serviceArea: number;
  buildAt: Date;
  description: string;
  images?: T[];
  address: Address;
}

interface Publication<T = ImageByteA> {
  id?: string;
  userId: string;
  homeId: string;
  phone: string;
  reserved: boolean;
  views: number;
  virtualTour: string;
  rented: boolean;
  createdAt: Date;
  updatedAt: Date;
  home: Home<T>;
}

interface AddressHome {
  street: string;
  street2?: string;
  city: string;
  state: string;
  ibge?: string;
  neighborhood: string;
  number: number;
  zip: string;
}

interface ImageHome {
  image: string;
}

interface HomeDetails<T = AddressHome, J = ImageHome[]> {
  type: string;
  ref: string;
  totalArea: number;
  value: number;
  room: number;
  bedroom: number;
  bathroom: number;
  kitchen: number;
  garage: number;
  serviceArea: number;
  buildAt: Date;
  description: string;
  address: T;
  images?: J;
}

interface CreatePublication {
  virtualTour?: string;
  phone?: string;
  home: HomeDetails;
}

interface UpdatePublication {
  virtualTour?: string;
  phone?: string;
  views?: number;
  reserved?: boolean;
  home: HomeDetails<Partial<AddressHome>, Partial<ImageHome[]>>;
}

interface PublicationStore {
  publication: Publication<ImageBase64>;
  publications: Publication<ImageBase64>[];
}

export type {
  PublicationStore,
  Publication,
  Home,
  Address,
  AddressHome,
  CreatePublication,
  UpdatePublication,
  ImageHome,
  ImageByteA,
  ImageBase64,
};
