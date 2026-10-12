# TPC Roelandsveld — volledige HTML-website v2

Deze versie is bedoeld als zelfstandige website voor GitHub Pages. De navigatie en de clubpagina's verwijzen naar lokale HTML-pagina's; de oude Wix-site wordt niet meer gebruikt als bestemming voor interne pagina's.

## Publicatie op GitHub Pages
1. Download en pak deze ZIP uit.
2. Upload de INHOUD van de map `TPCR-volledige-site-v2` naar de hoofdmap van je repository `roelandsveld-new` en vervang bestaande bestanden.
3. Commit de wijzigingen.
4. Wacht op GitHub Pages en controleer `https://matsthy-sens-oss.github.io/roelandsveld-new/` (gebruik de exacte accountnaam in de browser).

De HTML bevat een dynamische base-path: op GitHub Pages gebruikt ze `/roelandsveld-new/`; op een eigen domein gebruikt ze `/`.

## Wat is lokaal gebouwd?
Home, De club, Tennis & padel, Lessen & jeugd, Padelschool, Tennisschool, Lidmaatschap, Praktische info & contact, Reservatiereglement, Winteruren, FAQ, Matchplanner, Privacy, Clubvoorwaarden, Veilig sporten, Sponsors, Nieuws-overzicht en nieuwsdetail.

## Externe diensten
Enkel diensten die niet lokaal door een statische HTML-site uitgevoerd kunnen worden, blijven extern:
- Tennis en Padel Vlaanderen voor reserveringen en formele lidmaatschapsacties.
- Google Maps voor routebeschrijving.
- mailto-/tel-links voor contact.

Er staan geen interne links meer naar `tpcroelandsveld.be` in de HTML-pagina's. Sommige officiële teksten (reservatiereglement, privacy, clubvoorwaarden, veilig sporten), actuele tarieven, lesdata en sponsorlogo's moeten nog integraal worden gecontroleerd en ingevuld. De placeholders vermelden dit duidelijk; ze zijn geen vervanging van de officiële juridische teksten.

## Nieuwsbeheer
De pagina's en Decap CMS-configuratie zijn voorbereid, maar de beveiligde GitHub OAuth-authenticatie is nog niet ingesteld. Zonder een auth endpoint werkt inloggen via `/admin/` nog niet. Ook moet de echte GitHub-repository worden ingevuld in `admin/config.yml`.

## Contact en nieuwsbrief
Contact werkt via e-mail en telefoon. Er is nog geen nieuw online contactformulier of nieuwsbriefverwerking geactiveerd; koppel daarvoor een dienst en test bezorging vóór publicatie.

## Eigen domein
Koppel `tpcroelandsveld.be` pas wanneer de volledige inhoud, links en functies zijn gecontroleerd. Volg daarna GitHub's officiële custom-domain stappen en wijzig DNS-records zorgvuldig.


## Evenementen en inschrijvingen
De pagina Nieuws & events bevat de toekomstige gepubliceerde clubitems die op de huidige homepage zichtbaar zijn: Meli Melo (23 oktober 2026), Voorjaarsinterclub 2027 en Lid worden 2027. De eerste twee hebben een e-mailfallback zolang de echte Google Forms-links nog niet zijn aangemaakt. Lidmaatschap blijft via de officiële Tennis en Padel Vlaanderen-procedure lopen. Zie `GOOGLE-FORMS-INSTELLING.txt` voor de concrete formulieropzet.

## Tennis- en padellessen
De pagina's `padelschool.html` en `tennisschool.html` bevatten geen links naar oude lespagina's of aanbieders. Zodra actuele inschrijvingslinks beschikbaar zijn, kunnen die lokaal worden toegevoegd.
