// ============================================================
//  APPARTEMENT 14 JUILLET — 2e ÉTAGE (sous combles, mansardé)
//  Unités : mètres. x vers la droite, y vers le bas du plan.
//  Origine = angle intérieur haut-gauche (mur palier / mur gauche).
//  Relevé d'après le plan d'architecte (échelle recalée sur la cote 7,03 m),
//  sans photos : sanitaires et sens de portes à confirmer sur place.
// ============================================================
window.APPART = {
  nom: "Appartement 14 Juillet — 2e étage",
  cle: "14juillet-2e",
  variantes: {
    existant: {
      nom: "Existant",
      hauteur: 2.10,                 // hauteur sous plafond maximale
      combles: {
        pied: 1.20,                  // hauteur au pied des pentes, contre les murs bas
        pentes: [
          // face intérieure du mur bas, normale vers l'intérieur, distance où l'on atteint 1,80 m.
          // 15/10 — repère donné sur place (salle d'eau) : le plafond atteint sa hauteur maxi au-dessus du lavabo,
          // à ≈ 2,0 m du mur bas → pente plus raide (1,80 m à 1,33 m du mur), appliquée à toutes les mansardes.
          { id: "pente_g", nom: "Pente côté gauche", a: [0, -0.3],    b: [0, 6.55],    n: [1, 0],  d180: 1.33 },
          { id: "pente_d", nom: "Pente côté droit",  a: [7.03, -0.3], b: [7.03, 6.55], n: [-1, 0], d180: 1.33 }
        ],
        // lucarnes : devant chaque fenêtre verticale le plafond reste à la hauteur maximale
        lucarnes: [
          { id: "luc_sde",  x0: -0.6, x1: 1.45, y0: 1.53, y1: 2.50 },
          { id: "luc_cuis", x0: -0.6, x1: 1.45, y0: 3.72, y1: 4.56 },
          { id: "luc_ch",   x0: 5.60, x1: 7.70, y0: 1.35, y1: 2.25 },
          { id: "luc_sej",  x0: 5.60, x1: 7.70, y0: 3.71, y1: 4.63 }
        ]
      },

      murs: [
        { id: "m_palier", nom: "Mur palier",                     a: [-0.30, -0.10], b: [7.33, -0.10], ep: 0.20, type: "porteur" },
        { id: "m_droit",  nom: "Mur droit (bas de pente)",       a: [7.18, -0.20],  b: [7.18, 6.39],  ep: 0.30, type: "porteur" },
        { id: "m_gauche", nom: "Mur gauche (bas de pente)",      a: [-0.15, -0.20], b: [-0.15, 6.39], ep: 0.30, type: "porteur" },
        { id: "m_fond",   nom: "Mur du fond",                    a: [-0.30, 6.39],  b: [7.33, 6.39],  ep: 0.30, type: "porteur" },

        { id: "c_sde_deg", nom: "Cloison salle d'eau / dégagement", a: [3.04, 0.00],  b: [3.04, 2.56],  ep: 0.08, type: "cloison" },
        { id: "c_deg_ch",  nom: "Cloison dégagement / chambre",     a: [3.89, 0.00],  b: [3.89, 3.35],  ep: 0.06, type: "cloison" },
        { id: "c_sde_bas", nom: "Cloison salle d'eau / cellier",    a: [0.00, 2.53],  b: [3.08, 2.53],  ep: 0.06, type: "cloison" },
        { id: "c_cel_d",   nom: "Cloison cellier / dégagement",     a: [2.18, 2.56],  b: [2.18, 3.72],  ep: 0.06, type: "cloison" },
        { id: "c_cel_bas", nom: "Cloison cellier / cuisine",        a: [0.00, 3.69],  b: [2.21, 3.69],  ep: 0.06, type: "cloison" },
        { id: "c_ch_bas",  nom: "Cloison chambre / séjour",         a: [3.86, 3.315], b: [7.03, 3.315], ep: 0.07, type: "cloison" }
      ],

      ouvertures: [
        { id: "p_entree", nom: "Porte d'entrée",     type: "porte",   mur: "m_palier",  at: 3.40, w: 0.74, h: 2.00, charniere: "a", sens: 1 },
        { id: "p_sde",    nom: "Porte salle d'eau",  type: "porte",   mur: "c_sde_bas", at: 2.29, w: 0.71, h: 2.00, charniere: "b", sens: -1 },
        { id: "p_ch",     nom: "Porte chambre",      type: "porte",   mur: "c_deg_ch",  at: 2.52, w: 0.75, h: 2.00, charniere: "b", sens: -1 },
        { id: "p_cel",    nom: "Porte cellier (côté cuisine)", type: "porte", mur: "c_cel_bas", at: 0.83, w: 0.60, h: 2.00, charniere: "a", sens: -1 },

        { id: "f_sde",    nom: "Fenêtre salle d'eau",   type: "fenetre", mur: "m_gauche", at: 1.75, w: 0.85, h: 1.10, allege: 0.90 },
        { id: "f_cuis",   nom: "Fenêtre cuisine",       type: "fenetre", mur: "m_gauche", at: 3.98, w: 0.77, h: 1.10, allege: 0.95 },
        { id: "f_ch",     nom: "Fenêtre chambre",       type: "fenetre", mur: "m_droit",  at: 1.58, w: 0.80, h: 1.15, allege: 0.85 },
        { id: "f_sej",    nom: "Fenêtre séjour",        type: "fenetre", mur: "m_droit",  at: 3.94, w: 0.80, h: 1.15, allege: 0.85 }
      ],

      pieces: [
        { id: "sde",    nom: "Salle d'eau",      sol: "carrelage-rose",  murs: "#e2c2bb", faience: { c: "#d9b2aa", t: 0.20 }, poly: [[0,0],[3.00,0],[3.00,2.50],[0,2.50]] },
        { id: "deg",    nom: "Dégagement",       sol: "carrelage-blanc-xl",           murs: "#ece6da", poly: [[3.08,0],[3.86,0],[3.86,3.35],[2.21,3.35],[2.21,2.56],[3.08,2.56]] },
        { id: "cel",    nom: "Cellier",          sol: "carrelage-blanc", murs: "#eeeeea", poly: [[0,2.56],[2.15,2.56],[2.15,3.66],[0,3.66]] },
        { id: "ch",     nom: "Chambre",          sol: "chene",           murs: "#ece6da", poly: [[3.92,0],[7.03,0],[7.03,3.28],[3.92,3.28]] },
        { id: "sejour", nom: "Cuisine / Séjour", sol: "carrelage-blanc-xl",           murs: "#ece6da", poly: [[0,3.72],[2.21,3.72],[2.21,3.35],[7.03,3.35],[7.03,6.24],[0,6.24]] }
      ],

      elements: [
        { id: "pl_sde",   nom: "Rangement salle d'eau (étagères, portes coulissantes)", type: "dressing", etageres: true, dos: "x0", x: 0.00, y: 0.00, w: 0.55, d: 1.49, z: 0, h: 1.10, couleur: "#f0eee8" },
        { id: "douche",   nom: "Receveur de douche",    type: "sanitaire", x: 2.21, y: 0.00, w: 0.79, d: 0.79, z: 0, h: 0.12, couleur: "#f7f7f5" },
        { id: "lavabo",   nom: "Lavabo",                type: "sanitaire", x: 1.50, y: 0.00, w: 0.60, d: 0.48, z: 0.80, h: 0.15, couleur: "#f7f7f5" },
        { id: "cuvette",  nom: "WC",                    type: "sanitaire", x: 0.02, y: 1.72, w: 0.62, d: 0.40, z: 0, h: 0.40, couleur: "#f7f7f5" },
        { id: "tableau",  nom: "Tableau électrique (ancien cellier)", type: "technique", x: 0.00, y: 3.15, w: 0.12, d: 0.40, z: 0.60, h: 0.50, couleur: "#f2f2ee" },
        { id: "pl_ch",    nom: "Rangement chambre (étagères, portes coulissantes)", type: "dressing", etageres: true, dos: "x1", x: 6.48, y: 0.00, w: 0.55, d: 1.35, z: 0, h: 1.10, couleur: "#f0eee8" },
        // cuisine en L (plan : 2,54 m le long du mur gauche + retour le long du mur du fond)
        // modules listés depuis l'angle : l'évier est sous la fenêtre ; plaque + hotte au milieu du retour (15/10)
        { id: "cuisine_g", nom: "Cuisine — linéaire mur gauche", groupe: "cuisine", type: "cuisine_run", dos: "x0", x: 0.00, y: 3.72, w: 0.61, d: 2.52, z: 0, h: 0.90, couleur: "#e9e6df", plan: "#cfccc4",
          modules: [["angle", 0.89], ["tiroirs", 0.60], ["evier", 0.77], ["fileur", 0.26]] },
        { id: "cuisine_f", nom: "Cuisine — retour mur du fond", groupe: "cuisine", type: "cuisine_run", dos: "y1", x: 0.61, y: 5.60, w: 1.79, d: 0.64, z: 0, h: 0.90, couleur: "#e9e6df", plan: "#cfccc4",
          modules: [["porte", 0.60], ["plaque", 0.60], ["porte", 0.59]] },
        // poutre (jambe de force) : pied au sol contre le mur, juste après la fenêtre, remonte jusqu'au plafond
        { id: "poutre_ch", nom: "Poutre inclinée (chambre)", type: "poutre3d", a: [6.95, 2.43, 0.00], b: [5.09, 2.43, 2.04], sec: 0.14, couleur: "#5a4232", bois: "#6e5241" },
        { id: "rad_ch",   nom: "Radiateur chambre",     type: "radiateur", x: 6.10, y: 3.17, w: 0.85, d: 0.10, z: 0.15, h: 0.45, couleur: "#f4f4f0" },
        { id: "rad_sej",  nom: "Radiateur séjour",      type: "radiateur", x: 6.10, y: 3.36, w: 0.85, d: 0.10, z: 0.15, h: 0.45, couleur: "#f4f4f0" },
        { id: "rad_sej2", nom: "Radiateur séjour (cellier)", type: "radiateur", x: 1.55, y: 3.73, w: 0.60, d: 0.10, z: 0.15, h: 0.45, couleur: "#f4f4f0" }
      ]
    },
  }
};

