import React, { useState} from 'react'
import CryptoJS from 'crypto-js'
import { Check} from 'lucide-react';
import Cabecalho from './components/Cabecalho';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [hash, setHash] = useState('');
  const [copiar, setCopiar] = useState("Copiar");  

  const handleSubmit = e =>{
    e.preventDefault();
    setInputValue('');


    const criarHash = (texto) => {
      return CryptoJS.SHA256(texto).toString();
      

    }
    if(inputValue.trim().length === 0) return;

     setHash(criarHash(inputValue));
     setInputValue('');
    

    
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopiar(
      <span className="flex items-center gap-1">
        <Check size={16} color="white" /> Copiado
      </span>
    );

    // Voltar ao estado original após 2 segundos
    setTimeout(() => setCopiar('Copiar'), 2000);
  };
  
  return (
    <div>
      <Cabecalho/>
      <main className=" h-[80vh] flex justify-center items-center">
        <section className='flex flex-col gap-4 justify-center items-center   '>
          <h1 className="text-center text-4xl font-bold italic">Hashing<span className='text-blue-500'>-Code</span></h1>
          <div >
            <form className="flex gap-2 items-center justify-center" onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={ e => setInputValue(e.target.value)}
                placeholder="Digite para virar hash"
                className="border-2 py-2 px-4 border-neutral-600 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          
              >
                Enviar
              </button>
          
            </form>
            {hash && (
            <div className=" grid grid-cols-1 gap-4 w-[80%] m-auto bg-gray-100">
          
              <p className="break-words"><strong className="text-center">Hash: </strong>{hash}</p>
              <button
                onClick={handleCopy}
                className="bg-black hover:bg-neutral-600 flex items-center justify-center text-white font-bold py-2 px-4 rounded self-end"
              >
                {copiar}
              </button>
            </div>
          )}
          
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
