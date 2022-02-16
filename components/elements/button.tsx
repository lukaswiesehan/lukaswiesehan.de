import {motion} from 'framer-motion'
import {Loader} from '@components/elements/loader'

type ButtonProps = {
  type: 'primary' | 'secondary'
  text: string
  submit?: boolean | false
  action?: (e) => void
  loading?: boolean | false
  disabled?: boolean | false
  hideArrow?: boolean | false
}

export const Button = ({type, submit, text, action, loading, disabled, hideArrow}: ButtonProps) => {
  const transitionDuration = 0.15

  const lineVariants = {
    rest: {opacity: 0, x: 2, transition: {duration: transitionDuration}},
    hover: disabled ? {} : {opacity: 1, x: 0, transition: {duration: transitionDuration}}
  }
  const chevronVariants = {
    rest: {x: 0, transition: {duration: transitionDuration}},
    hover: disabled ? {} : {x: 4, transition: {duration: transitionDuration}}
  }

  return (
    <motion.button
      className={`h-10 flex-shrink-0 rounded-full font-bold transition-colors duration-150 ease-in-out ${
        type == 'primary'
          ? `px-5 ${!hideArrow && 'pr-4'} text-slate-50  ${disabled ? 'bg-slate-900/70' : 'bg-slate-900 hover:bg-slate-900/80'}`
          : 'bg-transparent text-slate-900 hover:text-slate-900/70'
      }`}
      type={submit ? 'submit' : 'button'}
      initial="rest"
      whileHover="hover"
      animate="rest"
      aria-label={text}
      onClick={action}
      disabled={loading || disabled}
    >
      {loading ? (
        <span className="flex h-full items-center justify-center pr-1">
          <Loader className="text-slate-50" />
        </span>
      ) : (
        <span className="flex items-center space-x-2">
          <span>{text}</span>
          {!hideArrow && (
            <svg height="14" viewBox="0 0 18 16" className="fill-current" xmlns="http://www.w3.org/2000/svg">
              <g>
                <motion.path
                  variants={lineVariants}
                  d="M13.6124 9.25H1.28565C0.575695 9.25 0 8.69141 0 8C0 7.30859 0.575695 6.75 1.28565 6.75H13.6124L14.8982 8L13.6124 9.25Z"
                />
                <motion.path
                  variants={chevronVariants}
                  d="M5.28576 15.5C4.95677 15.5 4.62763 15.3779 4.37692 15.1338C3.87469 14.6455 3.87469 13.8545 4.37692 13.3662L9.89825 8L4.37772 2.63281C3.87549 2.14453 3.87549 1.35352 4.37772 0.865234C4.87995 0.376953 5.69357 0.376953 6.1958 0.865234L12.6244 7.11523C13.1266 7.60351 13.1266 8.39453 12.6244 8.88281L6.1958 15.1328C5.94468 15.3789 5.61522 15.5 5.28576 15.5Z"
                />
              </g>
            </svg>
          )}
        </span>
      )}
    </motion.button>
  )
}
