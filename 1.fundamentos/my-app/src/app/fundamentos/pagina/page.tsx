import Cabecalho from "@/_components/Cabecalho";
import Conteudo from "@/_components/Conteudo";
import Rodape from "@/_components/Rodape";

export default function Page() {
    return (
        <div className={`
            flex flex-col gap-4
            p-4 h-screen
        `}>
            <Cabecalho
                titulo="Minha primeira página" 
                subtitulo="Melhor App da web"/>

            <Conteudo />
            
            <Rodape />
        </div>
    )
}