// ============================================================
//  VARIANTE PROJET — part de l'existant
// ============================================================
(function(){
  const P = JSON.parse(JSON.stringify(window.APPART.variantes.existant));
  P.nom = "Projet";
  // 15/10 — radiateurs déposés dans le projet
  P.elements = P.elements.filter(e => e.type !== "radiateur");
  // 15/10 — l'ancien lavabo est remplacé par un meuble vasque (posé dans la maquette)
  P.elements = P.elements.filter(e => e.id !== "lavabo");
  // 15/10 — tableau électrique déplacé dans la colonne technique (meuble posé dans la maquette)
  P.elements = P.elements.filter(e => e.id !== "tableau");
  // 15/10 — porte du cellier décalée vers la droite, là où le rampant laisse passer une porte de ~1,83 m
  // 15/10 — évier centré sur la fenêtre de la cuisine (3,78–4,55 m), robinet sur le côté pour laisser s'ouvrir les vantaux
  // 29/10 — la cuisine se prolonge dans l'ancien cellier (cloisons déposées) : le linéaire du mur gauche part du mur de la salle d'eau,
  //         angle aveugle puis retour le long de ce mur avec un placard et la niche du lave-linge, jusqu'à la colonne technique
  Object.assign(P.elements.find(e => e.id === "cuisine_g"), { y: 2.56, d: 3.68,
    modules: [["angle", 0.89], ["tiroirs", 0.80], ["evier", 0.77, { robinet: "cote" }], ["porte", 0.58], ["coin", 0.64]] });
  P.elements.push({ id: "cuisine_n", nom: "Cuisine — retour mur salle d'eau (lave-linge)", groupe: "cuisine", type: "cuisine_run", dos: "y0", x: 0.63, y: 2.56, w: 0.97, d: 0.62, z: 0, h: 0.90, couleur: "#e9e6df", plan: "#cfccc4",
    modules: [["porte", 0.37], ["ll", 0.60]] });
  Object.assign(P.ouvertures.find(o => o.id === "p_cel"), { at: 1.53, sens: 1, fermee: true });   // ouvre côté séjour, fermée par défaut
  window.APPART.variantes.projet = P;
})();
