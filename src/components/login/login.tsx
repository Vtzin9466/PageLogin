import Style from './login.module.css'
import Gradient from '../background/background'
import Link from 'next/link'


export default function Login() {
    return (
        <>
            <section> <Gradient /></section>
            <main className={Style.container}>
                <header className={Style.header}>
                    <section className={Style.inicio}>
                        <h1>Seja Bem-Vindo(a)!</h1>
                    </section>
                    <div className={Style.formulario}>
                        <h1>Email <input type="text" className={Style.input}/></h1>
                        <h1>Senha <input type="text" className={Style.input} /></h1>
                        <Link href="cadastro" className={Style.link}>
                            Criar novo Usuario
                        </Link>
                    </div>
                </header>
            </main>
        </>
    )
}