// ============================================================
//  APPARTEMENT 14 JUILLET — DONNÉES DU MODÈLE
//  Unités : mètres. Repère du plan : x vers la droite (façade rue),
//  y vers le bas (fond / cuisine). Origine = angle intérieur
//  séjour côté palier, à gauche de la porte d'entrée.
//
//  murs        : a → b = axe du mur, ep = épaisseur
//  ouvertures  : mur = id du mur, at = distance depuis a, w = largeur,
//                h = hauteur, allege = hauteur d'allège (fenêtres),
//                charniere 'a'|'b' et sens +1|-1 (côté du débattement)
//  pieces      : polygone intérieur, sol, couleur des murs
//  elements    : meubles et équipements (x, y, w, d, z, h)
// ============================================================
window.APPART = {
  nom: "Appartement 14 Juillet",
  variantes: {
    existant: {
      nom: "Existant",
      hauteur: 2.40,

      murs: [
        { id: "m_palier",   nom: "Mur palier",                 a: [-1.60, -0.10], b: [7.55, -0.10], ep: 0.20, type: "porteur" },
        { id: "m_facade",   nom: "Façade rue du 14 Juillet",   a: [7.30, -0.20],  b: [7.30, 6.65],  ep: 0.50, type: "porteur" },
        { id: "m_fond",     nom: "Mur du fond",                a: [-1.60, 6.45],  b: [7.55, 6.45],  ep: 0.40, type: "porteur" },
        { id: "m_ext_g",    nom: "Mur extérieur côté sanitaires", a: [-1.45, -0.20], b: [-1.45, 6.65], ep: 0.30, type: "porteur" },
        { id: "m_refend",   nom: "Mur de refend sanitaires / séjour", a: [-0.28, 0.00], b: [-0.28, 6.25], ep: 0.56, type: "porteur" },

        { id: "c_sej_ch1",  nom: "Cloison séjour / chambre 1", a: [3.17, 0.00],   b: [3.17, 3.36],  ep: 0.10, type: "cloison" },
        { id: "c_ch1_ch2",  nom: "Cloison chambre 1 / chambre 2", a: [2.46, 3.41], b: [7.05, 3.41],  ep: 0.10, type: "cloison" },
        { id: "c_sej_ch2",  nom: "Cloison séjour / chambre 2", a: [2.495, 3.46],  b: [2.495, 6.25], ep: 0.07, type: "cloison" },
        { id: "c_douche",   nom: "Cloison niche de douche",    a: [-1.30, 1.12],  b: [-0.56, 1.12], ep: 0.07, type: "cloison" },
        { id: "c_sde_sas",  nom: "Cloison salle d'eau / dégagement WC", a: [-1.30, 2.78], b: [-0.56, 2.78], ep: 0.07, type: "cloison" },
        { id: "c_sas_wc",   nom: "Cloison dégagement / WC",    a: [-1.30, 4.90],  b: [-0.56, 4.90], ep: 0.07, type: "cloison" }
      ],

      ouvertures: [
        { id: "p_entree", nom: "Porte d'entrée",        type: "porte",   mur: "m_palier",  at: 1.60, w: 0.82, h: 2.04, charniere: "a", sens: 1 },
        { id: "p_ch1",    nom: "Porte chambre 1",       type: "porte",   mur: "c_sej_ch1", at: 2.40, w: 0.89, h: 2.04, charniere: "b", sens: -1 },
        { id: "p_ch2",    nom: "Porte chambre 2",       type: "porte",   mur: "c_sej_ch2", at: 0.02, w: 0.79, h: 2.04, charniere: "b", sens: -1 },
        { id: "p_sde",    nom: "Porte salle d'eau",     type: "porte",   mur: "m_refend",  at: 1.70, w: 0.70, h: 2.04, charniere: "a", sens: -1 },
        { id: "p_sas",    nom: "Porte dégagement WC",   type: "porte",   mur: "m_refend",  at: 3.75, w: 0.68, h: 2.04, charniere: "b", sens: -1 },
        { id: "p_wc",     nom: "Porte WC",              type: "porte",   mur: "c_sas_wc",  at: 0.07, w: 0.60, h: 2.04, charniere: "a", sens: -1 },
        { id: "b_douche", nom: "Entrée niche de douche", type: "baie",   mur: "c_douche",  at: 0.06, w: 0.62, h: 2.00 },

        { id: "f_ch1",    nom: "Fenêtre chambre 1",     type: "fenetre", mur: "m_facade",  at: 1.45, w: 0.90, h: 1.80, allege: 0.40 },
        { id: "f_ch2",    nom: "Fenêtre chambre 2",     type: "fenetre", mur: "m_facade",  at: 4.05, w: 0.90, h: 1.80, allege: 0.40 },
        { id: "f_sde",    nom: "Fenêtre salle d'eau (dépolie)", type: "fenetre", mur: "m_ext_g", at: 1.75, w: 0.50, h: 1.10, allege: 1.00 },
        { id: "f_sas",    nom: "Fenêtre dégagement WC", type: "fenetre", mur: "m_ext_g",   at: 3.60, w: 0.90, h: 1.25, allege: 1.00 }
      ],

      pieces: [
        { id: "sejour", nom: "Cuisine / Séjour", sol: "beton",           murs: "#b9bec3",
          poly: [[0, 0], [3.12, 0], [3.12, 3.36], [2.46, 3.36], [2.46, 6.25], [0, 6.25]] },
        { id: "ch1",    nom: "Chambre 1",        sol: "chene",           murs: "#cddbd8",
          poly: [[3.22, 0], [7.05, 0], [7.05, 3.36], [3.22, 3.36]] },
        { id: "ch2",    nom: "Chambre 2",        sol: "chene-fonce",     murs: "#e6dcc8",
          poly: [[2.53, 3.46], [7.05, 3.46], [7.05, 6.25], [2.53, 6.25]] },
        { id: "sde",    nom: "Salle d'eau",      sol: "carrelage-blanc", murs: "#eeeeea",
          poly: [[-1.30, 0], [-0.56, 0], [-0.56, 2.745], [-1.30, 2.745]] },
        { id: "sas",    nom: "Dégagement WC",           sol: "carrelage-blanc", murs: "#eeeeea",
          poly: [[-1.30, 2.815], [-0.56, 2.815], [-0.56, 4.865], [-1.30, 4.865]] },
        { id: "wc",     nom: "WC",               sol: "carrelage-blanc", murs: "#eeeeea",
          poly: [[-1.30, 4.935], [-0.56, 4.935], [-0.56, 6.25], [-1.30, 6.25]] }
      ],

      elements: [
        { id: "cuis_bas",  nom: "Cuisine — meubles bas",  type: "cuisine",   x: 0.00, y: 5.65, w: 2.45, d: 0.60, z: 0.00, h: 0.90, couleur: "#2a2c31", plan: "#d8d8d4" },
        { id: "cuis_haut", nom: "Cuisine — meubles hauts", type: "cuisine",  x: 0.00, y: 5.90, w: 2.45, d: 0.35, z: 1.45, h: 0.70, couleur: "#2a2c31" },
        { id: "tableau",   nom: "Tableau électrique",     type: "technique", x: 0.00, y: 3.05, w: 0.12, d: 0.45, z: 1.10, h: 0.80, couleur: "#f2f2ee" },
        { id: "rad_sej",   nom: "Radiateur séjour",       type: "radiateur", x: 0.00, y: 2.30, w: 0.10, d: 0.60, z: 0.15, h: 0.45, couleur: "#f4f4f0" },
        { id: "rad_ch1",   nom: "Radiateur chambre 1",    type: "radiateur", x: 6.95, y: 2.30, w: 0.10, d: 0.55, z: 0.15, h: 0.45, couleur: "#f4f4f0" },
        { id: "rad_ch2",   nom: "Radiateur chambre 2",    type: "radiateur", x: 6.95, y: 4.85, w: 0.10, d: 0.55, z: 0.15, h: 0.45, couleur: "#f4f4f0" },
        { id: "plac1",     nom: "Placard chambre 2",      type: "placard",   x: 2.53, y: 4.27, w: 0.82, d: 1.09, z: 0.00, h: 2.40, couleur: "#f0eee8" },
        { id: "poutre",    nom: "Retombée de poutre",     type: "poutre",    x: 3.30, y: 3.46, w: 0.15, d: 2.79, z: 2.25, h: 0.15, couleur: "#f3f2ee" },
        { id: "douche",    nom: "Receveur de douche",     type: "sanitaire", x: -1.27, y: 0.03, w: 0.68, d: 1.02, z: 0.00, h: 0.15, couleur: "#f7f7f5" },
        { id: "lavabo",    nom: "Lavabo",                 type: "sanitaire", x: -1.18, y: 2.30, w: 0.50, d: 0.44, z: 0.80, h: 0.15, couleur: "#f7f7f5" },
        { id: "rad_sde",   nom: "Radiateur soufflant",    type: "radiateur", x: -0.66, y: 1.35, w: 0.10, d: 0.45, z: 1.40, h: 0.55, couleur: "#f4f4f0" },
        { id: "ballon",    nom: "Ballon d'eau chaude",    type: "ballon",    x: -1.20, y: 2.84, w: 0.50, d: 0.50, z: 1.00, h: 1.20, couleur: "#f6f6f3" },
        { id: "cuvette",   nom: "WC",                     type: "sanitaire", x: -1.13, y: 5.68, w: 0.40, d: 0.55, z: 0.00, h: 0.40, couleur: "#f7f7f5" }
      ]
    },
  }
};

