export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
          <div className="relative p-4 text-center">
            <h2 className="relative text-blue-900 font-bold z-10">
              <span className="mr-2 font-headline text-3xl">Sobre</span>
              <span className="font-handwriting text-4xl">Min</span>
            </h2>
            <p className="relative text-sm text-gray-600">
                Tenho.....
            </p>
                  <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40">
                  </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-lg">
            <div className="relative bg-blue-100 w-full rounded-lg p-4 ps-20 md:h-64 md:ps-48">
              <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                <p className="font-handwriting text-lg font-bold">Olá,</p>
                <p>
                  <span className="mr-1">Meu nome é </span>
                  <span className="font-headline font-bold uppercase text-blue-900">EdersoN Sousa</span>
                </p>
                <table className="mt-4 w-full text-sm">
                      <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>41</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+5511976765339"
                      className="underline hover:text-blue-800"
                    >
                      +55 11 9.7676-5339
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:ederson.sousadasilva@gmail.com"
                      className="underline hover:text-blue-800"
                    >
                      ederson.sousadasilva@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://goo.gl/maps/6khhxtfdZseKGHxk8"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      São Paulo - SP | Centro
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
              </div>      
              <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(images/eu/eu.jpg)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56">Foto
              </div>
              
            </div>
                    
          </div>

          
        </section>
      )
}