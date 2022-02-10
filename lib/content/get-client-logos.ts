import {ClientLogo, clientLogos} from '@content/client-logos'

export const getClientLogos = (): ClientLogo[] => {
  return clientLogos.filter((l) => l.online)
}
