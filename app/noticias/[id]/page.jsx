export default function Noticia({ params }) {
    const { id } = params
    return (
        <h1>este es el post {id}</h1>
    )
}