export interface Review {
  id: number; // Un identifiant unique pour chaque avis (s'il est disponible)
  review: string; // Le texte de l'avis
  vote: boolean; // Le vote (true pour "pouce en l'air", false pour "pouce en bas")
  member: {
    id: number;
    username: string;
  }
}
