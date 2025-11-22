export const siteContent = {
  home: {
    hero: {
      tag: "von grund auf neu gedacht",
      title: "KleHausen"
    },
    panels: {
      announcementsCopy: "",
      eventsCopy: "Live & geplante Community-Termine.",
      projectsCopy: "Status-Übersicht unserer wichtigsten Builds."
    },
    announcements: [
      {
        status: "live",
        label: "Devlog",
        date: "2025-11-22",
        dateLabel: "22.11.2025",
        title: "Whitelist öffnet demnächst",
        description: "Wir finalisieren aktuell die Server-Checks. Danach geht die Whitelist-Phase live.",
        bullets: [
          "Tester:innen wählen wir im Discord aus.",
          "Roadmap-Feedback wandert direkt ins nächste Sprint."
        ]
      },
      {
        status: "info",
        label: "Community",
        date: "2025-11-18",
        dateLabel: "18.11.2025",
        title: "Creator Toolkit v1",
        description: "Brand Assets, Shader Presets und Social Templates stehen nun bereit.",
        bullets: [
          "Download im Discord unter #downloads.",
          "Lizenz gilt für Streams & Shorts."
        ]
      },
      {
        status: "soon",
        label: "Event",
        date: "2025-11-15",
        dateLabel: "15.11.2025",
        title: "Community Abend",
        description: "Gemütlicher Bau-Abend mit Q&A über kommende Features.",
        bullets: [
          "Start 20:00 Uhr, Voice #lodge.",
          "Highlight-Clips teilen wir danach im Forum."
        ]
      }
    ],
    events: [
      {
        kind: "live",
        dateLabel: "29. Nov · 20:00",
        title: "Bau & Chill Night",
        description: "Entspannte Session im Voice #lodge mit Q&A zur Roadmap."
      },
      {
        kind: "soon",
        dateLabel: "03. Dez · 18:30",
        title: "Mini-Games Testflug",
        description: "Interne Tests für neue Event-Suite – Spots via Discord."
      }
    ],
    projectTracks: [
      {
        stage: "Build",
        progress: "80%",
        title: "Spawn-Überarbeitung",
        description: "Neue Wegeführung, Lobby-Infoscreens und Portal-Ring."
      },
      {
        stage: "Design",
        progress: "60%",
        title: "Economy 2.0",
        description: "Verbindet Auktionen, Direktverkäufe und Händler-Events."
      },
      {
        stage: "Alpha",
        progress: "40%",
        title: "Moderationsportal",
        description: "Case-Management mit Realtime-Logs für das komplette Team."
      }
    ],
    portal: {
      tag: "Mehr entdecken",
      heading: "Alles auf einen Blick",
      cards: [
        {
          tag: "About",
          title: "Wer wir sind",
          description: "Unsere Story, Werte und warum KleHausen wieder zurück ist.",
          href: "about.html"
        },
        {
          tag: "SMP",
          title: "Survival Fokus",
          description: "Alle Infos zu unserem puren Survival-Erlebnis und QOL-Features.",
          href: "smp.html"
        },
        {
          tag: "Projekte",
          title: "Roadmap",
          description: "Was wir aktuell bauen und welche Tools als Nächstes kommen.",
          href: "projects.html"
        },
        {
          tag: "Regeln",
          title: "Fairplay",
          description: "Der Rahmen für respektvolles Zusammenspielen auf dem Server.",
          href: "regeln.html"
        },
        {
          tag: "FAQ",
          title: "Antworten",
          description: "Whitelist, Versionen, eigene Projekte – hier gibt es die Details.",
          href: "faq.html"
        },
        {
          tag: "Team",
          title: "Die Crew",
          description: "Lerne die Menschen kennen, die KleHausen am Laufen halten.",
          href: "team.html"
        }
      ]
    }
  },
  about: {
    hero: {
      tag: "About",
      title: "Wer wir sind"
    },
    blockTag: "Unsere Story",
    heading: "Willkommen bei KleHausen!",
    paragraphs: [
      "Wir sind ein Server-Projekt mit Geschichte, das jetzt mit voller Energie und brandneuen Ideen wieder durchstartet. Unser Ziel ist es, euch – und uns selbst – eine großartige Zeit zu bereiten. Viele Angebote dort draußen haben uns nicht überzeugt, also nehmen wir die Dinge in die eigene Hand und setzen auf eine Mischung aus ehrlichem Handwerk, Technik-Liebe und Community-Fokus.",
      "Unser größter Vorteil: Wir coden unsere Systeme größtenteils selbst. Dadurch bleiben wir flexibel, reagieren schneller auf Feedback und entwickeln Features, die exakt zu unserer Community passen. Keine Massenware – sondern Tools, die zu KleHausen gehören."
    ],
    grid: [
      {
        title: "Vision",
        text: "Ein Server, der sich modern anfühlt, vertraut bleibt und stetig gemeinsam wächst."
      },
      {
        title: "Mission",
        text: "Wir gestalten Systeme, Events und Tools so, dass sie echte Mehrwerte liefern."
      },
      {
        title: "Community",
        text: "Ihr seid der Kern: Feedback-Schleifen, Workshops und Co-Creation gehören fest dazu."
      }
    ]
  },
  smp: {
    hero: {
      tag: "SMP",
      title: "Qualität statt Quantität"
    },
    blockTag: "Survival",
    heading: "Qualität statt Quantität",
    paragraphs: [
      "\"Och nicht schon wieder der nächste SMP mit viel zu viel sinnlosen Features…\" Diesen Gedanken kennen wir. Darum konzentriert sich KleHausen auf ein pures Survival-Erlebnis. Wir implementieren nur, was wirklich nötig ist – diese Systeme dann aber fein poliert, stabil und intuitiv."
    ],
    features: [
      {
        title: "Modernes Auktionshaus:",
        description: "Ein klares UI direkt am Spawn und per Befehl erreichbar. Kauf- und Verkaufsprozesse laufen schnell, transparent und sicher."
      },
      {
        title: "Direktverkauf:",
        description: "Items lassen sich überall per /sell veräußern. Perfekt für kurze Sessions und Spieler:innen, die keine Zeit verlieren wollen."
      },
      {
        title: "Freischalt-System:",
        description: "Manche Quality-of-Life-Features werden erst gemeinsam freigespielt – Fortschritt fühlt sich damit verdient an."
      }
    ],
    outro: "Unser technischer Stack lässt uns neue Mechaniken live evaluieren, ohne das klassische Survival-Feeling zu verlieren. Qualität schlägt Quantität – immer."
  },
  projectsPage: {
    hero: {
      tag: "Projekte",
      title: "Woran wir arbeiten"
    },
    blockTag: "Roadmap",
    heading: "Woran wir arbeiten",
    cards: [
      {
        title: "Spawn-Überarbeitung",
        text: "Neues Layout mit klaren Wegen, klarer Beschilderung und interaktiven Punkten."
      },
      {
        title: "Community Hub",
        text: "Ein Social-Overlay direkt im Client zum schnellen Austausch zwischen den Spielern."
      },
      {
        title: "Eventsuite",
        text: "Werkzeuge, um Mini-Events mit wenigen Klicks live zu bringen – inklusive Automationen."
      },
      {
        title: "Economy 2.0",
        text: "Verknüpft Auktionen, Direktverkäufe und saisonale Händler zu einer lebendigen Wirtschaft."
      },
      {
        title: "Moderationsportal",
        text: "Transparente Case-Verwaltung, Statistiken und Audit-Logs für das gesamte Team."
      },
      {
        title: "Creator Toolkit",
        text: "Brand Assets, Templates und Effekte für Content-Creator, die über KleHausen berichten."
      }
    ]
  },
  rules: {
    hero: {
      tag: "Regeln",
      title: "Unser Rahmen für Fairplay"
    },
    blockTag: "Server-Policy",
    heading: "Unser Rahmen für Fairplay",
    rules: [
      "Respektiert andere Spieler:innen – keine Beleidigungen, kein Griefing.",
      "Keine unerlaubten Modifikationen, Cheats oder Makros.",
      "PvP ist nur erlaubt, wenn alle Beteiligten zustimmen.",
      "Der Spawn bleibt eine sichere Zone, baut dort nichts ohne Freigabe.",
      "Farmen & Redstone nur so, dass der Server stabil bleibt.",
      "Wer Bugs findet, meldet sie – ausnutzen führt zu Sanktionen.",
      "Community-Events haben eigene Regeln, die gelten zusätzlich.",
      "Das Team behält sich finale Entscheidungen vor.",
      "Anweisungen des Teams sind stets zu befolgen."
    ]
  },
  faq: {
    hero: {
      tag: "FAQ",
      title: "Häufige Fragen"
    },
    blockTag: "Antworten",
    heading: "Häufige Fragen",
    items: [
      {
        question: "Wie komme ich auf den Server?",
        answer: "Bewirb dich über unseren Discord. Dort erhältst du Whitelist-Slots und alle technischen Infos."
      },
      {
        question: "Gibt es ein Mindestalter?",
        answer: "Wir empfehlen 16+, da viele Systeme Eigenverantwortung verlangen. Ausnahmen sind nach Gespräch möglich."
      },
      {
        question: "Kann ich eigene Projekte einreichen?",
        answer: "Pitch dein Konzept im Discord, wir schauen dann gemeinsam, wie es in die Roadmap passt."
      },
      {
        question: "Welche Version spielt ihr?",
        answer: "Wir laufen auf der aktuellsten stabilen Java-Version und testen neue Releases zunächst intern."
      }
    ]
  },
  team: {
    hero: {
      tag: "Team",
      title: "Die Crew hinter KleHausen"
    },
    blockTag: "Menschen",
    heading: "Wir halten zusammen",
    members: [
      {
        role: "Owner",
        name: "Klim",
        bio: "Chaotisch sympathisch, hält Vision und Community warm.",
        responsibilities: ["Community-Roadmap", "Event Moderation"],
        roleKey: "owner"
      },
      {
        role: "Owner",
        name: "LeysCraft",
        bio: "Plant die großen Schritte und sorgt für klare Prozesse.",
        responsibilities: ["Strategie & Partner", "Teamkultur"],
        roleKey: "owner"
      },
      {
        role: "Owner",
        name: "Richi",
        bio: "Technik-Herz und blitzschneller Umsetzer neuer Features.",
        responsibilities: ["Server Infrastruktur", "Automation"],
        roleKey: "owner"
      },
      {
        role: "Developa",
        name: "Matti",
        bio: "Main-Dev – deine erste Adresse bei Bot- und UI-Fragen.",
        responsibilities: ["Discord Bots", "Game Features"],
        roleKey: "dev"
      },
      {
        role: "Admin",
        name: "Jonas",
        bio: "Hält Organisation & Support auf Kurs – zuverlässig wie immer.",
        responsibilities: ["Support Tickets", "QA & Reports"],
        roleKey: "admin"
      }
    ]
  }
};
