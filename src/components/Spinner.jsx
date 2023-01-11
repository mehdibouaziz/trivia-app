const Spinner = ({color='#3C8FE7'}) => {
  return (
    <div className=''>
        <div className="absolute w-7 h-7 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{backgroundColor: color}}></div>
        <div className="absolute top-1/2 left-1/2 animate-spin-inner">
            <div className="absolute rounded-full border-4 w-16 h-16 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[65deg]" style={{borderLeftColor: color}}></div>
            <div className="absolute rounded-full border-4 w-16 h-16 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[45deg]" style={{borderTopColor: color}}></div>
            <div className="absolute rounded-full border-4 w-16 h-16 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[65deg] -scale-100" style={{borderLeftColor: color}}></div>
            <div className="absolute rounded-full border-4 w-16 h-16 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[45deg] -scale-100" style={{borderTopColor: color}}></div>
            
            <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full -translate-y-1/2 translate-x-6" style={{backgroundColor: color}}></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full -translate-y-1/2 -translate-x-9" style={{backgroundColor: color}}></div>
        </div>
        <div className="absolute top-1/2 left-1/2 animate-spin-outer">
            <div className="absolute rounded-full border-4 w-24 h-24 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[65deg]" style={{borderLeftColor: color}}></div>
            <div className="absolute rounded-full border-4 w-24 h-24 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[45deg]" style={{borderTopColor: color}}></div>
            <div className="absolute rounded-full border-4 w-24 h-24 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[65deg] -scale-100" style={{borderLeftColor: color}}></div>
            <div className="absolute rounded-full border-4 w-24 h-24 border-transparent -translate-x-1/2 -translate-y-1/2 rotate-[45deg] -scale-100" style={{borderTopColor: color}}></div>
            
            <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full -translate-y-1/2 translate-x-[38px]" style={{backgroundColor: color}}></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full -translate-y-1/2 -translate-x-[52px]" style={{backgroundColor: color}}></div>
        </div>
    </div>
  )
}

export default Spinner