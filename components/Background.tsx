export default function Background() {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="fixed top-0 left-0 w-full h-full z-[-2]">
        <div className="absolute inset-0 bg-cyber-black" />
        <div className="absolute top-0 left-0 w-full h-full animate-glow-pulse">
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-cyber-purple/10 rounded-full blur-3xl" />
          <div className="absolute top-[60%] right-[10%] w-[600px] h-[600px] bg-cyber-cyan/8 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] bg-cyber-green/5 rounded-full blur-3xl" />
        </div>
      </div>
      
      {/* Grid Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] grid-bg pointer-events-none" />
    </>
  )
}
