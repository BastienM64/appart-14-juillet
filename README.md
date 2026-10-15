# Appartement 14 Juillet — projet de rénovation

Site statique (aucun serveur) : maquette 3D, plan coté, visite à hauteur d'homme
et programme de travaux, figés sur l'état du projet.

- `index.html` / `data.js` / `projet.js` : appartement du 1er étage
- `2e-etage.html` / `data-2e.js` / `projet-2e.js` : appartement du 2e étage (combles)
- une flèche en haut de page permet de passer d'un appartement à l'autre

Mise à jour : le bouton « Sauvegarde » des maquettes de travail lance la tâche planifiée
« Mise à jour du site 14 Juillet », qui réécrit `projet.js` ou `projet-2e.js` et pousse sur `main`.

## Ressources tierces
- Three.js r128 (MIT) et ses modules d'exemple (`lib/`).
- Texture de parquet « hardwood2 » issue des exemples Three.js (`tex/parquet_*.jpg`).
- HDRI « Royal Esplanade » de Poly Haven, licence CC0 (`tex/env.js`, encodé en base64).
- Matières Poly Haven « Walnut Veneer 02 » et « White Stucco », licence CC0 (`tex/noyer_*`, `tex/stuc_*`), réduites en 1K.
- Poly Haven « Leather White » (CC0, `tex/cuir_*`) et ambientCG « Leaking 018 A » (CC0, `tex/frigo_*`).
- Poly Haven « European Walnut Veneer 04 » (CC0, `tex/noyereu_*`, meubles) et « Ribbed Corduroy » (CC0, `tex/velours_*`, textiles).
