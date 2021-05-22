import className from 'classnames/bind'
import styles from './row.module.scss'

let cx = className.bind(styles)

export default function Row({children, justifyContentCenter,}) {

    const rowClasses = cx ({
        row : true,
        ['justify-content-center']: justifyContentCenter
    })

    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}