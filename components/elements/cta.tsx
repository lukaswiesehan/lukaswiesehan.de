import {Button} from '@components/elements/button'

type CTAProps = {
  action: () => void
  wrap?: boolean | false
}

export const CTA = ({action, wrap}: CTAProps) => {
  return (
    <div
      className={`mt-8 space-y-4 ${
        !wrap && 'sm:flex sm:items-start sm:space-y-0 sm:space-x-6'
      }`}
    >
      <Button
        type="primary"
        text="Gespräch vereinbaren"
        action={action}
        loading={false}
      />
      <div className="flex items-start space-x-2 sm:pt-1">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className="flex-shrink-0 fill-current text-emerald-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 3C14 3.28125 13.875 3.53125 13.6875 3.71875L5.6875 11.7188C5.5 11.9062 5.25 12 5 12C4.71875 12 4.46875 11.9062 4.28125 11.7188L0.28125 7.71875C0.09375 7.53125 0 7.28125 0 7C0 6.4375 0.4375 6 1 6C1.25 6 1.5 6.125 1.6875 6.3125L5 9.59375L12.2812 2.3125C12.4688 2.125 12.7188 2 13 2C13.5312 2 14 2.4375 14 3Z" />
        </svg>
        <p className="hyphens w-56 text-sm leading-none">
          Erhalte kostenlos & unverbindlich ein erstes Konzept für Dein Projekt.
        </p>
      </div>
    </div>
  )
}
