# KleHausen Website

Dieses Repo enthält eine reine HTML/CSS-Version der KleHausen-Seite. Alle Texte liegen direkt in den jeweiligen HTML-Dateien, damit jede Person ohne Build- oder JavaScript-Wissen Inhalte anpassen kann.

## Inhalte bearbeiten

| Bereich | Datei | Hinweise |
| --- | --- | --- |
| Startseite | `index.html` | Abschnitte sind mit Kommentaren versehen (z. B. `<!-- Announcement cards -->`). Kopiere einfach ein vorhandenes Element (etwa `<article class="announcement-card">`) um neue Karten/Event-Zeilen anzulegen oder zu löschen. |
| About/SMP/Projekte/Regeln | `about.html`, `smp.html`, `projects.html`, `regeln.html` | Texte stehen als normale `<p>` oder Listen. Direkt im Markup ändern. |
| FAQ | `faq.html` | Jede Frage ist ein `<article class="faq-item">`. Dupliziere den Block und passe Frage/Antwort an. |
| Team | `team.html` | Team-Mitglieder liegen als `<article class="team-card">`. Rolle (`data-role`) steuert den Rahmen-Farbton. |

## Interaktivität

- Die einzige JavaScript-Funktion (`script.js`) öffnet/schließt die FAQ-Akkordeons. Es sind keine Datenquellen oder Templates mehr notwendig.
- Wenn du weitere interaktive Bereiche ergänzen möchtest, halte dich am besten an einfache HTML-Strukturen und ergänze Kommentare wie auf der Startseite.

## Assets

- `banner.png` steuert den Hero-Hintergrund.
- `logo.png` dient als Logo im Header und als Favicon (`<link rel="icon">`). Ersetze die Dateien mit neuen Bildern, falls nötig.

## Lokale Vorschau

```bash
cd /workspaces/KleHausen-seite-remake
python -m http.server 4173
```
Öffne anschließend `http://localhost:4173` im Browser.
