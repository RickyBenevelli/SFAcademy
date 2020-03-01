# SF Academy

## Introduzione
L’applicazione web è finalizzata alla visualizzazione dei film reperibili su [OMDb API](http://www.omdbapi.com).
È possibile visualizzare una classifica locale (interna all’applicazione). Gli utenti possono registrarsi e poi votare i film.


### FRONT-END
Applicazione scritta in React, a cui è collegato uno store Redux.

### BACK-END
Database MySQL collegato al front-end tramite node.js e Sequelize.

### DATABASE 
È necessario predisporre un database locale chiamato "database" avente per password "password". 
Questo deve contenere due tabelle:
- "users", tabella adibita alla registrazione degli utenti con le colonne "email" e "password";
- "votation", adibita alla votazione dei films, contenente colonne "id_votation", "id_film", "title_film", "email" e "vote".

### PAGINE:
- Home (‘/home’)
- Landing (‘/’)
- Movie (‘/movie/:id’)
- SignUp (‘/sign-up’)
- SignIn (‘sign-in’)
- Score board (‘/scores’)
