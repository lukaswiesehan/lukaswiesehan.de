import {motion} from 'framer-motion'

type NavButtonProps = {
  open: boolean
  toggleOpen: () => void
}

export const NavButton = ({open, toggleOpen}: NavButtonProps) => {
  const transitionDuration = 0.15

  const upperBarVariants = {
    open: {
      rotateZ: 45,
      translateY: 6,
      transition: {duration: transitionDuration},
    },
    closed: {
      rotateZ: 0,
      translateY: 0,
      transition: {duration: transitionDuration},
    },
  }
  const centerBarVariants = {
    open: {opacity: 0, transition: {duration: transitionDuration}},
    closed: {opacity: 1, transition: {duration: transitionDuration}},
  }
  const lowerBarVariants = {
    open: {
      rotateZ: -45,
      translateY: -6,
      transition: {duration: transitionDuration},
    },
    closed: {
      rotateZ: 0,
      translateY: 0,
      transition: {duration: transitionDuration},
    },
  }

  return (
    <button
      className="relative z-50"
      aria-label={open ? 'Navigation schließen' : 'Navigation öffnen'}
      onClick={() => toggleOpen()}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        className="fill-current text-slate-900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <motion.path
            variants={upperBarVariants}
            d="M0 2C0 1.34316 0.511786 0.8125 1.14286 0.8125H14.8571C15.4893 0.8125 16 1.34316 16 2C16 2.65684 15.4893 3.1875 14.8571 3.1875H1.14286C0.511786 3.1875 0 2.65684 0 2Z"
          />
          <motion.path
            variants={centerBarVariants}
            d="M0 8C0 7.34316 0.511786 6.8125 1.14286 6.8125H14.8571C15.4893 6.8125 16 7.34316 16 8C16 8.65684 15.4893 9.1875 14.8571 9.1875H1.14286C0.511786 9.1875 0 8.65684 0 8Z"
          />
          <motion.path
            variants={lowerBarVariants}
            d="M0 14C0 13.3432 0.511786 12.8125 1.14286 12.8125H14.8571C15.4893 12.8125 16 13.3432 16 14C16 14.6568 15.4893 15.1875 14.8571 15.1875H1.14286C0.511786 15.1875 0 14.6568 0 14Z"
          />
        </g>
      </svg>
    </button>
  )
}
