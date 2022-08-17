export interface Commande {
  "@context": string
  "@id": string
  "@type": string
  "hydra:member": HydraMember[]
  "hydra:totalItems": number
}

export interface HydraMember {
  "@id": string
  "@type": string
  numeroCommande: string
  dateCommande: string
  etat: string
  montantCommande: string
  client: Client
  zone: Zone
  burgerCommandes: BurgerCommande[]
  menuCommandes: MenuCommande[]
  boissonCommandes: string[]
  friteCommandes: FriteCommande[]
}

export interface Client {
  "@id": string
  "@type": string
  login: string
  prenom: string
  nom: string
}

export interface Zone {
  "@id": string
  "@type": string
  libelle: string
  prix: number
}

export interface BurgerCommande {
  "@id": string
  "@type": string
  id: number
  quantite: number
  prix: number
  burger: string
}

export interface MenuCommande {
  "@id": string
  "@type": string
  id: number
  quantite: number
  menu: string
  prix: number
}

export interface FriteCommande {
  "@id": string
  "@type": string
  quantite: number
}
