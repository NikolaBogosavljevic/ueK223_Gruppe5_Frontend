# ueK223_Gruppe5

Um dieses Programm starten zu können, muss man folgende Software herunterladen:
- Docker Desktop
- Intellij IDE
- Visual Studio Code

Zuerst muss man die Dateien von den zwei Repositories clonen. Das geht mit diesem Befehl:

### Backend
````
git clone https://github.com/NikolaBogosavljevic/ueK223_Gruppe5.git
````
### Frontend
````
git clone https://github.com/NikolaBogosavljevic/ueK223_Gruppe5_Frontend.git
````
Danach sollte man das Projekt in Intellij öffnen.
Bevor man es ausführen kann, muss man den Docker noch vorbereiten.
Man soll den Docker starten und den folgenden Befehl ausführen, um einen Postgres Container zu erstellen:
````
docker run --name postgres_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
````
Jetzt muss man das Frontend in VS Code öffnen und es mit dem Befehl starten:
```
yarn start
```

Um die Swagger Dokumentation zu sehen, muss man dei Applikation ausführen und auf den Browser gehen. Dann muss man diesen Link eingeben:
http://localhost:8080/myapi/swagger-ui/index.html#/
