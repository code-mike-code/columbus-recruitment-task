# Recruitment task - Columbus Poland 

## Junior Frontend Developer
A frontend application built as part of the Columbus Poland recruitment task.

## Preview

![App preview on multiple screen sizes](public/assets/img/rwd-mockup.png)

## Overview

Product listing page with header, product cards layout, REST API data fetching and adding items to cart with badge updates.


## Architecture

| Subject      | Choice                       | 
| ------------ | ---------------------------- | 
| Routing      | App Router                   | 
| Fetching     | Server Component in page.tsx | 
| Cart state.  | React Context                | 
| Styles       | CSS Modules                  |


## Tech Stack

- **Next.js** — React framework with App Router and server components
- **TypeScript** — type-safe JavaScript
- **CSS Modules** — scoped component styling with custom properties
- **React Context + useReducer** — cart state management

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:3000`.

### Build

```bash
npm run build
```

## Features

- Product listing page with data fetched asynchronously from REST API
- Each product displays image, title, description, brand logo, price, 
  and discounted price when a promotion is active
- Promotion badge on product cards when accessible 
- Add to Cart button updates cart state and badge counter in header
- Header with logo and brand name fetched from API
- Scroll reveal animation — product cards animate
- Hover animations on product cards and buttons
- Responsive layout for mobile, tablet and desktop
