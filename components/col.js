import className from 'classnames/bind'

import style from './col.module.scss';

let cx = className.bind(style);

export default function Col({children, xs, sm, md, lg}) {

    const colClasses = cx({
        col : true,
        [`col--xs--${xs}`] : xs,
        [`col--sm--${sm}`] : sm,
        [`col--md--${md}`] : md,
        [`col--lg--${lg}`] : lg,

    })

    return (
        <div className={colClasses}>
            {children}
        </div>
    )
}