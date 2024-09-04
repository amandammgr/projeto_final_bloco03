import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-slate-800 text-white">
                <div className="flex flex-col items-center py-4 container">
                    <p className='font-bold text-xl'>Farmácia Generation | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                            <InstagramLogo size={48} weight='bold' />
                        
                            <FacebookLogo size={48} weight='bold' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer




















// import { FacebookLogo, InstagramLogo} from "@phosphor-icons/react"

// function Footer() {
//     return (
//         <div className="flex flex-col justify-center items-center bg-emerald-300 py-4 gap-2">
//             <div className="font-bold text-xl text-center">Farmácia - Programa FullStack Generation</div>

//             <div className="flex flex-col gap-2">
//                 <div className="text-lg">Acesse nossas redes sociais:</div>

//                 <div className="flex flex-row justify-center gap-8">
//                     <FacebookLogo className="cursor-pointer" size={40} />
//                     <InstagramLogo className="cursor-pointer" size={40} />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Footer