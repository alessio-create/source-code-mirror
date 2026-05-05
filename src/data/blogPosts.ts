export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  /** Legacy flat content kept for backward compatibility (auto-derived from sections). */
  content: string[];
}

const buildContent = (intro: string, sections: BlogSection[]): string[] => [
  intro,
  ...sections.flatMap((s) => s.paragraphs),
];

const rawPosts: Omit<BlogPost, "content">[] = [
  {
    slug: "separazione-consensuale-o-giudiziale",
    title: "Separazione consensuale o giudiziale: quale scegliere?",
    excerpt:
      "Le differenze fondamentali tra i due percorsi, i tempi, i costi e quando è possibile optare per la via consensuale.",
    category: "Separazioni",
    date: "10 Aprile 2026",
    readTime: "8 min",
    intro:
      "Affrontare una separazione significa prendere decisioni importanti in un momento di grande fragilità emotiva. La prima scelta, spesso decisiva per i mesi successivi, riguarda la procedura: consensuale o giudiziale. In questa guida ti accompagno tra le differenze concrete, i tempi reali, i costi e i criteri che, nella mia esperienza, fanno davvero la differenza per te e per i tuoi figli.",
    sections: [
      {
        id: "differenze",
        heading: "Le differenze tra consensuale e giudiziale",
        paragraphs: [
          "La separazione consensuale presuppone un accordo completo tra i coniugi su tutti i temi rilevanti: affidamento e collocamento dei figli, assegno di mantenimento per coniuge e figli, assegnazione della casa coniugale e regolamentazione dei beni comuni. L'accordo viene poi sottoposto al tribunale per l'omologa.",
          "La separazione giudiziale, invece, si apre quando il dialogo è ormai impossibile o quando uno dei coniugi non intende sottoscrivere alcun accordo. In questo caso è il giudice a decidere, dopo udienze, memorie, prove documentali e talvolta consulenze tecniche, ogni singolo aspetto controverso.",
          "Si tratta, in entrambi i casi, di percorsi pienamente legittimi: la scelta non è una questione di principio, ma di concreta possibilità di trovare un terreno comune con l'altra parte.",
        ],
      },
      {
        id: "tempi-costi",
        heading: "Tempi, costi e impatto emotivo",
        paragraphs: [
          "I tempi della consensuale sono tipicamente di 2–4 mesi dalla presentazione del ricorso, con un'unica udienza e una decisione del tribunale relativamente rapida. La giudiziale, al contrario, può richiedere 12–24 mesi solo per il primo grado, con istruttorie, audizioni dei figli, eventuali CTU e udienze più articolate.",
          "Sul piano economico, la consensuale comporta costi significativamente più bassi: minore impegno processuale, una sola fase, contributo unificato ridotto. La giudiziale richiede invece un investimento più importante, sia in termini di onorari sia di spese di causa.",
          "Va però considerato un costo meno visibile ma altrettanto reale: quello emotivo. Una causa contenziosa lunga incide sulla serenità tua, dei figli e perfino sulla qualità della relazione con l'ex coniuge negli anni successivi.",
        ],
      },
      {
        id: "negoziazione-assistita",
        heading: "La negoziazione assistita come alternativa",
        paragraphs: [
          "La negoziazione assistita da avvocati, introdotta dalla Legge 162/2014, è oggi uno degli strumenti più efficaci per definire la separazione fuori dalle aule di tribunale. Coniugi e legali sottoscrivono una convenzione che, una volta autorizzata o nulla osta dalla Procura, ha la stessa efficacia di un provvedimento giudiziale.",
          "Il vantaggio è duplice: si conservano i benefici della via consensuale (rapidità, costi contenuti, riservatezza) e si lavora in un contesto strutturato, con i legali a presidio degli interessi di ciascun coniuge e, soprattutto, dei figli.",
        ],
      },
      {
        id: "quando-scegliere",
        heading: "Quando privilegiare l'una o l'altra strada",
        paragraphs: [
          "Nella mia pratica suggerisco sempre di tentare la via consensuale ogni volta che esista un margine reale di dialogo, anche minimo. Una mediazione condotta con professionalità può sbloccare situazioni che sembravano destinate al contenzioso.",
          "La giudiziale resta indispensabile quando vi sono violenze, condotte gravemente pregiudizievoli per i figli, occultamento di patrimoni o un rifiuto sistematico di ogni proposta. In questi casi, ritardare la tutela giudiziale può essere dannoso.",
          "Se stai valutando una separazione e non sai quale strada intraprendere, contattami per una consulenza riservata: analizzeremo insieme la tua situazione e individueremo il percorso più adatto alle tue esigenze e a quelle della tua famiglia.",
        ],
      },
    ],
  },
  {
    slug: "affidamento-condiviso-diritti-doveri",
    title: "Affidamento condiviso: diritti e doveri dei genitori",
    excerpt:
      "Cosa prevede la legge sull'affidamento condiviso, come funziona nella pratica e cosa fare se l'altro genitore non collabora.",
    category: "Minori",
    date: "2 Aprile 2026",
    readTime: "9 min",
    intro:
      "L'affidamento condiviso non è un'eccezione: è la regola. Ma sapere che la legge lo prevede non basta per viverlo serenamente. In questa guida ti spiego cosa significa concretamente, quali decisioni si prendono insieme e quali no, come gestire i contrasti più frequenti e quando è possibile chiedere un affidamento esclusivo.",
    sections: [
      {
        id: "cos-e",
        heading: "Cos'è l'affidamento condiviso",
        paragraphs: [
          "Introdotto dalla Legge 54/2006, l'affidamento condiviso è oggi il regime ordinario in Italia: significa che entrambi i genitori, anche dopo la separazione, conservano la responsabilità genitoriale e partecipano alle scelte fondamentali per i figli.",
          "Non si tratta di una semplice 'metà tempo': si tratta di un modello di corresponsabilità, in cui i genitori restano insieme protagonisti della crescita dei figli, pur vivendo in case diverse.",
        ],
      },
      {
        id: "decisioni",
        heading: "Decisioni importanti e quotidiane",
        paragraphs: [
          "Le decisioni di maggiore interesse, istruzione, salute, educazione religiosa, scelte di vita rilevanti, vanno assunte di comune accordo. In caso di disaccordo non risolvibile, ciascun genitore può rivolgersi al giudice.",
          "Le decisioni di ordinaria amministrazione, invece, vengono assunte autonomamente dal genitore che si trova con il figlio in quel momento: orari, attività quotidiane, pasti, piccole scelte organizzative.",
          "Comprendere questa distinzione è essenziale per evitare conflitti su questioni che non li meritano e per portare davanti al giudice solo ciò che davvero richiede una decisione condivisa.",
        ],
      },
      {
        id: "calendario",
        heading: "Tempi di permanenza e collocamento",
        paragraphs: [
          "Il collocamento prevalente individua il genitore presso cui il figlio vive in via principale; non incide però sulla titolarità della responsabilità genitoriale, che resta condivisa.",
          "Il calendario di frequentazione viene stabilito di comune accordo o, in mancanza, dal giudice, considerando età dei figli, distanza tra le abitazioni, esigenze scolastiche e lavorative dei genitori. Sempre più spesso si adottano modelli di permanenza paritetica, quando le condizioni lo consentono.",
        ],
      },
      {
        id: "non-collabora",
        heading: "Quando l'altro genitore non collabora",
        paragraphs: [
          "Il problema più frequente nella pratica è la mancata cooperazione: violazioni reiterate del calendario, decisioni prese unilateralmente, ostacoli al rapporto con l'altro genitore. La legge offre strumenti precisi per intervenire.",
          "Il primo passo è sempre documentare: messaggi, e-mail, comunicazioni della scuola, certificazioni mediche. Senza prove concrete è molto difficile far valere le proprie ragioni davanti al giudice.",
          "Quando il dialogo è impossibile, si può ricorrere all'art. 709-ter c.p.c. per chiedere ammonimento, sanzioni pecuniarie, risarcimento del danno e, nei casi più gravi, la modifica del regime di affidamento.",
        ],
      },
      {
        id: "esclusivo",
        heading: "Affidamento esclusivo: quando è possibile",
        paragraphs: [
          "L'affidamento esclusivo è un'eccezione e va richiesto motivatamente: si dispone solo quando l'affidamento all'altro genitore risulta contrario all'interesse del minore (gravi inadempienze, condotte pregiudizievoli, totale disinteresse).",
          "Anche in regime di affido esclusivo, il genitore non collocatario conserva il diritto di vigilare sull'istruzione e sull'educazione dei figli e di essere consultato sulle decisioni di maggiore interesse.",
          "Se hai dubbi sull'affidamento dei tuoi figli o stai affrontando difficoltà con l'altro genitore, contattami per una consulenza personalizzata: troveremo insieme la strada più tutelante per i tuoi figli.",
        ],
      },
    ],
  },
  {
    slug: "assegno-mantenimento-calcolo",
    title: "Assegno di mantenimento: come viene calcolato?",
    excerpt:
      "I criteri utilizzati dal giudice per determinare l'importo dell'assegno e quando è possibile chiederne la modifica.",
    category: "Divorzio",
    date: "25 Marzo 2026",
    readTime: "8 min",
    intro:
      "Quanto spetta? Per quanto tempo? Cosa succede se cambiano le condizioni economiche? Sono le domande che mi vengono rivolte più spesso durante il primo colloquio. In questa guida proverò a fare chiarezza sui criteri reali con cui viene determinato l'assegno di mantenimento, distinguendo bene tra assegno per il coniuge, assegno per i figli e assegno divorzile.",
    sections: [
      {
        id: "tipologie",
        heading: "Le diverse tipologie di assegno",
        paragraphs: [
          "Esistono tre figure distinte che spesso vengono confuse: l'assegno di mantenimento per il coniuge in sede di separazione, l'assegno per i figli e l'assegno divorzile. Hanno presupposti, criteri e durata differenti.",
          "L'assegno per il coniuge spetta a chi non ha redditi adeguati a mantenere un tenore di vita autonomo dignitoso e non è in grado di procurarseli. L'assegno per i figli è dovuto sempre, anche in caso di affido condiviso, ed è proporzionato alle esigenze del minore e ai redditi di entrambi i genitori.",
        ],
      },
      {
        id: "criteri-coniuge",
        heading: "Criteri per l'assegno al coniuge",
        paragraphs: [
          "Il giudice valuta più elementi insieme: condizioni economiche e patrimoniali di ciascuno, ragioni della separazione (in via residuale), durata del matrimonio, contributo dato alla conduzione familiare e alla formazione del patrimonio comune, capacità lavorativa effettiva.",
          "Le Sezioni Unite della Cassazione, con la sentenza n. 18287/2018 in tema di assegno divorzile, hanno consolidato un criterio composito: non più solo il tenore di vita matrimoniale, ma anche la funzione assistenziale, compensativa e perequativa dell'assegno.",
        ],
      },
      {
        id: "figli",
        heading: "Mantenimento dei figli: come si calcola",
        paragraphs: [
          "Per i figli si considerano: attuali esigenze del minore, tenore di vita goduto in costanza di convivenza, tempi di permanenza presso ciascun genitore, risorse economiche dei genitori e valenza economica dei compiti di cura assunti.",
          "L'assegno copre le spese ordinarie. Le spese straordinarie (sanitarie, scolastiche, sportive di rilievo, viaggi di istruzione) sono di norma ripartite al 50% tra i genitori, salvo diversa intesa o decisione del giudice.",
          "Esistono protocolli e tabelle in uso presso vari tribunali (es. tabelle del Tribunale di Milano e di Monza) che offrono parametri orientativi: utili come riferimento, mai automatici.",
        ],
      },
      {
        id: "modifica",
        heading: "Quando si può modificare l'assegno",
        paragraphs: [
          "L'assegno può essere modificato, in aumento o in diminuzione, quando intervengono mutamenti rilevanti e non transitori delle condizioni economiche: perdita del lavoro, malattia invalidante, nuovo impiego stabile del beneficiario, nascita di nuovi figli da altra unione.",
          "La domanda di revisione si propone allo stesso tribunale che ha emesso il provvedimento. È fondamentale documentare con precisione la modifica delle condizioni: senza prove, la richiesta viene rigettata.",
        ],
      },
      {
        id: "consigli",
        heading: "Un consiglio pratico",
        paragraphs: [
          "Diffida di stime fatte 'a tavolino' senza un'analisi approfondita della tua situazione patrimoniale, reddituale e familiare. Ogni caso è diverso e merita una valutazione personalizzata.",
          "Per una stima realistica del tuo caso, prenota un colloquio: analizzeremo insieme i documenti rilevanti e definiremo insieme la strategia migliore.",
        ],
      },
    ],
  },
  {
    slug: "amministrazione-sostegno-guida",
    title: "Amministrazione di sostegno: cos'è e quando richiederla",
    excerpt:
      "Una guida completa alla misura di protezione per le persone fragili, dalla richiesta alla nomina dell'amministratore.",
    category: "Persone",
    date: "18 Marzo 2026",
    readTime: "10 min",
    intro:
      "Quando una persona cara non è più in grado di gestire da sola i propri interessi, per malattia, età avanzata, disabilità, la famiglia si trova spesso disorientata. L'amministrazione di sostegno è lo strumento più moderno e flessibile previsto dal nostro ordinamento per proteggere senza umiliare. In questa guida ti spiego come funziona, chi può richiederla, come si svolge il procedimento e quali sono i compiti dell'amministratore.",
    sections: [
      {
        id: "cos-e",
        heading: "Cos'è e perché è preferibile all'interdizione",
        paragraphs: [
          "L'amministrazione di sostegno è stata introdotta dalla Legge 6/2004 con l'obiettivo di tutelare le persone prive in tutto o in parte di autonomia, comprimendo il meno possibile la loro capacità di agire.",
          "A differenza dell'interdizione e dell'inabilitazione, istituti più rigidi e residuali, l'amministrazione di sostegno è ritagliata sulla persona: i poteri dell'amministratore sono definiti dal giudice in modo puntuale, su misura delle reali esigenze del beneficiario.",
          "Questo principio di proporzionalità è centrale: l'obiettivo è sostenere, non sostituire. Il beneficiario conserva tutti i diritti che non sono espressamente attribuiti all'amministratore.",
        ],
      },
      {
        id: "quando",
        heading: "Quando richiederla",
        paragraphs: [
          "La misura è indicata in presenza di infermità o menomazione fisica o psichica che rendano impossibile o difficoltoso provvedere ai propri interessi: anziani con decadimento cognitivo, persone con gravi disabilità, soggetti con dipendenze o disturbi psichici, malati in fase avanzata.",
          "Non è necessaria una totale incapacità: anche difficoltà parziali, gestire conti, firmare contratti, seguire le pratiche sanitarie, possono giustificare la richiesta. Spesso è meglio intervenire per tempo, prima che si presentino atti pregiudizievoli.",
        ],
      },
      {
        id: "chi-puo",
        heading: "Chi può presentare la domanda",
        paragraphs: [
          "Il ricorso può essere presentato dallo stesso beneficiario, dal coniuge, dal convivente stabile, dai parenti entro il quarto grado, dagli affini entro il secondo grado, dal tutore o curatore, dal pubblico ministero.",
          "Anche i responsabili dei servizi sanitari e sociali che hanno in carico la persona sono tenuti a segnalare la situazione al giudice tutelare quando ne ravvisano la necessità.",
        ],
      },
      {
        id: "procedura",
        heading: "Come si svolge il procedimento",
        paragraphs: [
          "Il ricorso si presenta al giudice tutelare del luogo di residenza o domicilio del beneficiario. Il procedimento è snello: non richiede l'assistenza obbligatoria di un avvocato, ma nei casi complessi è fortemente consigliata.",
          "Il giudice fissa un'udienza per sentire personalmente il beneficiario, anche presso il suo domicilio se necessario. Valuta poi le risultanze, individua l'amministratore più idoneo e ne definisce con dettaglio i poteri.",
          "Il decreto di nomina indica con precisione: durata dell'incarico, atti che l'amministratore può compiere in nome del beneficiario, atti che richiedono l'assistenza dell'amministratore, eventuali limiti di spesa, obblighi di rendiconto periodico.",
        ],
      },
      {
        id: "amministratore",
        heading: "Chi è l'amministratore di sostegno",
        paragraphs: [
          "L'amministratore può essere un familiare, una persona di fiducia indicata dallo stesso beneficiario o, in mancanza, un professionista nominato d'ufficio (avvocato o commercialista).",
          "Il giudice predilige sempre, ove possibile, una persona vicina al beneficiario: la prossimità affettiva è un valore che la legge riconosce e tutela.",
          "L'amministratore opera nell'esclusivo interesse del beneficiario, è tenuto a rendere conto della propria gestione e risponde dei danni causati da inadempimenti gravi.",
        ],
      },
      {
        id: "controlli",
        heading: "Controlli, revoca e modifiche",
        paragraphs: [
          "Il giudice tutelare vigila costantemente sull'operato dell'amministratore: può modificarne i poteri, ampliarli o ridurli, e può revocarlo in qualsiasi momento se emergono profili di inidoneità.",
          "Gli atti compiuti in violazione dei limiti stabiliti dal decreto sono annullabili. Per questo è essenziale che l'amministratore conosca con precisione il perimetro del proprio incarico.",
          "Se hai un familiare che necessita di protezione giuridica, contattami: valuteremo insieme se l'amministrazione di sostegno è la soluzione più adatta e ti accompagnerò in ogni passaggio del procedimento.",
        ],
      },
    ],
  },
];

export const blogPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  content: buildContent(p.intro, p.sections),
}));
