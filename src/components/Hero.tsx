import{ HiDownload } from 'react-icons/hi'

export function Hero() {
    return (
        
        <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
                <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
                    
                            <div className="basis-1/2">
                                                    <h1 className="mb-6 text-center md:text-left">
                                                <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo </span> 
                                                <span className="font-headline text-5xl font-semibold">EdersoN </span>   
                                                <span className="font-headline text-5xl font-light text-blue-400"> Sousa</span>   
                                            </h1>
                                            <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
                                                <div className="h-1 w-12 rounded-full bg-blue-800"> </div>
                                                Analista Desenvolvedor
                                            </h2>
                                            <p className="text-gray-600 my-6 text-center md:text-left">
                                                    Movido por desafios e apaixonado por encontrar soluções inovadoras que tragam 
                                                    valor real para as empresas e, consequentemente, para a sociedade. 
                                                    Sua combinação única de habilidades técnicas e visão de negócios 
                                                    o coloca em uma posição estratégica para impulsionar a transformação digital e
                                                    o progresso tecnológico nas organizações em que atua.
                                            </p>
                                            <div className="flex items-center justify-center md:justify-start gap-2">
                                                <a href="#" className="underline font-bold text-white">Fale Comigo </a>
                                                <span className="italic text-gray-500"> ou </span>
                                                <a href="#" className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"> 
                                                    <HiDownload />
                                                    Baixe o meu CV
                                                </a>
                        
                                            </div>
                            </div>
                            <div className="basis-1/2">algooo Div02
                            </div>

                    
                    
                </div>
                
        </section>
        
      )
}