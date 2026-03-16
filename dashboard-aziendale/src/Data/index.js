import moment from "moment/moment";

export const cardsData = [
  {
    title: "Entrate",
    change: 24,
    amount: 42056,
  },
  {
    title: "Ordini",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Spese",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profitto",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Bicicletta",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Corsi di lingua",
    type: "Illustration",
    items: 12,
    change: 72
  },
  {
    name: "Collaborazione d'ufficio",
    type: "Illustration",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Festa di pranzo',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Evento programmato',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: 'Riunione capi',
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: 'Riunione VC',
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: 'Pagamenti programmati',
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: 'Riunione VC',
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Analisi Requisiti Clienti",
          description: "Raccolta e documentazione esigenze aziendali"
        },
        {
          id: 2,
          title: "Sviluppo Backend API",
          description: "Creazione endpoint per gestione dati"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Dashboard Analytics",
          description: "Implementazione grafici e statistiche in tempo reale",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Sistema di Notifiche",
          description: "Integrazione email e alert per utenti"
        },
        {
          id: 11,
          title: "Ottimizzazione Performance",
          description: "Analisi e miglioramento tempi di caricamento"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Setup Ambiente Sviluppo",
          description: "Configurazione tools e ambiente di lavoro"
        },
        {
          id: 13,
          title: "Documentazione Tecnica",
          description: "Creazione manuali utente e guide sviluppatori"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Marco',
      lastName: 'Rossi',
    },
    address: 'Via Roma 123',
    city: 'Milano',
    state: 'Lombardia',
  },
  {
    name: {
      firstName: 'Giulia',
      lastName: 'Bianchi',
    },
    address: 'Corso Vittorio 45',
    city: 'Roma',
    state: 'Lazio',
  },
  {
    name: {
      firstName: 'Paolo',
      lastName: 'Ferrari',
    },
    address: 'Piazza Duomo 10',
    city: 'Firenze',
    state: 'Toscana',
  },
  {
    name: {
      firstName: 'Laura',
      lastName: 'Verdi',
    },
    address: 'Via Garibaldi 78',
    city: 'Torino',
    state: 'Piemonte',
  },
  {
    name: {
      firstName: 'Andrea',
      lastName: 'Romano',
    },
    address: 'Lungarno Mediceo 23',
    city: 'Pisa',
    state: 'Toscana',
  },
  {
    name: {
      firstName: 'Sofia',
      lastName: 'Colombo',
    },
    address: 'Via Nazionale 156',
    city: 'Napoli',
    state: 'Campania',
  },
  {
    name: {
      firstName: 'Francesco',
      lastName: 'Gallo',
    },
    address: 'Viale della Libertà 89',
    city: 'Bologna',
    state: 'Emilia-Romagna',
  },
  {
    name: {
      firstName: 'Chiara',
      lastName: 'Moretti',
    },
    address: 'Piazza San Marco 12',
    city: 'Venezia',
    state: 'Veneto',
  },
  {
    name: {
      firstName: 'Roberto',
      lastName: 'Conti',
    },
    address: 'Via Etnea 67',
    city: 'Catania',
    state: 'Sicilia',
  },
]