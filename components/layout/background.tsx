type BackgroundProps = {
  height: 'full' | 'half'
}

export const Background = ({height}: BackgroundProps) => {
  return (
    <div className={`absolute bottom-0 w-full px-4 lg:px-0 ${height == 'half' ? 'h-1/2' : 'h-full'}`}>
      <div className="mx-auto grid h-full w-full max-w-screen-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:max-w-screen-xl">
        <div className="border-x-2 border-slate-200/40 md:border-r" />
        <div className="boder-r-2 hidden border-l border-slate-200/40 md:block lg:border-r" />
        <div className="hidden border-x border-slate-200/40 lg:block" />
        <div className="hidden border-l border-r-2 border-slate-200/40 lg:block" />
      </div>
    </div>
  )
}
