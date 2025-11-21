import ImgFundo from '@/public/main-img.jpg';
import '@/app/styles/dashInicial.css';

export default function DashInicial() {
    return (
        <main>
            <div className='card'>

                <div className='card-apresentacao'>
                    <h1>Sua Biblioteca de Filmes e Séries Pessoal!</h1>

                    <p>Transforme sua paixão por cinema em uma experiência organizada e divertida!</p>

                    <h2>O que você pode fazer aqui:</h2>

                    <div className='introducao'>
                        <div>
                            <p>◾ Criar sua lista pessoal de filmes e séries assistidos</p>
                            <p>◾ Salvar produções que você quer ver no futuro</p>
                            <p>◾ Descobrir recomendações baseadas no seu gosto</p>
                            <p>◾ Avaliar e comentar suas experiências</p>
                            <p>◾ Acompanhar suas estatísticas de visualização</p>

                        </div>
                    </div>

                </div>


                <div className='primeiro-passo'>

                    <h2 id='sub-title'>Vamos começar essa aventura cinematográfica?</h2>
                    <div className='login'>
                        <form action={'/login'}>
                            <p><strong>Já tem uma conta?</strong></p>
                            <button>Login</button>
                        </form>
                    </div>

                    <div className='register'>
                        <p><strong>É sua primeira vez?</strong></p>
                        <p><a href="">Clique Aqui</a> e faça seu registro</p>

                    </div>
                </div>

            </div>
        </main>
    )
}