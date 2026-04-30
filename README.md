# Recruitment task - Columbus Poland 
## Junior Frontend Developer



## Architecture

| Subject      | Choice                       | why                                               |
| ------------ | ---------------------------- | ------------------------------------------------- |
| Routing      | App Router                   | Next.js standard.                                 |
| Fetching     | Server Component in page.tsx | Dane są statyczne przy ładowaniu, idealne dla SSR |
| Cart state.  | React Context                | Koszyk musi być widoczny w Headerze i na stronie  |
| Styles       | CSS Modules                  | Spełnia wymagania, czyste, brak konfliktów klas   |

## Data Flow

page.tsx (Server Component)
  └── fetch() -> API
        └── ProductList.tsx (Client Component)
              └── ProductCard.tsx × N
                    └── onClick -> CartContext.addItem()
                                      |
                          Header.tsx -> showing counter