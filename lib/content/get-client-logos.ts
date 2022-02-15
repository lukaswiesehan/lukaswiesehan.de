import {ClientLogo} from '@lib/types/client-logo'
import {clientLogos} from '@content/client-logos'

export const getClientLogos = (): ClientLogo[] => {
  return clientLogos.filter((l) => l.online)
}
