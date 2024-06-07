# O'Coffee

## Information du projet

[Le projet](./docs/demande-client/01.project.md)

## Remarques pédagogiques et rendus

[Recommandations](./docs/recommandations/)

## un aperçu du rendu
> # <a href="url"><img src="./public/images/aperçu.png"></a> DataBase

## Pour tester ce projet il vous faut
> # <a href="url"><img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" align="middle" width="100" height="60"></a> postgresql
---
## Install From Package.json
* `npm i`

## Fichier environemment
* `un fichier .env`
* `fichier example fournie à la racine du projet`

## Install PostgreSQL
* `sudo apt update`
* `sudo apt install postgresql postgresql-contrib`
* `sudo service postgresql start [stop, status, reload, restart]`

## Run Server in Dev
* `npm run dev`

## Start Postgres Shell
* `sudo -i -u postgres psql`
* `pass= root`

## Set user
* `CREATE USER le_nom_de_l_utilisateur WITH PASSWORD 'le_mot_de_passe';`

## Basic Postgres Commands
* `\q`: Quit
* `\c` __database__: Connect to a database
* `\d` __table__: Show table definition including triggers
* `\dt` *.*: List tables from all schemas (if *.* is omitted will only show SEARCH_PATH ones)
* `\l`: List databases
* `\dn`: List schemas
* `\df`: List functions
* `\dv`: List views
* `\timing`: Show query timing stats
---
> ## Built with
this project was built in: `Nodejs`, `ejs`, `Express`, `PostgreSQL`, `dotenv`