// ============================================================
//  VARIANTE PROJET — part de l'existant, puis les modifications
//  de structure décidées ensemble. Les meubles, murs retirés,
//  sols et couleurs choisis dans la page s'ajoutent par-dessus.
// ============================================================
(function(){
  const P = JSON.parse(JSON.stringify(window.APPART.variantes.existant));
  P.nom = "Projet";
  const op = id => P.ouvertures.findIndex(o => o.id === id);
  const el = id => P.elements.find(e => e.id === id);
  const pc = id => P.pieces.find(p => p.id === id);

  // 14/10 — ancienne chambre 1 devient le salon, la chambre 2 devient « la chambre »
  pc("ch1").nom = "Salon";
  pc("ch2").nom = "Chambre";

  // 14/10 — porte séjour → chambre supprimée : mur continu derrière le frigo
  P.ouvertures.splice(op("p_ch2"), 1);

  // 14/10 — nouvelle porte de chambre côté salon, ouvrant vers la chambre
  P.ouvertures.push({ id: "p_ch_salon", nom: "Porte chambre (depuis le salon)", type: "porte",
    mur: "c_ch1_ch2", at: 0.20, w: 0.83, h: 2.04, charniere: "a", sens: 1 });

  // 15/10 — la cuisine devient un meuble du projet (déplaçable, couleur modifiable)
  P.elements = P.elements.filter(e => e.id !== "cuis_bas" && e.id !== "cuis_haut");

  // 14/10 — placard décalé au fond de la chambre, sur le même mur
  const pl = el("plac1"); pl.y = 6.25 - pl.d;

  window.APPART.variantes.projet = P;
})();
