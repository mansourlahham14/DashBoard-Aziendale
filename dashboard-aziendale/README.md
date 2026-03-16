# 🏢 Dashboard Aziendale

Una dashboard aziendale moderna e completa sviluppata con React e Vite, progettata per gestire e visualizzare dati aziendali in modo intuitivo ed efficiente.

## ✨ Caratteristiche Principali

### 📊 Dashboard Analitica
- Statistiche in tempo reale su entrate, ordini, spese e profitti
- Grafici interattivi con ECharts
- Design responsive e moderno

### 👥 Gestione Utenti
- Tabella utenti completa con filtri avanzati
- Ordinamento personalizzabile per ogni colonna
- Interfaccia completamente localizzata in italiano
- Ricerca e filtraggio rapido dei dati

### 📅 Calendario Eventi
- Calendario interattivo con FullCalendar
- Gestione eventi e riunioni aziendali
- Supporto viste giornaliere, settimanali e mensili
- Drag & drop per spostare eventi

### 📋 Kanban Board
- Board Kanban per gestione progetti
- Drag & drop con react-beautiful-dnd
- Colonne personalizzabili: Backlog, TODO, Doing, Completed
- Gestione task con descrizioni dettagliate

## 🛠️ Stack Tecnologico

- **Frontend**: React 19.2.4
- **Build Tool**: Vite 8.0.0
- **Routing**: React Router DOM 7.13.1
- **UI Components**: Material-UI 7.3.9
- **Data Tables**: Material React Table 3.2.1
- **Charts**: ECharts + ECharts for React
- **Calendar**: FullCalendar 6.1.20
- **Drag & Drop**: @hello-pangea/dnd
- **Date Handling**: Moment.js
- **State Management**: Zustand
- **Icons**: React Icons + Material Icons

## 🚀 Installazione e Avvio

### Prerequisiti
- Node.js (versione 18 o superiore)
- npm o yarn

### Installazione
```bash
# Clona la repository
git clone https://github.com/mansourlahham14/DashBoard-Aziendale.git

# Entra nella directory del progetto
cd DashBoard-Aziendale/dashboard-aziendale

# Installa le dipendenze
npm install
```

### Avvio Sviluppo
```bash
# Avvia il server di sviluppo
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

### Build Produzione
```bash
# Crea la build di produzione
npm run build

# Anteprima della build di produzione
npm run preview
```

## 📁 Struttura del Progetto

```
dashboard-aziendale/
├── public/                 # File statici
├── src/
│   ├── components/         # Componenti riutilizzabili
│   │   ├── AddCardModal/   # Modale per aggiungere card
│   │   ├── Layout/         # Layout principale dell'applicazione
│   │   ├── Orders/         # Componente per gestione ordini
│   │   ├── OrdersPieChart/ # Grafico a torta per ordini
│   │   ├── SideBar/        # Barra laterale di navigazione
│   │   ├── Statistics/     # Componente statistiche principali
│   │   └── StatisticsChart/ # Grafici per statistiche avanzate
│   ├── Pages/             # Pagine dell'applicazione
│   │   ├── Board/         # Kanban board per gestione progetti
│   │   ├── Calendar/      # Calendario eventi aziendali
│   │   ├── Dashboard/     # Dashboard principale con analytics
│   │   └── DataGrid/      # Tabella utenti con filtri avanzati
│   ├── Data/              # Dati di esempio e configurazioni
│   ├── store/             # State management con Zustand
│   │   ├── Board.js       # Store per gestione board Kanban
│   │   └── Calendar.js    # Store per gestione eventi calendario
│   ├── App.jsx            # Componente principale con routing
│   ├── main.jsx           # Punto di ingresso dell'applicazione
│   └── index.css          # Stili globali
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 Navigazione

L'applicazione è organizzata nelle seguenti sezioni:

- **`/dashboard`**: Dashboard principale con statistiche e grafici
- **`/calendar`**: Calendario per gestione eventi
- **`/board`**: Kanban board per gestione progetti
- **`/users`**: Tabella utenti con filtri e ordinamento

## 🎨 Personalizzazione

### Tema
L'applicazione utilizza Material-UI con tema scuro predefinito. Puoi personalizzare i colori e lo stile modificando il tema nel componente `ThemeProvider`.

### Dati
I dati di esempio sono configurati in `src/Data/index.js`. Puoi sostituire questi dati con le tue API o servizi backend.

### Localizzazione
La tabella utenti è completamente localizzata in italiano. Per aggiungere altre lingue, modifica l'oggetto `italianLocalization` nel componente `DataGrid`.

## 🔧 Configurazione

### Variabili d'Ambiente
Crea un file `.env` nella root del progetto per configurare variabili d'ambiente:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=Dashboard Aziendale
```

### ESLint
Il progetto include configurazione ESLint per mantenere la qualità del codice:

```bash
# Esegui linting
npm run lint
```

## 📱 Funzionalità

### Dashboard
- Cards con statistiche principali (Entrate, Ordini, Spese, Profitto)
- Grafici interattivi per analisi dati
- Design responsive per mobile e desktop

### Tabella Utenti
- Filtraggio su tutte le colonne
- Ordinamento crescente/decrescente
- Ricerca full-text
- Esportazione dati
- Interfaccia in italiano

### Calendario
- Vista mensile, settimanale e giornaliera
- Creazione e modifica eventi
- Drag & drop per spostare eventi
- Eventi ricorrenti

### Kanban Board
- 4 colonne: Backlog, TODO, Doing, Completed
- Drag & drop tra colonne
- Task con titolo e descrizione
- Gestione stato avanzamenti

## 🤝 Contributi

I contributi sono benvenuti! Per contribuire:

1. Forka la repository
2. Crea un branch per la tua feature (`git checkout -b feature/NuovaFunzionalità`)
3. Commit delle modifiche (`git commit -m 'Aggiunta nuova funzionalità'`)
4. Push al branch (`git push origin feature/NuovaFunzionalità`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## 👤 Autore

**Mansour Lahham**  
GitHub: [@mansourlahham14](https://github.com/mansourlahham14)
