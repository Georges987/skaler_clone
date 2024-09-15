
import x from '../../assets/icons/links/twitter.png'
import git from '../../assets/icons/links/github.png'

export const Footer = () => {
    return (
        <footer
            className='px-20'
        >
            <div
                className='border-t flex justify-between border-slate-300'
            >
                <div
                    className='my-auto text-slate-800'
                >
                    Tous droits réservé © 2023 SESURPAY. All rights reserved.
                </div>
                <div
                    className='flex py-2'>
                    <a href="https://x.com">
                        <img className='cursor-pointer' width={30} height={30} src={x} alt="x logo" />
                    </a>
                    <a href="https://github.com/skaler">
                        <img className='cursor-pointer' width={30} height={30} src={git} alt="github logo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}