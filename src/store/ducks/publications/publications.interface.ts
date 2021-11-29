import { User } from '@store/ducks/user/user.interface';
import { Point } from 'geojson';

interface ImageByteA {
  id: string;
  homeId: string;
  image: Uint8Array;
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
  location?: Point;
}

interface Home<T = ImageByteA[]> {
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
  buildAt: string;
  description: string;
  images?: T;
  address: Address;
}

interface Publication<T = ImageByteA[]> {
  id?: string;
  userId: string;
  homeId: string;
  phone: string;
  reserved: boolean;
  views: string;
  title: string;
  virtualTour: string;
  rented: boolean;
  createdAt: Date;
  updatedAt: Date;
  home: Home<T>;
  user: User;
}

interface AddressHome {
  street: string;
  street2?: string;
  city: string;
  state: string;
  ibge?: string;
  neighborhood: string;
  number: string;
  zip: string;
  latitude?: number;
  longitude?: number;
}

interface ImageHome {
  image: string;
}

interface HomeDetails<T = AddressHome, J = ImageHome[]> {
  type: string;
  ref: string;
  totalArea: string;
  value: string;
  room: string;
  bedroom: string;
  bathroom: string;
  kitchen: string;
  garage: string;
  serviceArea: string;
  buildAt: string;
  description: string;
  address: T;
  images?: J;
}

interface CreatePublication {
  virtualTour?: string;
  phone?: string;
  title: string;
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
  publication: Publication<string[]>;
  publications: Publication<string[]>[];
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
};
