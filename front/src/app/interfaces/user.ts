enum role {
  Chomeur = "Chomeur",
  Etudiant = "Etudiant",
  Mineur = "Mineur",
  Admin = "Admin",
}

export interface User {
  id: string;
  username: string;
  password: string;
  role: role;
}
