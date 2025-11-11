export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://zona2.mx/images/zona2.png" 
        alt="Zona2 Logo"
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}

