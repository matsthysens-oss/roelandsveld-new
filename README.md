# TPC Roelandsveld — volledige HTML-website (eerste implementatiestap)

Dit project zet het homepageconcept om naar een statische multi-page website met:
- donkerblauw `#19354D`, zachtgroen `#B9D8B4`, wit en lichtgroen `#F4F7F3`;
- authentieke, ongewijzigde clubfoto's en logo's uit het aangeleverde prototype;
- aparte pagina's voor home, club, tennis & padel, lessen, lidmaatschap, praktische info, reservatiereglement, winteruren, privacy, clubvoorwaarden en grensoverschrijdend gedrag;
- nieuws-overzicht en nieuwsdetailweergave;
- Decap CMS configuratie voor nieuwsbeheer;
- Netlify publicatieconfiguratie en eerste redirects.

## Belangrijk: dit is een deploybare basis, nog niet de definitieve live migratie
De huidige officiële inhoud is niet volledig automatisch uit Wix geëxporteerd. Sommige juridische teksten, exacte tarieven, openingstijden, externe reserveringslink en bestaande formulierintegraties moeten eerst integraal gecontroleerd en overgezet worden. Tijdelijke verwijzingen zijn expliciet vermeld in de pagina's. Verwijder die meldingen pas na controle.

## Lokaal bekijken
Open `index.html` in een browser. Voor nieuwsfetches en CMS is een lokale webserver nodig; je kunt het project ook eerst als Netlify Draft Deploy publiceren.

## Netlify-publicatie
1. Maak een privé GitHub-repository voor dit project en upload alle bestanden.
2. Maak in Netlify een nieuwe site aan en koppel de repository.
3. Build command leeg laten; publish directory is `.`.
4. Test de Netlify Preview URL voordat je het clubdomein wijzigt.
5. Stel HTTPS in en test alle interne/externe links.

## Decap CMS instellen
1. Decap is geconfigureerd met GitHub backend. Vervang in `admin/config.yml` `VERVANG-DIT/TPCR-website` door de echte GitHub `eigenaar/repository`.
2. Richt een veilige OAuth-authenticatieservice/proxy in en vervang `base_url` door het echte endpoint. Gebruik geen wachtwoorden of client secrets in deze repository.
3. Controleer de branchnaam (`main`) en CMS-rechten voor alleen de medewerkers die nieuws moeten publiceren.
4. Publiceer `/admin/` en test inloggen, concept opslaan, preview, publiceren en wijzigen.
5. Nieuwsberichten worden als JSON opgeslagen in `content/news-posts/`. De gegenereerde index staat in `content/news/index.json` en is voorlopig leeg. De CMS-setup moet ook een gecontroleerde build/actie hebben die de nieuwsindex genereert uit de nieuwsbestanden; zie `scripts/build-news-index.py`.

## Bestaande diensten behouden
- Lespagina's blijven voorlopig gelinkt aan de huidige website: `/padelles`, `/tennislessen`, `/lessen`.
- Lidmaatschap blijft voorlopig gelinkt aan de huidige officiële pagina.
- De algemene Tennis en Padel Vlaanderen-link is een tijdelijke reserveringsbestemming: vervang deze door de exacte TPCR-reserveringslink vóór publicatie.
- Er is nog geen nieuw contactformulier of nieuwsbriefbackend aangesloten. Behoud de huidige Wix/formulierdiensten tot de vervanging getest is.

## Voor livegang afvinken
- [ ] Alle actuele tarieven en seizoensdata gecontroleerd.
- [ ] Officiële reservatielink en lesinschrijflinks getest.
- [ ] Volledige FAQ, privacyverklaring, clubvoorwaarden en reservatiereglement overgezet.
- [ ] Contactformulier en nieuwsbrief getest en bezorging bevestigd.
- [ ] Decap-authenticatie getest met echte clubmedewerker.
- [ ] Alle redirects, mobiele weergave, toegankelijkheid en gebroken links gecontroleerd.
- [ ] Domein en DNS gewijzigd met e-mailrecords intact.
