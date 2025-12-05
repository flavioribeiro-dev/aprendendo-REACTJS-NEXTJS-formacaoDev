export default function Cabecalho(props: any) {
    return (
        <header className={`
            flex flex-col justify-center items-center
            bg-purple-500 h-36 rounded-lg
        `}>
            <h1 className="text-3xl font-bold">{props.titulo}</h1>
            <h3 className="pt-3 text-xl">{props.subtitulo}</h3>
        </header>
    )
}