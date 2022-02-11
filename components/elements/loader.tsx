type LoaderProps = {
  className: string
}

export const Loader = ({className}: LoaderProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 14" className={`w-8 fill-current ${className}`}>
      <circle stroke="none" cx="6" cy="7" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
      </circle>
      <circle stroke="none" cx="26" cy="7" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
      </circle>
      <circle stroke="none" cx="46" cy="7" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
      </circle>
    </svg>
  )
}
