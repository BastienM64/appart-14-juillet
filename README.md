# Appartement 14 Juillet — projet de rénovation

Site statique (aucun serveur) : maquette 3D, plan coté, visite à hauteur d'homme
et programme de travaux, figés sur l'état du projet.

- `index.html` : la page
- `data.js` : géométrie de l'appartement (existant + projet)
- `projet.js` : choix figés (meubles, murs retirés, sols, peintures)

Pour mettre à jour le site, remplacer `projet.js` (et `data.js` si la structure change).

## Ressources tierces
- Three.js r128 (MIT) et ses modules d'exemple (`lib/`).
- Texture de parquet « hardwood2 » issue des exemples Three.js (`tex/parquet_*.jpg`).
- HDRI « Royal Esplanade » de Poly Haven, licence CC0 (`tex/env.js`, encodé en base64).
- Matières Poly Haven « Walnut Veneer 02 » et « White Stucco », licence CC0 (`tex/noyer_*`, `tex/stuc_*`), réduites en 1K.
- Poly Haven « Leather White » (CC0, `tex/cuir_*`) et ambientCG « Leaking 018 A » (CC0, `tex/frigo_*`).
