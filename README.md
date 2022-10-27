
# P7 Créez une application web de location immobilière avec React de OpenClassRooms

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

Ce projet est développé pour la partie front-end avec React.JS et la mise en page avec le pré-processeur CSS : SASS.


## Les routes de mon projet dans App.js

```bash
<Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/housing-:id" element={<Housing />} />
  <Route path="*" element={<Notfound />} />
</Routes>
```


## Installation

Mon projet a été initier avec la commande suivante

```bash
  npx create-react-app
```

Les modules suivants ont été installer

Sass :
```bash
  npm i sass
```
React-router-dom :
```bash
  npm i react-router-dom
```

React Icons : Utilisation de FontAwesome pour les flêches et les étoiles
```bash
  npm install react-icons --save
```

React Collapse :
```bash
  npm i react-collapse
```