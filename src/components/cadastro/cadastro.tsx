import Style from './cadastro.module.css'
import Gradient from '../background/background'
import Link from 'next/link'

export default function Cadastro() {
    return (
        <>
            <section> <Gradient /></section>
            <main className={Style.container}>
                <header className={Style.header}>
                    <section className={Style.section}>
                        <h1>Cadastro de Usuario</h1>
                    </section>
                    <section className={Style.informacao}>
                        <h1>Nome: <input type="text" className={Style.input} /></h1>
                        <h1>Sobrenome: <input type="text" className={Style.input}/></h1>
                        <h1>Idade: <input type="number" className={Style.input}/></h1>
                        <h1>Email: <input type="text" className={Style.input}/></h1>
                        <h1>Senha: <input type="text" className={Style.input}/></h1>
                    </section>
                </header>
            </main>
        </>
    )
}