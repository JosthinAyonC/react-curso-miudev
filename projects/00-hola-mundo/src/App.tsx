import './App.css'
import { TwitterFollowCard } from './compponents/TwitterCard.tsx'

export function App() {

    const handleFollow = (username: string) => {
        console.log(`Siguiendo a ${username}`);
    };

    // const formatedUserNamed = <span>@Chustin</span>
    // REACT renderiza los elementos de un componente.
    // Elemento => Es una representación de un objeto en el DOM
    // Componente => Es una función que retorna un elemento

    const users = [
        { username: 'Chustin', name: 'Josthin Ayon', isFollowing: true },
        { username: 'Midudev', name: 'Juan Miguel Duran', isFollowing: false },
        { username: 'Demacia', name: 'Garen Demacia', isFollowing: true },
        { username: 'Noxus', name: 'Darius Noxus', isFollowing: false }
    ]

    return (
        <section className='App'>
            {users.map(({ username, name, isFollowing }) => {
                return (
                    <TwitterFollowCard
                        key={username} // Es importante agregar una key para que react pueda identificar los elementos unidos,
                        // esto solo es necesario cuando se esta iterando un array 
                        username={username}
                        initialIsFollowing={isFollowing}
                        onFollow={handleFollow}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })}
        </section>
    )
}
// // Las props deben ser inmutables debido a que son solo lectura, no deberiamos modificarlas
// <div className='App'>
//     <TwitterFollowCard
//         username='Chustin'
//         initialIsFollowing={true}
//         onFollow={handleFollow} //Forma para pasar una funcion como prop
//     // formatedUserNamed={formatedUserNamed} Una forma de pasar un elemento como prop
//     >
//         Josthin Ayon
//     </TwitterFollowCard>
// </div>