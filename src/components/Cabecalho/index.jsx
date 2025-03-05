import { Binary, Code } from 'lucide-react'
import React from 'react'

function Cabecalho() {
  return (
    <header className="flex sticky top-0 z-10 bg-white inset-2 shadow-md pt-4 w-screen items-center h-16 justify-around">
        <span className="text-2xl font-bold"><a href="https://github.com/Guikino/" target='_blank'>Guikino</a></span>
        <nav>
          <ul className="flex gap-4 items-center text-lg">
            
              <li>
                <a className='flex  items-center justify-center gap-2
               hover:border-b hover:border-black cursor-pointer' href="https://github.com/Guikino/hashingcode">Ver Código <Code/></a></li>
            
            
            <li className="flex gap-2 items-center hover:transition-all cursor-pointer
              hover:border-b hover:border-black">Mudar Codificação <Binary/>   </li>
          </ul>
        </nav>
      </header>
  )
}

export default Cabecalho