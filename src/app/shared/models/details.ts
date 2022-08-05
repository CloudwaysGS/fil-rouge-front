
import { Produit } from "./produits"

export interface Detail{
    id?:number
    menu?:Menu
    burger?:Menu
    portionFrites?:Produit[]
    boissons?:Produit[]
    tailleBoisson?:any[]
}
export interface Menu{
    id?:number
    nom?:string
    prix?:number
    // etat?:string
    description?:string
    type?:string
    imageBlob?:Blob
    // catalogue?:string
}

