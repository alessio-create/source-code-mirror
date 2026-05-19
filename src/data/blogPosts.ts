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
    slug: "separazione-consensuale-giudiziale-quale-scegliere",
    title: "Separazione consensuale o giudiziale: come scegliere",
    excerpt:
      "Differenze tra separazione consensuale e giudiziale: tempi, costi, procedura post-Riforma Cartabia. La guida dello Studio Di Vietro in Brianza.",
    category: "Separazioni",
    date: "19 Maggio 2026",
    readTime: "9 min",
    intro:
      "Quando un matrimonio entra in crisi, una delle prime domande che ci sentiamo rivolgere nello studio è sempre la stessa: \"Devo fare la separazione consensuale o giudiziale?\". È una domanda legittima: dietro c'è il bisogno di sapere quanto durerà, quanto costerà, quanto sarà doloroso. Non c'è una risposta uguale per tutti — dipende dalla situazione concreta, dal livello di dialogo che ancora esiste con il coniuge, dalla presenza di figli, dai beni in gioco. In questa guida proviamo a spiegare, con linguaggio semplice ma rigoroso, le differenze sostanziali tra le due procedure e come la Riforma Cartabia (in vigore dal 28 febbraio 2023) ha cambiato profondamente lo scenario.",
    sections: [
      {
        id: "cosa-significa",
        heading: "Cosa significa \"separazione\" oggi",
        paragraphs: [
          "La separazione non è il divorzio: è una fase intermedia in cui il matrimonio non viene sciolto, ma vengono sospesi alcuni dei doveri reciproci tra i coniugi — in particolare quello di fedeltà e di coabitazione. Restano invece in piedi altri obblighi, come l'assistenza morale e materiale verso il coniuge economicamente più debole.",
          "Solo con il divorzio, in un momento successivo, il vincolo matrimoniale viene definitivamente sciolto. La separazione è quindi il \"primo passo legale\" verso la fine del matrimonio, e può seguire due strade molto diverse: quella consensuale (i coniugi sono d'accordo su tutto) oppure quella giudiziale (i coniugi non riescono ad accordarsi e affidano la decisione al giudice).",
        ],
      },
      {
        id: "consensuale",
        heading: "La separazione consensuale: come funziona davvero",
        paragraphs: [
          "La separazione consensuale è la strada di chi, pur volendo separarsi, riesce ancora a trovare un accordo con il proprio coniuge sulle condizioni della separazione: dove vivranno i figli, come saranno divisi i tempi con loro, quanto verserà uno dei due all'altro a titolo di mantenimento, come saranno gestiti la casa coniugale e i beni in comune.",
          "Dopo la Riforma Cartabia, questa procedura è disciplinata dall'articolo 473-bis.51 del codice di procedura civile, che ha sostituito il vecchio art. 711. Le novità più rilevanti sono tre, e cambiano radicalmente l'esperienza concreta dei nostri assistiti.",
          "Primo: spesso non serve nemmeno andare in tribunale. L'articolo 473-bis.12 c.p.c. consente alle parti di rinunciare alla comparizione personale: tutto si svolge tramite scambio di atti scritti. Secondo: si può chiedere subito anche il divorzio, contestualmente alla domanda di separazione, risparmiando mesi di attesa. Terzo: maggiore autonomia tra coniugi, che possono regolare i rapporti patrimoniali con ampi margini di libertà, anche disponendo trasferimenti immobiliari direttamente nel ricorso.",
          "Per chi sta valutando questa strada, è utile sapere che il ricorso deve essere accompagnato da disponibilità reddituali e patrimoniali dell'ultimo triennio, estratti conto bancari e — quando ci sono figli minori — il cosiddetto piano genitoriale: un documento che descrive impegni e attività quotidiane dei figli (scuola, attività extrascolastiche, vacanze).",
        ],
      },
      {
        id: "giudiziale",
        heading: "La separazione giudiziale: quando è inevitabile",
        paragraphs: [
          "La separazione giudiziale è il percorso che si attiva quando l'accordo non è possibile. Può succedere per molte ragioni: uno dei due coniugi rifiuta di separarsi, oppure le posizioni sull'assegno di mantenimento o sull'affidamento dei figli sono troppo distanti, oppure ancora ci sono comportamenti gravi di una parte che giustificano una richiesta di \"addebito\".",
          "La procedura è disciplinata dagli articoli 473-bis e seguenti del codice di procedura civile e segue le regole del processo di famiglia post-Cartabia. Si tratta di un vero e proprio processo: c'è un ricorso introduttivo, una fase di prima udienza con eventuali provvedimenti urgenti (per esempio sull'affidamento provvisorio dei figli o sul mantenimento immediato), una fase istruttoria con eventuali testimonianze e perizie, e infine la sentenza.",
          "Anche in questo caso la Riforma Cartabia ha portato semplificazioni — per esempio la possibilità di chiedere già nel ricorso di separazione anche la pronuncia di divorzio (art. 473-bis.49 c.p.c.) — ma resta un procedimento più lungo e più impegnativo sul piano emotivo.",
        ],
      },
      {
        id: "differenze-pratiche",
        heading: "Le differenze pratiche: tempi, costi e impatto emotivo",
        paragraphs: [
          "Tempi. Una separazione consensuale, oggi, può chiudersi in 3-6 mesi dal deposito del ricorso. Una giudiziale richiede in media 18-36 mesi, e nei casi più complessi anche oltre.",
          "Costi. I costi della consensuale sono significativamente inferiori, perché il lavoro dell'avvocato si concentra sulla redazione dell'accordo e sul ricorso congiunto. Nella giudiziale, l'attività difensiva si estende su più udienze, atti, eventuali consulenze tecniche.",
          "Impatto emotivo. La consensuale chiude un capitolo della vita in modo dignitoso, mantenendo aperti i canali di dialogo — cosa preziosa soprattutto quando ci sono figli. La giudiziale comporta un confronto adversariale che lascia segni profondi sul piano personale e familiare.",
        ],
      },
      {
        id: "quando-scegliere",
        heading: "Quando conviene scegliere l'una o l'altra",
        paragraphs: [
          "La scelta non è solo tecnica, è strategica. La separazione consensuale è la strada più sensata quando esiste ancora un minimo di dialogo, quando entrambi vogliono davvero la separazione e quando i punti di disaccordo possono essere negoziati con l'aiuto degli avvocati.",
          "La giudiziale, al contrario, è inevitabile quando uno dei coniugi rifiuta di separarsi, quando c'è una grave asimmetria di potere (per esempio in situazioni di violenza domestica o di occultamento patrimoniale), o quando si vuole ottenere l'addebito della separazione.",
          "Esiste poi una terza via, regolata dalla legge 162/2014: la negoziazione assistita dagli avvocati. È una procedura del tutto stragiudiziale che può portare a un accordo equivalente, a tutti gli effetti di legge, a una separazione consensuale omologata — applicabile anche in presenza di figli minori.",
        ],
      },
      {
        id: "ruolo-avvocato",
        heading: "Il ruolo dell'avvocato in entrambe le procedure",
        paragraphs: [
          "Anche nella separazione consensuale, l'avvocato non è una \"formalità\". È la figura che protegge i diritti del proprio assistito durante una fase della vita in cui l'emotività spesso porta a sottovalutare implicazioni importanti — soprattutto patrimoniali e relative ai figli.",
          "Nello Studio Legale Di Vietro, con sede a Bovisio Masciago e operativo in tutta la Brianza, accompagniamo le persone in entrambe le procedure con un approccio che mette al centro la persona prima del caso: quando la consensuale è possibile, lavoriamo per costruire un accordo solido e duraturo; quando la strada è inevitabilmente quella giudiziale, prepariamo una difesa rigorosa e documentata, mantenendo sempre come riferimento l'equilibrio familiare.",
        ],
      },
      {
        id: "faq",
        heading: "Domande frequenti",
        paragraphs: [
          "Posso passare da una separazione giudiziale a una consensuale durante il procedimento? Sì. Se durante il giudizio i coniugi raggiungono un accordo, è possibile chiedere la conversione del rito in consensuale.",
          "Quanto tempo deve passare tra separazione e divorzio? Per la separazione consensuale, devono trascorrere 6 mesi dall'omologa. Per la giudiziale, 12 mesi dalla prima udienza presidenziale. Con la Riforma Cartabia è oggi possibile in molti casi proporre subito anche la domanda di divorzio nello stesso ricorso di separazione.",
          "La separazione consensuale è sempre più conveniente? Sotto il profilo dei tempi e dei costi, quasi sempre sì. Ma \"conveniente\" non significa \"adatta a tutti\": in alcune situazioni, accettare un accordo squilibrato per fretta o per evitare il conflitto può creare problemi seri sul lungo periodo.",
          "Cosa succede se uno dei due cambia idea durante la procedura consensuale? Fino all'emanazione del provvedimento del giudice, ciascuno dei due coniugi può ritirare il proprio consenso. In quel caso la consensuale \"salta\" e occorre eventualmente avviare un procedimento giudiziale.",
        ],
      },
    ],
  },
  {
    slug: "divorzio-breve-cose-tempi-come-ottenerlo",
    title: "Divorzio breve: cos'è, tempi reali e come ottenerlo in Italia",
    excerpt:
      "Divorzio breve: tempi reali (6 o 12 mesi), come funziona dopo la Riforma Cartabia, documenti necessari. Guida pratica dello Studio Di Vietro in Brianza.",
    category: "Divorzio",
    date: "15 Maggio 2026",
    readTime: "10 min",
    intro:
      "Quando una coppia decide che il matrimonio è arrivato al capolinea, una delle prime preoccupazioni è capire quanto durerà l'iter legale. Prima del 2015 servivano tre anni di separazione per poter chiedere il divorzio. Una distanza enorme, che molti vivevano come una sospensione della propria vita. Con la Legge 55/2015 — il cosiddetto \"divorzio breve\" — quei tempi si sono ridotti drasticamente: oggi bastano 6 mesi se la separazione è stata consensuale, 12 mesi se è stata giudiziale.",
    sections: [
      {
        id: "cose",
        heading: "Cos'è davvero il divorzio breve",
        paragraphs: [
          "Il \"divorzio breve\" non è un tipo speciale di divorzio: è un'espressione di uso comune che indica la riduzione dei tempi minimi di separazione necessari per poter chiedere lo scioglimento del matrimonio. La procedura, in sé, resta quella ordinaria.",
          "La svolta è arrivata con la Legge 6 maggio 2015, n. 55, che ha modificato l'articolo 3 della legge sul divorzio (L. 898/1970) accorciando radicalmente i tempi di attesa. Successivamente, la Riforma Cartabia (D.Lgs. 149/2022) ha integrato questi termini nel nuovo rito unificato del processo di famiglia, confermandoli e aggiungendo una novità rilevante: la possibilità, in molti casi, di chiedere subito anche il divorzio nello stesso ricorso di separazione.",
          "Per divorziare, però, bisogna sempre prima essersi separati. La separazione resta il passaggio obbligato: è la fase intermedia in cui il matrimonio non è ancora sciolto, ma alcuni doveri reciproci vengono sospesi.",
        ],
      },
      {
        id: "tempi",
        heading: "I tempi reali: 6 mesi o 12 mesi",
        paragraphs: [
          "Separazione consensuale → 6 mesi (L. 55/2015, art. 1). Separazione giudiziale → 12 mesi (L. 55/2015, art. 1). Negoziazione assistita → 6 mesi (L. 162/2014).",
          "Da quando si contano i 6 o i 12 mesi? È il dettaglio che spesso genera confusione. I termini decorrono dalla data di comparizione dei coniugi davanti al presidente del tribunale (per i procedimenti instaurati prima della Riforma Cartabia) oppure, per i procedimenti più recenti, dal primo atto equivalente previsto dal nuovo rito unificato.",
          "Una novità importante: il cumulo separazione + divorzio. L'articolo 473-bis.49 c.p.c. consente, nei giudizi contenziosi, di proporre subito anche la domanda di divorzio nello stesso ricorso di separazione. In pratica: un solo ricorso, un solo procedimento, mesi di attesa risparmiati.",
        ],
      },
      {
        id: "procedura",
        heading: "Come funziona la procedura dopo la Riforma Cartabia",
        paragraphs: [
          "Divorzio congiunto (ex consensuale). Quando entrambi i coniugi sono d'accordo, si procede con un ricorso congiunto al tribunale del luogo di residenza di una delle parti. Le parti possono rinunciare alla comparizione personale (art. 473-bis.12 c.p.c.) e il procedimento si svolge tramite scambio di atti scritti. Tempi tipici: 3-6 mesi dal deposito.",
          "Divorzio contenzioso (ex giudiziale). Quando l'accordo non c'è, si passa attraverso un vero processo: ricorso introduttivo, prima udienza con eventuali provvedimenti urgenti, fase istruttoria, sentenza. Tempi: 12-18 mesi nei casi più semplici, oltre i due anni quando ci sono questioni patrimoniali o sui figli irrisolte.",
          "Negoziazione assistita. Procedura del tutto stragiudiziale (L. 162/2014): ciascun coniuge è assistito dal proprio avvocato e l'accordo raggiunto ha lo stesso valore di una sentenza di divorzio. Applicabile anche in presenza di figli minori. Per chi ha un accordo solido, è oggi la strada più rapida in assoluto: 2-8 settimane.",
        ],
      },
      {
        id: "documenti",
        heading: "I documenti necessari per chiedere il divorzio",
        paragraphs: [
          "Estratto integrale dell'atto di matrimonio rilasciato dal Comune; certificato di stato di famiglia di ciascun coniuge; sentenza o decreto di omologa della separazione; documentazione reddituale e patrimoniale degli ultimi tre anni (dichiarazioni dei redditi, buste paga, estratti conto).",
          "Quando ci sono figli minori: il piano genitoriale (impegni scolastici, attività, vacanze) ed eventuali provvedimenti già adottati su affidamento e mantenimento.",
          "La documentazione patrimoniale è obbligatoria dopo la Riforma Cartabia e va presentata in modo completo. La preparazione di questo materiale è uno dei momenti in cui l'aiuto dell'avvocato fa davvero la differenza.",
        ],
      },
      {
        id: "casi-pratici",
        heading: "Casi pratici: quando il divorzio è più rapido",
        paragraphs: [
          "Primo fattore: il livello di accordo tra i coniugi. Se entrambi vogliono divorziare e sono d'accordo su condizioni economiche e sui figli, si può puntare ai 6 mesi minimi senza intoppi.",
          "Secondo fattore: la presenza di figli minori. Quando ci sono minori, il tribunale è particolarmente attento al loro interesse: i tempi possono allungarsi se l'accordo proposto non viene ritenuto sufficientemente tutelante.",
          "Terzo fattore: il tribunale competente. I tribunali del nord — tra cui quello di Monza, competente per il nostro territorio della Brianza — generalmente fissano le udienze in tempi rapidi.",
        ],
      },
      {
        id: "costi",
        heading: "Quanto costa un divorzio breve",
        paragraphs: [
          "Il costo dipende dalla complessità del caso, dalla presenza di patrimoni o di figli minori, dalla durata della procedura e dalla strada scelta (congiunta, contenziosa o negoziazione assistita).",
          "Un divorzio congiunto semplice (senza figli minori, senza patrimoni complessi, con accordo già raggiunto) è la procedura più contenuta sul piano economico. Il divorzio contenzioso costa significativamente di più del congiunto, perché richiede più udienze, più atti, eventuali consulenze tecniche.",
        ],
      },
      {
        id: "faq",
        heading: "Domande frequenti",
        paragraphs: [
          "Posso divorziare senza prima essermi separato? Salvo casi del tutto eccezionali, no: la separazione è il passaggio obbligato. Quello che la Legge 55/2015 ha cambiato è il tempo di attesa tra separazione e divorzio.",
          "Quanto dura davvero la procedura di divorzio in tribunale? Una volta superati i 6 o 12 mesi minimi, la procedura di divorzio congiunto in tribunale dura mediamente 3-6 mesi. Nel divorzio contenzioso i tempi superano facilmente l'anno.",
          "Cosa succede ai figli durante la procedura di divorzio? Le condizioni stabilite nella separazione (affidamento, tempi di permanenza, mantenimento) continuano ad applicarsi fino alla sentenza di divorzio, quando vengono confermate o modificate.",
          "Posso chiedere il divorzio direttamente dall'estero? In molti casi sì, ma è una procedura più articolata che richiede una verifica preliminare sulla giurisdizione applicabile, la legge da applicare e gli effetti del divorzio sui beni.",
        ],
      },
    ],
  },
  {
    slug: "affidamento-condiviso-figli-regole-diritti-conflitto",
    title: "Affidamento condiviso dei figli: regole, diritti e cosa accade in caso di conflitto",
    excerpt:
      "Affidamento condiviso dopo separazione: regole, diritti dei genitori, cosa fare in caso di conflitto. Guida pratica dello Studio Di Vietro in Brianza.",
    category: "Minori",
    date: "10 Maggio 2026",
    readTime: "11 min",
    intro:
      "Quando una coppia con figli si separa, una delle preoccupazioni più sentite riguarda i bambini. \"Cosa succederà ai nostri figli? Come ci divideremo i tempi con loro? E se non riusciamo a metterci d'accordo?\". La legge italiana, dal 2006, ha scelto una strada chiara: l'affidamento condiviso è la regola, perché si parte dal presupposto che entrambi i genitori restano fondamentali nella vita dei figli, anche dopo la separazione.",
    sections: [
      {
        id: "regola",
        heading: "Cos'è l'affidamento condiviso e perché è la regola",
        paragraphs: [
          "L'affidamento condiviso è il modello di affidamento dei figli minori che la legge italiana ha scelto come regola ordinaria per i casi di separazione, divorzio, scioglimento delle unioni civili e per la regolamentazione dei rapporti tra genitori non coniugati. È stato introdotto dalla Legge 8 febbraio 2006, n. 54.",
          "Prima del 2006, i tribunali sceglievano quasi sempre l'affidamento esclusivo a un solo genitore — di solito la madre. La legge ha ribaltato questa impostazione partendo dal principio di bigenitorialità: i figli hanno diritto ad avere due genitori attivi nella loro vita, anche se separati.",
          "Oggi questo principio è codificato nell'articolo 337-ter del codice civile, che impone al giudice di valutare prioritariamente la possibilità che i figli minori restino affidati a entrambi i genitori. Solo se l'affidamento condiviso è contrario all'interesse del minore, il giudice può scegliere l'affidamento esclusivo.",
          "Una distinzione importante: \"affidamento condiviso\" non significa \"tempi paritari\". Significa che entrambi i genitori condividono la responsabilità delle decisioni importanti e che il bambino mantiene un rapporto continuativo con entrambi. Nella maggior parte dei casi, il figlio viene comunque collocato prevalentemente presso uno dei due genitori.",
        ],
      },
      {
        id: "vs-esclusivo",
        heading: "Affidamento condiviso vs affidamento esclusivo",
        paragraphs: [
          "Frequenza nella legge: regola ordinaria (condiviso) vs eccezione motivata (esclusivo).",
          "Responsabilità genitoriale: esercitata da entrambi (condiviso) vs esercitata da un solo genitore (esclusivo).",
          "Decisioni importanti: concordate tra i genitori (condiviso) vs prese dall'affidatario (esclusivo).",
          "Quando si applica: quasi sempre, salvo eccezioni (condiviso) vs solo se il condiviso danneggia il minore (esclusivo).",
        ],
      },
      {
        id: "diritti-doveri",
        heading: "Diritti e doveri di ciascun genitore",
        paragraphs: [
          "I diritti: mantenere con il figlio un rapporto equilibrato e continuativo; essere informato sulle decisioni importanti (scuola, salute, educazione); partecipare attivamente alle scelte di indirizzo; conservare rapporti significativi con i parenti del proprio ramo familiare.",
          "I doveri: contribuire al mantenimento economico in proporzione al proprio reddito; rispettare le scelte concordate con l'altro genitore; garantire la frequenza scolastica e il rispetto delle attività concordate; non interferire negativamente nel rapporto del figlio con l'altro genitore.",
          "Le decisioni di ordinaria amministrazione (pasti, vestiti, piccoli acquisti) possono essere prese dal genitore con cui il figlio si trova in quel momento. Le decisioni di straordinaria amministrazione (scuola, salute, scelte educative importanti) devono essere prese di comune accordo. In caso di disaccordo, è il giudice a decidere.",
        ],
      },
      {
        id: "esclusivo-quando",
        heading: "Quando il giudice può disporre l'affidamento esclusivo",
        paragraphs: [
          "L'affidamento esclusivo è oggi una scelta eccezionale che il giudice può adottare solo quando l'affidamento condiviso si rivela contrario all'interesse del minore. La legge non elenca tassativamente i casi: spetta al giudice valutare caso per caso, con motivazione specifica nella sentenza.",
          "Le situazioni tipiche: gravi problemi di un genitore (dipendenze, malattie psichiatriche non curate, condotte violente, condanne penali rilevanti); disinteresse concreto per un periodo prolungato; conflittualità così profonda da rendere la condivisione delle decisioni dannosa per il minore; residenza stabile all'estero che rende impossibile un rapporto continuativo.",
          "La semplice conflittualità tra i genitori, da sola, non basta per ottenere l'affidamento esclusivo. La giurisprudenza è ferma su questo punto: i genitori che litigano restano genitori, e la legge tende a responsabilizzarli piuttosto che escluderne uno.",
        ],
      },
      {
        id: "conflitto",
        heading: "Cosa succede in caso di conflitto tra genitori",
        paragraphs: [
          "Primo passo: il dialogo. Prima di passare al giudice, è quasi sempre possibile cercare un accordo, magari con un incontro a quattro (i due genitori e i due avvocati) per trovare una soluzione equilibrata senza l'intervento del tribunale.",
          "Secondo passo: la mediazione familiare. Se l'accordo diretto non è possibile, la mediazione familiare offre uno spazio protetto in cui un professionista terzo aiuta i genitori a comunicare e trovare soluzioni condivise. La Riforma Cartabia ha rafforzato il ruolo della mediazione nei procedimenti familiari.",
          "Terzo passo: il ricorso al giudice. L'articolo 709-ter del codice di procedura civile prevede strumenti specifici per risolvere i contrasti: il giudice può richiamare i genitori al rispetto degli accordi, disporre il risarcimento del danno e, nei casi più gravi, modificare l'affidamento.",
        ],
      },
      {
        id: "piano-genitoriale",
        heading: "Il piano genitoriale: cos'è e perché è importante",
        paragraphs: [
          "Una delle novità più importanti introdotte dalla Riforma Cartabia (D.Lgs. 149/2022) è il piano genitoriale. Disciplinato dall'art. 473-bis.12, ultimo comma, c.p.c., è un documento che ciascun genitore deve allegare al ricorso introduttivo, dove descrive in modo concreto la vita quotidiana del minore.",
          "Il piano contiene tipicamente: impegni scolastici (scuola frequentata, orari, attività); attività extrascolastiche (sport, musica, lingue); frequentazioni abituali (nonni, amici, cugini); vacanze normalmente godute (estive, natalizie, ponti); esigenze sanitarie particolari (terapie, visite ricorrenti).",
          "Il piano genitoriale aiuta il giudice ad avere un quadro concreto della vita del bambino, e aiuta i genitori a confrontarsi su elementi tangibili invece che su rivendicazioni generiche.",
        ],
      },
      {
        id: "faq",
        heading: "Domande frequenti",
        paragraphs: [
          "Posso ottenere l'affidamento esclusivo solo perché l'altro genitore è inaffidabile? Per ottenere l'affidamento esclusivo serve dimostrare che la condivisione delle decisioni con l'altro genitore è concretamente dannosa per il minore. Litigi frequenti, scarsa puntualità, divergenze educative non bastano: servono comportamenti gravi e documentati.",
          "Mio figlio non vuole vedere l'altro genitore. Cosa posso fare? La legge tutela il diritto del minore a essere ascoltato dal giudice (artt. 473-bis.4 e 473-bis.5 c.p.c.), ma protegge anche il diritto a mantenere il rapporto con entrambi i genitori. La strada giusta è valutare la situazione con un avvocato e, spesso, con un sostegno psicologico per il bambino.",
          "Posso trasferirmi in un'altra città con mio figlio dopo la separazione? Il trasferimento di un minore in un'altra città, in regime di affidamento condiviso, non può essere preso unilateralmente. Se l'altro genitore non è d'accordo, occorre un'autorizzazione del giudice.",
          "Con l'affidamento condiviso devo pagare comunque il mantenimento? Sì, nella stragrande maggioranza dei casi. L'affidamento condiviso riguarda la responsabilità genitoriale, non la contribuzione economica.",
        ],
      },
    ],
  },
  {
    slug: "assegno-mantenimento-figli-come-si-calcola-modifica",
    title: "Assegno di mantenimento per i figli: come si calcola e quando si modifica",
    excerpt:
      "Assegno di mantenimento per i figli: come funziona, quali criteri considera il giudice, quando si può modificare. Guida dello Studio Di Vietro in Brianza.",
    category: "Divorzio",
    date: "5 Maggio 2026",
    readTime: "10 min",
    intro:
      "Quando una coppia con figli si separa, una delle domande più urgenti è anche una delle più difficili: \"Quanto sarà l'assegno di mantenimento?\". Chi versa l'assegno vuole essere certo di poterlo sostenere; chi lo riceve vuole essere sicuro che sia sufficiente per i figli. La verità — che a volte sorprende — è che non esiste una risposta unica, né una formula matematica.",
    sections: [
      {
        id: "cose",
        heading: "Cos'è l'assegno di mantenimento e perché esiste",
        paragraphs: [
          "L'assegno di mantenimento per i figli è il contributo economico che un genitore versa all'altro per coprire una parte delle spese ordinarie necessarie alla crescita del figlio. Esiste perché la legge italiana — sulla scia della Costituzione — stabilisce che entrambi i genitori devono mantenere, istruire ed educare i figli, anche quando il matrimonio finisce.",
          "L'obbligo non dipende dal tipo di affidamento scelto: anche nei casi di affidamento condiviso, l'assegno si applica quasi sempre. Questo perché \"condividere la responsabilità genitoriale\" non significa \"dividere a metà le spese\": significa che ciascun genitore contribuisce in modo proporzionato alle proprie possibilità economiche.",
        ],
      },
      {
        id: "chi-paga",
        heading: "Chi deve pagarlo e fino a quando",
        paragraphs: [
          "Di norma, l'assegno viene versato dal genitore con cui il figlio non vive prevalentemente (genitore \"non collocatario\") al genitore con cui il figlio vive abitualmente. Se i tempi di permanenza presso ciascun genitore sono molto bilanciati e i redditi simili, l'assegno potrebbe non essere necessario; al contrario, può essere previsto anche a carico del genitore collocatario se ha un reddito molto più alto.",
          "Fino a quando si paga? Per i figli minorenni l'obbligo è automatico. Per i figli maggiorenni, l'obbligo continua finché il ragazzo sta seguendo seriamente un percorso di studi o di formazione, oppure è alla ricerca attiva di un lavoro coerente con le proprie qualifiche. La giurisprudenza più recente ha chiarito che l'obbligo non è eterno e che spetta al figlio dimostrare di stare costruendo concretamente la propria autonomia.",
        ],
      },
      {
        id: "criteri",
        heading: "I quattro criteri che il giudice considera",
        paragraphs: [
          "Primo: le esigenze attuali del figlio. Quanto costa, oggi, sostenere il figlio nella sua vita reale: scuola, alimentazione, vestiario, sport, salute. Le esigenze cambiano con l'età e l'assegno deve riflettere la fase di crescita.",
          "Secondo: le risorse economiche di entrambi i genitori. Il giudice analizza redditi reali, patrimonio, capacità lavorative e situazione complessiva. Il principio è la proporzionalità: chi ha di più contribuisce di più.",
          "Terzo: il tempo di permanenza presso ciascun genitore. Chi accoglie più spesso il figlio sostiene già una parte significativa del mantenimento in forma diretta (pasti, utenze, gestione domestica).",
          "Quarto: il tenore di vita goduto prima della separazione. Il figlio ha diritto, per quanto possibile, a mantenere un tenore di vita coerente con quello precedente.",
        ],
      },
      {
        id: "no-formula",
        heading: "Perché non esiste una formula matematica",
        paragraphs: [
          "Online si trovano tabelle, calcolatori, percentuali. Ma chi cerca di ridurre la questione a una formula sta semplificando in modo fuorviante. La giurisprudenza più aggiornata della Cassazione lo ha confermato con forza: il calcolo del mantenimento non può basarsi su automatismi o percentuali astratte.",
          "Facciamo un esempio. Due famiglie possono avere lo stesso reddito e lo stesso numero di figli, ma con situazioni molto diverse: in una il padre lavora come dipendente con stipendio fisso, nell'altra come libero professionista con redditi variabili. In una la madre ha rinunciato al lavoro per i figli, nell'altra ha sempre lavorato. In una c'è un figlio con esigenze sanitarie particolari, nell'altra no. Tutto questo cambia profondamente quale sia l'assegno equo.",
        ],
      },
      {
        id: "modifica",
        heading: "Quando si può modificare l'assegno",
        paragraphs: [
          "L'importo dell'assegno non è scolpito nella pietra. La legge prevede espressamente la possibilità di chiederne la modifica quando intervengono \"giustificati motivi\".",
          "Modifiche nella situazione economica dei genitori: perdita del lavoro o significativa riduzione del reddito; aumento sostanziale del reddito di uno dei due; nuovi carichi familiari (nascita di altri figli); problemi di salute con spese rilevanti.",
          "Modifiche nelle esigenze del figlio: crescita anagrafica (un figlio che entra in adolescenza ha esigenze diverse); inizio di un percorso scolastico più impegnativo (es. università fuori sede); esigenze sanitarie sopraggiunte; inizio o cessazione dell'autonomia economica del figlio maggiorenne.",
          "La modifica non scatta in automatico: bisogna chiederla al tribunale con un ricorso apposito, oppure raggiungere un accordo con l'altro genitore tramite negoziazione assistita. Importante: gli importi non si possono modificare retroattivamente, quindi prima si agisce, prima la nuova situazione viene riconosciuta.",
        ],
      },
      {
        id: "inadempimento",
        heading: "Cosa fare se l'altro genitore non paga",
        paragraphs: [
          "È una situazione delicata che richiede di muoversi correttamente: esistono diversi strumenti legali a tutela del genitore (e quindi del figlio) che riceve l'assegno.",
          "I passi tipici sono: una richiesta formale di pagamento al genitore inadempiente, eventualmente seguita dal recupero forzoso del credito attraverso le procedure esecutive (pignoramento dello stipendio, dei conti correnti, dei beni). Nei casi più gravi, il mancato pagamento può configurare anche un reato.",
          "Ogni rata non corrisposta resta dovuta — l'assegno non si \"perde\" per il fatto di non averlo richiesto subito — ma muoversi tempestivamente con l'aiuto di un avvocato consente di tutelare i diritti del figlio nel modo più efficace.",
        ],
      },
      {
        id: "faq",
        heading: "Domande frequenti",
        paragraphs: [
          "L'assegno di mantenimento si rivaluta ogni anno? Sì, deve essere adeguato annualmente sulla base degli indici ISTAT. La rivalutazione scatta nel mese anniversario della sentenza che ha stabilito l'assegno: è un meccanismo che spesso viene ignorato e non applicato spontaneamente.",
          "Se mio figlio inizia a lavorare, devo continuare a pagare l'assegno? Dipende. Se si tratta di un lavoro occasionale o di tirocinio, l'obbligo continua. Se invece il figlio raggiunge una vera autonomia economica, l'obbligo può cessare. La cessazione non è automatica: va chiesta al giudice o concordata con l'altro genitore.",
          "Posso accordarmi direttamente con l'altro genitore senza passare dal giudice? Sì. Le coppie che mantengono un dialogo possono concordare modifiche dell'assegno tramite negoziazione assistita dai propri avvocati: è una procedura più rapida, meno costosa e meno conflittuale. L'accordo raggiunto ha lo stesso valore legale di una sentenza.",
        ],
      },
    ],
  },
  {
    slug: "addebito-separazione-quando-scatta-conseguenze",
    title: "Addebito della separazione: quando scatta, conseguenze e perdita dell'assegno",
    excerpt:
      "Addebito della separazione: cos'è, quando il giudice lo pronuncia, conseguenze economiche e perdita dell'assegno. Guida dello Studio Di Vietro in Brianza.",
    category: "Separazioni",
    date: "28 Aprile 2026",
    readTime: "10 min",
    intro:
      "Quando un matrimonio finisce per il comportamento grave di uno dei due — un tradimento, l'abbandono della famiglia, una situazione di violenza — è naturale che l'altro coniuge si chieda se la legge offre uno strumento per far riconoscere questa responsabilità. Questo strumento esiste, e si chiama addebito della separazione. È una richiesta che il giudice può accogliere durante una separazione giudiziale, con conseguenze importanti — soprattutto economiche — per chi viene riconosciuto come responsabile della rottura del matrimonio.",
    sections: [
      {
        id: "cose",
        heading: "Cos'è l'addebito della separazione",
        paragraphs: [
          "L'addebito è una pronuncia del giudice che dichiara la responsabilità di uno dei due coniugi nella fine del matrimonio. Non si limita a constatare che il rapporto è finito: stabilisce che è finito a causa del comportamento contrario ai doveri matrimoniali di uno dei due.",
          "È previsto dall'articolo 151, secondo comma, del codice civile. È uno strumento che esiste solo nella separazione giudiziale (quella decisa dal tribunale, non quella consensuale tra i coniugi) e che il giudice non può pronunciare di sua iniziativa: serve una richiesta esplicita di uno dei coniugi.",
          "L'addebito non è una condanna morale, e non è nemmeno un risarcimento del danno. È una pronuncia giuridica che ha conseguenze specifiche — soprattutto patrimoniali — sul rapporto tra i due coniugi dopo la separazione.",
        ],
      },
      {
        id: "quando",
        heading: "Quando il giudice può pronunciare l'addebito",
        paragraphs: [
          "Perché il giudice possa addebitare la separazione, devono coesistere due elementi fondamentali. Non basta uno solo: serve la presenza di entrambi.",
          "Primo elemento: la violazione di un dovere matrimoniale. Il matrimonio comporta una serie di doveri reciproci stabiliti dall'articolo 143 del codice civile: fedeltà, coabitazione, assistenza morale e materiale, collaborazione nell'interesse della famiglia, contribuzione ai bisogni della famiglia. La violazione anche di uno solo di questi doveri può essere il punto di partenza.",
          "Secondo elemento: il nesso causale con la crisi. Non basta dimostrare che il coniuge ha tenuto un comportamento sbagliato: bisogna dimostrare che proprio quel comportamento è stato la causa della fine del matrimonio. Se il matrimonio era già in crisi profonda, e poi è arrivato il comportamento contestato, il giudice non pronuncia l'addebito.",
        ],
      },
      {
        id: "tradimento",
        heading: "Il tradimento può sempre causare l'addebito?",
        paragraphs: [
          "Il tradimento è il caso più frequente che ci viene presentato quando si parla di addebito. E qui c'è una verità che spesso sorprende: il tradimento, di per sé, non sempre porta all'addebito.",
          "Vale lo stesso principio del nesso causale. Il tradimento avvenuto in un matrimonio ancora vivo, che ha incrinato un rapporto fino a quel momento solido, può fondare la richiesta di addebito. Il tradimento avvenuto quando la coppia era già in crisi profonda non è la causa della fine del matrimonio, ma una sua conseguenza.",
          "Altri comportamenti che possono giustificare l'addebito: l'allontanamento ingiustificato dalla casa coniugale, quando rompe una convivenza ancora viva; comportamenti di violenza fisica o psicologica nei confronti del coniuge o dei figli; l'abbandono materiale o morale della famiglia; comportamenti gravemente offensivi della dignità del coniuge; il rifiuto persistente di contribuire ai bisogni della famiglia pur avendone i mezzi.",
        ],
      },
      {
        id: "conseguenze",
        heading: "Le conseguenze dell'addebito: cosa cambia davvero",
        paragraphs: [
          "Perdita del diritto all'assegno di mantenimento. La conseguenza principale, prevista dall'articolo 156 del codice civile, è che il coniuge a cui viene addebitata la separazione perde il diritto all'assegno di mantenimento, anche se ne avrebbe i requisiti economici. Il giudice potrà tuttavia prevedere a suo favore solo gli alimenti — un importo minimo destinato a evitare lo stato di bisogno.",
          "Attenzione: l'addebito riguarda l'assegno per il coniuge, non quello per i figli. Il mantenimento dei figli resta dovuto indipendentemente dall'addebito, perché i figli non possono pagare le conseguenze degli errori dei genitori.",
          "Perdita dei diritti successori. Il coniuge separato senza addebito conserva pieni diritti successori sull'altro coniuge: in caso di morte, ne è erede legittimario. Il coniuge separato con addebito perde questi diritti — può eventualmente ottenere solo un assegno vitalizio, e a determinate condizioni. Su patrimoni significativi, è una conseguenza dal peso economico molto rilevante.",
        ],
      },
      {
        id: "prove",
        heading: "Le prove necessarie per ottenere l'addebito",
        paragraphs: [
          "La richiesta di addebito non si fonda su sensazioni o convinzioni personali: serve dimostrare con prove concrete sia la violazione del dovere matrimoniale, sia il nesso causale con la fine del matrimonio. L'onere della prova è interamente a carico di chi chiede l'addebito.",
          "Le tipologie di prova più ricorrenti: testimonianze di persone informate dei fatti; messaggi, email, chat, foto — purché ottenuti in modo lecito; documenti che dimostrino comportamenti specifici (ricevute, estratti conto, viaggi); eventuali denunce, referti medici, segnalazioni a forze dell'ordine nei casi di violenza; relazioni di investigatori privati, quando legittimamente acquisite.",
          "Un avvertimento importante: le prove ottenute in modo illegittimo (per esempio una chat letta accedendo al telefono del coniuge senza autorizzazione, o registrazioni audio fatte di nascosto in contesti privati) possono non essere utilizzabili in giudizio, oltre a poter esporre chi le ha raccolte a conseguenze penali.",
        ],
      },
      {
        id: "non-conviene",
        heading: "Perché non sempre conviene chiedere l'addebito",
        paragraphs: [
          "Spesso chi arriva da noi dopo un tradimento o un abbandono ha un bisogno comprensibile di \"giustizia\". Il nostro compito è valutare insieme, con sincerità, se quella strada è davvero conveniente nel caso specifico. Ci sono almeno tre ragioni per cui, in molti casi, la richiesta di addebito risulta meno conveniente di quanto sembri.",
          "Prima ragione: i tempi e i costi. La richiesta di addebito si può fare solo nella separazione giudiziale, significativamente più lunga e costosa della consensuale. Si parla di anni invece che di mesi. Se la posta in gioco economica è limitata, il rapporto tra costi e benefici può non essere favorevole.",
          "Seconda ragione: la difficoltà delle prove. Dimostrare il nesso causale tra comportamento e crisi richiede prove solide. Quando le prove sono deboli, il rischio di non ottenere l'addebito è alto.",
          "Terza ragione: l'impatto sul percorso emotivo. La separazione giudiziale con richiesta di addebito è un confronto avversariale che si nutre della ricostruzione del passato. Per chi ha figli, alimentare il conflitto giudiziario può prolungare la sofferenza e rendere più difficile ricostruire una relazione cooperativa con l'altro genitore.",
        ],
      },
      {
        id: "faq",
        heading: "Domande frequenti",
        paragraphs: [
          "Posso chiedere l'addebito nella separazione consensuale? No. L'addebito si può chiedere solo all'interno di una separazione giudiziale. Per questo motivo, chi vuole far valere l'addebito non può accedere alla via consensuale.",
          "Se ottengo l'addebito, posso chiedere un risarcimento del danno? L'addebito non è di per sé un risarcimento. In casi specifici e gravi, però, il coniuge che ha subito determinati comportamenti (ad esempio violenze, lesioni della dignità) può chiedere separatamente un risarcimento del danno, sulla base di principi diversi.",
          "Posso chiedere l'addebito anche per comportamenti del coniuge dopo la separazione di fatto? No. L'addebito riguarda comportamenti che hanno causato la crisi del matrimonio. Comportamenti successivi alla separazione di fatto — come una nuova relazione — non possono di norma fondare l'addebito.",
          "L'addebito incide sull'affidamento dei figli? Di regola no. L'affidamento viene deciso sulla base dell'interesse dei figli, indipendentemente dalla colpa di un coniuge. Solo in casi specifici (per esempio violenza in famiglia) il comportamento alla base dell'addebito può anche influenzare le scelte sull'affidamento.",
        ],
      },
    ],
  },
];

export const blogPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  content: buildContent(p.intro, p.sections),
}));
