import LoginForm from "./LoginForm"
import { metadata } from "../layout"

export default function Admin() {
    metadata.title = "Login | Pilar Ramos"
    metadata.description = "Solo administradores"
    return (
        <LoginForm />
    )
}