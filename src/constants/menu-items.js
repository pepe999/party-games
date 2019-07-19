// @flow
// libs
// import { lock, car, shield, infoCircle, externalLink, cog, users, ticket } from 'react-icons-kit/fa'

import { Routes } from './index'

export default {
  hlaskyLinks: [
    {
      key: 1,
      label: "České hlášky",
      to: Routes.CZECH_QUOTE,
    },
    {
      key: 2,
      label: "Filmové hlášky",
      to: Routes.MOVIE_QUOTE,
    },
    {
      key: 3,
      label: "Seriálové hlášky",
      to: Routes.SERIAL_QUOTE,
    },
    {
      key: 4,
      label: "Nová hláška",
      to: Routes.NEW_QUOTE,
    },
  ],
//   userLinks: [
//     {
//       label: messages.userMenuDealership,
//       to: Routes.DEALERSHIPS,
//       icon: car,
//     },
//     {
//       label: messages.userMenuSettings,
//       to: Routes.USER_SETTINGS,
//       icon: cog,
//     },
//     {
//       label: messages.userMenuAbouApp,
//       to: Routes.EMPTY,
//       icon: infoCircle,
//     },
//   ],
}
